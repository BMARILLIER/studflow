-- Beta access control tables and RPC functions
-- Run this in the Supabase SQL editor

-- ============================================================
-- Table: beta_invites — one row per invite link token
-- ============================================================
CREATE TABLE IF NOT EXISTS beta_invites (
    token       TEXT PRIMARY KEY,
    status      TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked')),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    note        TEXT,
    invited_by  TEXT DEFAULT NULL,
    uses        INT  NOT NULL DEFAULT 0,
    max_uses    INT  NOT NULL DEFAULT 1
);

-- ============================================================
-- Table: beta_testers — one row per activated tester
-- ============================================================
CREATE TABLE IF NOT EXISTS beta_testers (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    token         TEXT NOT NULL REFERENCES beta_invites(token),
    email         TEXT NOT NULL UNIQUE,
    status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked')),
    attempts      INT NOT NULL DEFAULT 1,
    first_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    last_seen_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_beta_testers_token ON beta_testers(token);
CREATE INDEX IF NOT EXISTS idx_beta_testers_status ON beta_testers(status);

-- ============================================================
-- RPC: beta_activate(p_token, p_email)
-- Called by anonymous users to validate their invite link.
-- Returns JSON: { "ok": true } or { "ok": false, "code": "..." }
-- ============================================================
CREATE OR REPLACE FUNCTION beta_activate(p_token TEXT, p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_invite   RECORD;
    v_tester   RECORD;
    v_count    INT;
BEGIN
    -- 1. Token must exist
    SELECT * INTO v_invite FROM beta_invites WHERE token = p_token;
    IF NOT FOUND THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_token');
    END IF;

    -- 2. Token must be active
    IF v_invite.status = 'revoked' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'token_revoked');
    END IF;

    -- 3. Check if token already bound to a different email
    SELECT * INTO v_tester FROM beta_testers WHERE token = p_token;
    IF FOUND AND v_tester.email <> p_email THEN
        -- Log the sharing attempt
        UPDATE beta_testers SET attempts = attempts + 1 WHERE token = p_token;
        RETURN jsonb_build_object('ok', false, 'code', 'token_used');
    END IF;

    -- 4. If same email returning, update last_seen and allow
    IF FOUND AND v_tester.email = p_email THEN
        UPDATE beta_testers SET last_seen_at = now() WHERE token = p_token;
        RETURN jsonb_build_object('ok', true);
    END IF;

    -- 5. Check max_uses for this token
    IF v_invite.uses >= v_invite.max_uses THEN
        RETURN jsonb_build_object('ok', false, 'code', 'token_used');
    END IF;

    -- 6. Check quota (200 active testers max)
    SELECT COUNT(*) INTO v_count FROM beta_testers WHERE status = 'active';
    IF v_count >= 200 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'beta_full');
    END IF;

    -- 7. Register new tester + increment uses
    INSERT INTO beta_testers (token, email)
    VALUES (p_token, p_email);
    UPDATE beta_invites SET uses = uses + 1 WHERE token = p_token;

    RETURN jsonb_build_object('ok', true);
END;
$$;

-- ============================================================
-- RPC: beta_revoke(p_token)
-- Admin-only: revokes a token and its associated tester.
-- ============================================================
CREATE OR REPLACE FUNCTION beta_revoke(p_token TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Only admins can revoke tokens
    IF NOT EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()) THEN
        RETURN jsonb_build_object('ok', false, 'code', 'unauthorized');
    END IF;

    UPDATE beta_invites SET status = 'revoked' WHERE token = p_token;
    UPDATE beta_testers SET status = 'revoked' WHERE token = p_token;
    RETURN jsonb_build_object('ok', true);
END;
$$;

