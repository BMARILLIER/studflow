-- Beta referral system — migration
-- Run AFTER beta_schema.sql in the Supabase SQL editor
--
-- Adds referral columns to beta_invites and RPCs for tester-generated invites.

-- ============================================================
-- Schema changes: add referral columns to beta_invites
-- ============================================================
ALTER TABLE beta_invites ADD COLUMN IF NOT EXISTS invited_by TEXT DEFAULT NULL;
ALTER TABLE beta_invites ADD COLUMN IF NOT EXISTS uses       INT  NOT NULL DEFAULT 0;
ALTER TABLE beta_invites ADD COLUMN IF NOT EXISTS max_uses   INT  NOT NULL DEFAULT 1;

-- ============================================================
-- Update beta_activate to track uses
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

    -- 6. Check global quota (200 active testers max)
    SELECT COUNT(*) INTO v_count FROM beta_testers WHERE status = 'active';
    IF v_count >= 200 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'beta_full');
    END IF;

    -- 7. Register new tester + increment uses
    INSERT INTO beta_testers (token, email) VALUES (p_token, p_email);
    UPDATE beta_invites SET uses = uses + 1 WHERE token = p_token;

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
    -- 1. Caller must be an active tester
    SELECT * INTO v_tester FROM beta_testers WHERE email = p_email AND status = 'active';
    IF NOT FOUND THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_a_tester');
    END IF;

    -- 2. Check how many invites this tester has already generated
    SELECT COUNT(*) INTO v_invite_count
    FROM beta_invites WHERE invited_by = p_email;
    IF v_invite_count >= 2 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'max_invites_reached');
    END IF;

    -- 3. Check global quota before creating invite
    SELECT COUNT(*) INTO v_tester_count FROM beta_testers WHERE status = 'active';
    IF v_tester_count >= 200 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'beta_full');
    END IF;

    -- 4. Generate unique token (short random hex)
    v_new_token := 'ref-' || encode(gen_random_bytes(12), 'hex');

    -- 5. Insert invite
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
    -- Must be an active tester
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
-- Permissions
-- ============================================================
GRANT EXECUTE ON FUNCTION beta_create_invite(TEXT) TO anon;
GRANT EXECUTE ON FUNCTION beta_get_invites(TEXT) TO anon;
