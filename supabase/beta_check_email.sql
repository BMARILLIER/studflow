-- Email-only beta gate: checks if an email is pre-authorized in beta_testers.
-- Replaces the URL-token flow. Run once in the Supabase SQL editor.

CREATE OR REPLACE FUNCTION beta_check_email(p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_email TEXT;
BEGIN
    v_email := lower(trim(p_email));

    IF v_email IS NULL OR v_email = '' THEN
        RETURN jsonb_build_object('ok', false, 'code', 'invalid_email');
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM beta_testers
        WHERE lower(email) = v_email
    ) THEN
        RETURN jsonb_build_object('ok', false, 'code', 'not_on_list');
    END IF;

    RETURN jsonb_build_object('ok', true);
END;
$$;

GRANT EXECUTE ON FUNCTION beta_check_email(TEXT) TO anon;
GRANT EXECUTE ON FUNCTION beta_check_email(TEXT) TO authenticated;