-- ============================================================
-- RPC: beta_create_invite(p_email)
-- Called by an active tester to generate an invite for a friend.
-- Max 2 invites per tester. Respects global 200 limit.
-- Returns JSON: { "ok": true, "token": "..." } or { "ok": false, "code": "..." }
-- ============================================================
CREATE OR REPLACE FUNCTION beta_create_invite(p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_tester       RECORD;
    v_invite_count INT;
    v_tester_count INT;
    v_new_token    TEXT;
BEGIN
    SELECT * INTO v_tester FROM beta_testers WHERE email = p_email AND status = 'active';
    IF NOT FOUND THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_a_tester');
    END IF;

    SELECT COUNT(*) INTO v_invite_count FROM beta_invites WHERE invited_by = p_email;
    IF v_invite_count >= 2 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'max_invites_reached');
    END IF;

    SELECT COUNT(*) INTO v_tester_count FROM beta_testers WHERE status = 'active';
    IF v_tester_count >= 200 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'beta_full');
    END IF;

    v_new_token := 'ref-' || encode(gen_random_bytes(12), 'hex');

    INSERT INTO beta_invites (token, status, invited_by, uses, max_uses, note)
    VALUES (v_new_token, 'active', p_email, 0, 1, 'Referral by ' || p_email);

    RETURN jsonb_build_object('ok', true, 'token', v_new_token);
END;
$$;

-- ============================================================
-- RPC: beta_get_invites(p_email)
-- Returns the caller's generated invites (max 2).
-- ============================================================
CREATE OR REPLACE FUNCTION beta_get_invites(p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_tester RECORD;
    v_result JSONB;
BEGIN
    SELECT * INTO v_tester FROM beta_testers WHERE email = p_email AND status = 'active';
    IF NOT FOUND THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_a_tester');
    END IF;

    SELECT jsonb_agg(jsonb_build_object(
        'token', bi.token,
        'status', bi.status,
        'uses', bi.uses,
        'max_uses', bi.max_uses,
        'created_at', bi.created_at
    ))
    INTO v_result
    FROM beta_invites bi
    WHERE bi.invited_by = p_email
    ORDER BY bi.created_at;

    RETURN jsonb_build_object('ok', true, 'invites', COALESCE(v_result, '[]'::jsonb));
END;
$$;

-- ============================================================
-- Table: beta_waitlist — emails collected when beta is full
-- ============================================================
CREATE TABLE IF NOT EXISTS beta_waitlist (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email      TEXT NOT NULL UNIQUE,
    source     TEXT DEFAULT NULL,
    notes      TEXT DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- RPC: beta_waitlist_join(p_email, p_source)
-- Called by anonymous users when beta is full.
-- Returns JSON: { "ok": true } or { "ok": false, "code": "..." }
-- ============================================================
CREATE OR REPLACE FUNCTION beta_waitlist_join(p_email TEXT, p_source TEXT DEFAULT NULL)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    INSERT INTO beta_waitlist (email, source)
    VALUES (p_email, p_source)
    ON CONFLICT (email) DO NOTHING;

    -- Check if it was a conflict (already existed)
    IF NOT FOUND THEN
        RETURN jsonb_build_object('ok', false, 'code', 'already_listed');
    END IF;

    RETURN jsonb_build_object('ok', true);
END;
$$;

-- ============================================================
-- RLS: anon can only call beta_activate; admin via service key
-- ============================================================
ALTER TABLE beta_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE beta_invites ENABLE ROW LEVEL SECURITY;
ALTER TABLE beta_testers ENABLE ROW LEVEL SECURITY;

-- No direct table access for anon — all access goes through RPC
-- (SECURITY DEFINER functions bypass RLS)

-- Grant execute on beta_activate, beta_create_invite, beta_get_invites to anon role
GRANT EXECUTE ON FUNCTION beta_activate(TEXT, TEXT) TO anon;
GRANT EXECUTE ON FUNCTION beta_create_invite(TEXT) TO anon;
GRANT EXECUTE ON FUNCTION beta_get_invites(TEXT) TO anon;
GRANT EXECUTE ON FUNCTION beta_waitlist_join(TEXT, TEXT) TO anon;

-- beta_revoke is admin-only (checked inside function + grant restricted)
GRANT EXECUTE ON FUNCTION beta_revoke(TEXT) TO authenticated;
REVOKE EXECUTE ON FUNCTION beta_revoke(TEXT) FROM anon;
