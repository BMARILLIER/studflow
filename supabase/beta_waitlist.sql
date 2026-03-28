-- Beta waitlist — migration
-- Run AFTER beta_schema.sql in the Supabase SQL editor

CREATE TABLE IF NOT EXISTS beta_waitlist (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email      TEXT NOT NULL UNIQUE,
    source     TEXT DEFAULT NULL,
    notes      TEXT DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE beta_waitlist ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION beta_waitlist_join(p_email TEXT, p_source TEXT DEFAULT NULL)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    INSERT INTO beta_waitlist (email, source)
    VALUES (p_email, p_source)
    ON CONFLICT (email) DO NOTHING;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('ok', false, 'code', 'already_listed');
    END IF;

    RETURN jsonb_build_object('ok', true);
END;
$$;

GRANT EXECUTE ON FUNCTION beta_waitlist_join(TEXT, TEXT) TO anon;
