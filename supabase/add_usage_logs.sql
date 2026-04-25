-- add_usage_logs.sql — Tracking usage minimal (login, session start/end).
-- Run once in Supabase SQL editor. Identification par email (localStorage)
-- via le beta flow existant.

BEGIN;

CREATE TABLE IF NOT EXISTS usage_logs (
    id          BIGSERIAL   PRIMARY KEY,
    user_id     TEXT        NOT NULL,
    event_type  TEXT        NOT NULL,
    value       JSONB,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_usage_user_time
    ON usage_logs (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_usage_event_time
    ON usage_logs (event_type, created_at DESC);

CREATE OR REPLACE FUNCTION usage_log(
    p_email TEXT, p_event TEXT, p_value JSONB
) RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email TEXT;
    v_event TEXT;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    v_event := trim(coalesce(p_event, ''));
    IF v_email = '' OR v_event = '' THEN RETURN; END IF;
    IF length(v_event) > 64 THEN v_event := substr(v_event, 1, 64); END IF;
    INSERT INTO usage_logs (user_id, event_type, value)
        VALUES (v_email, v_event, p_value);
END;
$$;

GRANT EXECUTE ON FUNCTION usage_log(TEXT, TEXT, JSONB) TO anon, authenticated;

COMMIT;
