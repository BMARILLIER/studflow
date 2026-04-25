-- add_track.sql — Adds `track` (bac|brevet) to beta_testers + helper RPCs.
-- Run once in the Supabase SQL editor.
--
-- Context: StudFlow beta uses an email-only access flow (no Supabase auth).
-- The user is identified by the email stored in localStorage
-- (studflow_beta_email). The track is therefore keyed by email on the
-- existing beta_testers table, not on profiles.

BEGIN;

-- 1. Column
ALTER TABLE beta_testers
    ADD COLUMN IF NOT EXISTS track TEXT
    CHECK (track IS NULL OR track IN ('bac', 'brevet'));

-- 2. RPC: read the track for an email. Returns { ok, track, code? }.
CREATE OR REPLACE FUNCTION beta_get_track(p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_email TEXT;
    v_track TEXT;
    v_found BOOLEAN;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    IF v_email = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_email');
    END IF;

    SELECT track, TRUE INTO v_track, v_found
    FROM beta_testers
    WHERE lower(email) = v_email
    LIMIT 1;

    IF NOT v_found THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_on_list');
    END IF;

    RETURN jsonb_build_object('ok', true, 'track', v_track);
END;
$$;

-- 3. RPC: set the track (once). Refuses to change it once set.
CREATE OR REPLACE FUNCTION beta_set_track(p_email TEXT, p_track TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_email   TEXT;
    v_current TEXT;
    v_found   BOOLEAN;
BEGIN
    IF p_track NOT IN ('bac', 'brevet') THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_track');
    END IF;
    v_email := lower(trim(coalesce(p_email, '')));
    IF v_email = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_email');
    END IF;

    SELECT track, TRUE INTO v_current, v_found
    FROM beta_testers
    WHERE lower(email) = v_email
    LIMIT 1;

    IF NOT v_found THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_on_list');
    END IF;

    IF v_current IS NOT NULL AND v_current <> p_track THEN
        -- Lock: once chosen, cannot switch
        RETURN jsonb_build_object('ok', false, 'code', 'track_locked', 'track', v_current);
    END IF;

    UPDATE beta_testers
        SET track = p_track
    WHERE lower(email) = v_email;

    RETURN jsonb_build_object('ok', true, 'track', p_track);
END;
$$;

GRANT EXECUTE ON FUNCTION beta_get_track(TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION beta_set_track(TEXT, TEXT) TO anon, authenticated;

COMMIT;
