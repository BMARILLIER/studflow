-- add_friend_rate_limit.sql — server-side rate limit for friend_add.
-- Run AFTER add_friends.sql. Idempotent: safe to re-run.
--
-- Limit: 5 friend_add attempts per rolling 60 seconds per email.
-- The client also rate-limits in memory; this is the second line of
-- defense in case the client is bypassed or runs in multiple tabs.

-- =========================================================================
-- 1. Attempt log (lightweight, periodically pruned)
-- =========================================================================

CREATE TABLE IF NOT EXISTS friend_add_log (
    email        TEXT        NOT NULL,
    attempted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_friend_add_log_email_time
    ON friend_add_log (email, attempted_at DESC);

-- Lock down: only the SECURITY DEFINER function should ever read/write.
ALTER TABLE friend_add_log ENABLE ROW LEVEL SECURITY;
-- (No policies = no client access. The SECURITY DEFINER function bypasses RLS.)

-- =========================================================================
-- 2. friend_add with rate limit (replaces the version from add_friends.sql)
-- =========================================================================

CREATE OR REPLACE FUNCTION friend_add(p_email TEXT, p_code TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email        TEXT;
    v_code         TEXT;
    v_friend_email TEXT;
    v_recent_count INTEGER;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    v_code  := upper(trim(coalesce(p_code, '')));
    IF v_email = '' OR v_code = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_input');
    END IF;

    -- Rate limit: 5 attempts per rolling 60s window per email.
    SELECT count(*) INTO v_recent_count
      FROM friend_add_log
     WHERE email = v_email
       AND attempted_at > now() - interval '60 seconds';
    IF v_recent_count >= 5 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'rate_limited');
    END IF;
    INSERT INTO friend_add_log (email) VALUES (v_email);

    -- Opportunistic cleanup: ~1% of calls prune entries older than 1 hour.
    -- Keeps the table tiny without a separate cron job.
    IF random() < 0.01 THEN
        DELETE FROM friend_add_log WHERE attempted_at < now() - interval '1 hour';
    END IF;

    -- Original lookup + insert logic (mirrors add_friends.sql).
    SELECT lower(email) INTO v_friend_email
      FROM beta_testers WHERE friend_code = v_code LIMIT 1;

    IF v_friend_email IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'code', 'unknown_code');
    END IF;
    IF v_friend_email = v_email THEN
        RETURN jsonb_build_object('ok', false, 'code', 'self');
    END IF;

    INSERT INTO friendships (owner_email, friend_email)
        VALUES (v_email, v_friend_email) ON CONFLICT DO NOTHING;
    INSERT INTO friendships (owner_email, friend_email)
        VALUES (v_friend_email, v_email) ON CONFLICT DO NOTHING;

    RETURN jsonb_build_object('ok', true);
END; $$;

GRANT EXECUTE ON FUNCTION friend_add(TEXT, TEXT) TO anon, authenticated;
