-- add_leaderboard.sql — Weekly leaderboard scoped strictly by track.
-- Week boundary = Monday 00:00 Europe/Paris. Run once in Supabase SQL editor.
-- This script is idempotent and also re-applies the 2026-04 fixes:
--   * week in Europe/Paris (not UTC)
--   * track is mandatory on submit and get (no cross-track ranking)
--   * lb_current_week marked STABLE (calls now())

BEGIN;

CREATE TABLE IF NOT EXISTS leaderboard_weekly (
    email       TEXT        NOT NULL,
    week_start  DATE        NOT NULL,
    pseudo      TEXT        NOT NULL,
    xp          INTEGER     NOT NULL DEFAULT 0,
    track       TEXT        CHECK (track IS NULL OR track IN ('bac', 'brevet')),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (email, week_start)
);

CREATE INDEX IF NOT EXISTS idx_lb_week_track_xp
    ON leaderboard_weekly (week_start, track, xp DESC);

-- Monday of current ISO week in Europe/Paris.
CREATE OR REPLACE FUNCTION lb_current_week()
RETURNS DATE LANGUAGE SQL STABLE AS $$
    SELECT date_trunc('week', now() AT TIME ZONE 'Europe/Paris')::date;
$$;

-- Upsert a player's weekly XP. Track is required (no cross-track ranking).
-- XP only grows within a week (GREATEST of stored vs submitted).
CREATE OR REPLACE FUNCTION leaderboard_submit(
    p_email TEXT, p_pseudo TEXT, p_xp INTEGER, p_track TEXT
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email  TEXT;
    v_pseudo TEXT;
    v_week   DATE;
BEGIN
    IF p_track NOT IN ('bac', 'brevet') THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_track');
    END IF;

    v_email  := lower(trim(coalesce(p_email, '')));
    v_pseudo := trim(coalesce(p_pseudo, ''));
    IF v_email = '' OR v_pseudo = '' OR p_xp IS NULL OR p_xp < 0 THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_input');
    END IF;
    IF length(v_pseudo) > 24 THEN v_pseudo := substr(v_pseudo, 1, 24); END IF;

    v_week := lb_current_week();

    INSERT INTO leaderboard_weekly (email, week_start, pseudo, xp, track)
    VALUES (v_email, v_week, v_pseudo, p_xp, p_track)
    ON CONFLICT (email, week_start) DO UPDATE
        SET xp         = GREATEST(leaderboard_weekly.xp, EXCLUDED.xp),
            pseudo     = EXCLUDED.pseudo,
            track      = EXCLUDED.track,
            updated_at = now();

    RETURN jsonb_build_object('ok', true);
END;
$$;

-- Top N of the current week for a given track. Track is mandatory.
CREATE OR REPLACE FUNCTION leaderboard_get(
    p_track TEXT, p_limit INTEGER
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_limit INTEGER;
    v_rows  JSONB;
BEGIN
    IF p_track NOT IN ('bac', 'brevet') THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_track');
    END IF;
    v_limit := LEAST(GREATEST(COALESCE(p_limit, 20), 1), 50);

    SELECT jsonb_agg(row_to_json(t) ORDER BY t.xp DESC)
      INTO v_rows
      FROM (
        SELECT pseudo, xp
          FROM leaderboard_weekly
         WHERE week_start = lb_current_week()
           AND track = p_track
         ORDER BY xp DESC
         LIMIT v_limit
      ) t;

    RETURN jsonb_build_object('ok', true, 'rows', COALESCE(v_rows, '[]'::jsonb));
END;
$$;

GRANT EXECUTE ON FUNCTION leaderboard_submit(TEXT, TEXT, INTEGER, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION leaderboard_get(TEXT, INTEGER) TO anon, authenticated;

COMMIT;
