-- Admin role management — server-side
-- Run this in the Supabase SQL editor

-- ============================================================
-- Table: admins — one row per admin user
-- ============================================================
CREATE TABLE IF NOT EXISTS admins (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    note TEXT
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- No direct table access — all access goes through RPC
-- (admins can only be managed via service_role / SQL editor)

-- ============================================================
-- RPC: is_admin()
-- Called by authenticated users to check their own admin status.
-- Returns boolean true/false.
-- ============================================================
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM admins WHERE user_id = auth.uid()
    );
END;
$$;

-- Grant execute to authenticated users only (not anon)
GRANT EXECUTE ON FUNCTION is_admin() TO authenticated;
REVOKE EXECUTE ON FUNCTION is_admin() FROM anon;

-- ============================================================
-- Seed: insert your admin user
-- Replace the UUID with your actual auth.users.id
-- You can find it in Supabase Dashboard > Authentication > Users
-- ============================================================
-- INSERT INTO admins (user_id, note)
-- VALUES ('YOUR-USER-UUID-HERE', 'Initial admin')
-- ON CONFLICT (user_id) DO NOTHING;
--
-- Alternative: insert by email lookup
-- INSERT INTO admins (user_id, note)
-- SELECT id, 'Initial admin'
-- FROM auth.users
-- WHERE email = 'bm.myreseau@gmail.com'
-- ON CONFLICT (user_id) DO NOTHING;
