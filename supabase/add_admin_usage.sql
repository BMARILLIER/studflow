-- add_admin_usage.sql — Mini dashboard admin beta (usage_logs).
-- Requiert add_usage_logs.sql (table + RPC usage_log). Run une fois.

BEGIN;

-- Liste des emails admin (simple, gated par email beta)
CREATE TABLE IF NOT EXISTS admin_emails (
    email      TEXT        PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Agrege les 4 metriques pour le dashboard admin (verrouille par email).
-- Retourne {ok:false, code:'not_admin'} pour les non-admins (client ne voit rien).
CREATE OR REPLACE FUNCTION admin_usage_stats(p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
    v_email          TEXT;
    v_is_admin       BOOLEAN;
    v_active_24h     INT;
    v_logins_today   INT;
    v_sessions_today INT;
    v_cards_today    BIGINT;
    v_start_today    TIMESTAMPTZ;
BEGIN
    v_email := lower(trim(coalesce(p_email, '')));
    IF v_email = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_email');
    END IF;

    SELECT EXISTS(SELECT 1 FROM admin_emails WHERE lower(email) = v_email)
        INTO v_is_admin;
    IF NOT v_is_admin THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_admin');
    END IF;

    -- "Today" = journee en cours Europe/Paris
    v_start_today := (date_trunc('day', now() AT TIME ZONE 'Europe/Paris'))
                     AT TIME ZONE 'Europe/Paris';

    SELECT count(DISTINCT user_id) INTO v_active_24h
      FROM usage_logs
     WHERE created_at > now() - interval '24 hours';

    SELECT count(*) INTO v_logins_today
      FROM usage_logs
     WHERE event_type = 'login'
       AND created_at >= v_start_today;

    SELECT count(*) INTO v_sessions_today
      FROM usage_logs
     WHERE event_type = 'session_end'
       AND created_at >= v_start_today;

    SELECT coalesce(sum( (value->>'cards')::int ), 0) INTO v_cards_today
      FROM usage_logs
     WHERE event_type = 'session_end'
       AND created_at >= v_start_today
       AND value ? 'cards';

    RETURN jsonb_build_object(
        'ok', true,
        'active_24h', v_active_24h,
        'logins_today', v_logins_today,
        'sessions_today', v_sessions_today,
        'cards_today', v_cards_today
    );
END;
$$;

GRANT EXECUTE ON FUNCTION admin_usage_stats(TEXT) TO anon, authenticated;

COMMIT;
