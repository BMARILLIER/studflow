-- add_friends.sql — Friends-only weekly leaderboard via friend codes.
-- Drops the public leaderboard_get endpoint. Run once in Supabase SQL editor.
-- Requires add_leaderboard.sql to have been run already (leaderboard_weekly + lb_current_week).

BEGIN;

-- =========================================================================
-- 1. Friend code on beta_testers
-- =========================================================================
ALTER TABLE beta_testers
    ADD COLUMN IF NOT EXISTS friend_code TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS uidx_beta_testers_friend_code
    ON beta_testers (friend_code)
    WHERE friend_code IS NOT NULL;

-- =========================================================================
-- 2. Friendships (symmetric — stored as two rows for simple queries)
-- =========================================================================
CREATE TABLE IF NOT EXISTS friendships (
    owner_email   TEXT        NOT NULL,
    friend_email  TEXT        NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (owner_email, friend_email),
    CHECK (owner_email <> friend_email)
);
CREATE INDEX IF NOT EXISTS idx_friendships_owner ON friendships (owner_email);

-- =========================================================================
-- 3. Friend code helpers
-- =========================================================================

-- 6 chars, alphabet excludes 0/O/1/I to avoid confusion.
CREATE OR REPLACE FUNCTION friend_code_generate()
RETURNS TEXT LANGUAGE plpgsql AS $$
DECLARE
    v_alphabet CONSTANT TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    v_code     TEXT;
    v_i        INT;
    v_exists   BOOLEAN;
BEGIN
    LOOP
        v_code := '';
        FOR v_i IN 1..6 LOOP
            v_code := v_code || substr(v_alphabet,
                1 + floor(random() * length(v_alphabet))::int, 1);
        END LOOP;
        SELECT EXISTS(SELECT 1 FROM beta_testers WHERE friend_code = v_code)
            INTO v_exists;
        EXIT WHEN NOT v_exists;
    END LOOP;
    RETURN v_code;
END; $$;

-- Return (and lazily create) the user's friend code.
CREATE OR REPLACE FUNCTION friend_code_get(p_email TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email TEXT;
    v_code  TEXT;
    v_found BOOLEAN;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    IF v_email = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_email');
    END IF;

    SELECT friend_code, TRUE INTO v_code, v_found
      FROM beta_testers WHERE lower(email) = v_email LIMIT 1;

    IF NOT v_found THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_on_list');
    END IF;

    IF v_code IS NULL THEN
        v_code := friend_code_generate();
        UPDATE beta_testers SET friend_code = v_code WHERE lower(email) = v_email;
    END IF;

    RETURN jsonb_build_object('ok', true, 'friend_code', v_code);
END; $$;

-- =========================================================================
-- 4. Friend add / remove (symmetric)
-- =========================================================================

CREATE OR REPLACE FUNCTION friend_add(p_email TEXT, p_code TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email        TEXT;
    v_code         TEXT;
    v_friend_email TEXT;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    v_code  := upper(trim(coalesce(p_code, '')));
    IF v_email = '' OR v_code = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_input');
    END IF;

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

-- Remove a friend by their friend_code (never expose emails to the client).
CREATE OR REPLACE FUNCTION friend_remove(p_email TEXT, p_friend_code TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email        TEXT;
    v_code         TEXT;
    v_friend_email TEXT;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    v_code  := upper(trim(coalesce(p_friend_code, '')));
    IF v_email = '' OR v_code = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_input');
    END IF;

    SELECT lower(email) INTO v_friend_email
      FROM beta_testers WHERE friend_code = v_code LIMIT 1;

    IF v_friend_email IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'code', 'unknown_code');
    END IF;

    DELETE FROM friendships
     WHERE owner_email = v_email AND friend_email = v_friend_email;
    DELETE FROM friendships
     WHERE owner_email = v_friend_email AND friend_email = v_email;

    RETURN jsonb_build_object('ok', true);
END; $$;

-- =========================================================================
-- 5. Read endpoints
-- =========================================================================

-- List of friends (friend_code acts as the stable public id — not the email).
CREATE OR REPLACE FUNCTION friends_list(p_email TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email TEXT;
    v_rows  JSONB;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    IF v_email = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_email');
    END IF;

    SELECT jsonb_agg(row_to_json(t))
      INTO v_rows
      FROM (
        SELECT bt.friend_code,
               COALESCE(lb.pseudo, '') AS pseudo,
               COALESCE(lb.track, '')  AS track
          FROM friendships f
          JOIN beta_testers bt ON lower(bt.email) = f.friend_email
          LEFT JOIN LATERAL (
              SELECT pseudo, track
                FROM leaderboard_weekly lb2
               WHERE lb2.email = f.friend_email
               ORDER BY week_start DESC
               LIMIT 1
          ) lb ON TRUE
         WHERE f.owner_email = v_email
         ORDER BY f.created_at
      ) t;

    RETURN jsonb_build_object('ok', true, 'friends', COALESCE(v_rows, '[]'::jsonb));
END; $$;

-- Weekly leaderboard: me + my friends, current week.
-- Returns pseudo/xp/track/is_me only — never emails.
CREATE OR REPLACE FUNCTION leaderboard_friends(p_email TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email TEXT;
    v_rows  JSONB;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    IF v_email = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_email');
    END IF;

    WITH circle AS (
        SELECT v_email AS email
        UNION
        SELECT friend_email FROM friendships WHERE owner_email = v_email
    )
    SELECT jsonb_agg(row_to_json(t) ORDER BY t.xp DESC)
      INTO v_rows
      FROM (
        SELECT lb.pseudo,
               lb.xp,
               lb.track,
               (lb.email = v_email) AS is_me
          FROM leaderboard_weekly lb
          JOIN circle c ON c.email = lb.email
         WHERE lb.week_start = lb_current_week()
         ORDER BY lb.xp DESC
      ) t;

    RETURN jsonb_build_object('ok', true, 'rows', COALESCE(v_rows, '[]'::jsonb));
END; $$;

-- =========================================================================
-- 6. Drop the old public leaderboard (no more global ranking)
-- =========================================================================
DROP FUNCTION IF EXISTS leaderboard_get(TEXT, INTEGER);

-- =========================================================================
-- 7. Grants
-- =========================================================================
GRANT EXECUTE ON FUNCTION friend_code_get(TEXT)            TO anon, authenticated;
GRANT EXECUTE ON FUNCTION friend_add(TEXT, TEXT)           TO anon, authenticated;
GRANT EXECUTE ON FUNCTION friend_remove(TEXT, TEXT)        TO anon, authenticated;
GRANT EXECUTE ON FUNCTION friends_list(TEXT)               TO anon, authenticated;
GRANT EXECUTE ON FUNCTION leaderboard_friends(TEXT)        TO anon, authenticated;

COMMIT;
