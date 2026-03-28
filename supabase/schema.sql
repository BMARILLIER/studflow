-- ============================================================
-- StudFlow — Sprint A : Auth + Sync + RLS
-- Coller dans Supabase > SQL Editor > Run
-- IMPORTANT : desactiver la traduction du navigateur
-- ============================================================

-- Nettoyage (safe si premiere execution)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user();
DROP FUNCTION IF EXISTS delete_own_account();
DROP FUNCTION IF EXISTS update_updated_at();
DROP TABLE IF EXISTS activity_log;
DROP TABLE IF EXISTS user_state;
DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS profiles;

-- ==================== 1. TABLES ====================

CREATE TABLE profiles (
    id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email       TEXT,
    created_at  TIMESTAMPTZ DEFAULT now(),
    updated_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE user_state (
    id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data        JSONB DEFAULT '{}',
    updated_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE activity_log (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    event       TEXT NOT NULL,
    payload     JSONB DEFAULT '{}',
    created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE subscriptions (
    user_id     UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    plan        TEXT DEFAULT 'free',
    status      TEXT DEFAULT 'inactive',
    expires_at  TIMESTAMPTZ,
    method      TEXT,
    updated_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_activity_log_user ON activity_log(user_id, created_at DESC);

-- ==================== 2. AUTO updated_at ====================

CREATE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_profiles_ts BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_user_state_ts BEFORE UPDATE ON user_state
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_subscriptions_ts BEFORE UPDATE ON subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ==================== 3. AUTO-CREATE ON SIGNUP ====================

CREATE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO profiles (id, email) VALUES (NEW.id, NEW.email);
    INSERT INTO user_state (id, data) VALUES (NEW.id, '{}');
    INSERT INTO subscriptions (user_id) VALUES (NEW.id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ==================== 4. RLS ====================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- profiles
CREATE POLICY "profiles_select" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update" ON profiles FOR UPDATE USING (auth.uid() = id);

-- user_state
CREATE POLICY "state_select" ON user_state FOR SELECT USING (auth.uid() = id);
CREATE POLICY "state_insert" ON user_state FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "state_update" ON user_state FOR UPDATE USING (auth.uid() = id);

-- activity_log
CREATE POLICY "log_insert" ON activity_log FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "log_select" ON activity_log FOR SELECT USING (auth.uid() = user_id);

-- subscriptions
CREATE POLICY "sub_select" ON subscriptions FOR SELECT USING (auth.uid() = user_id);

-- ==================== 5. RGPD : DELETE ACCOUNT ====================

CREATE FUNCTION delete_own_account()
RETURNS VOID AS $$
BEGIN
    DELETE FROM auth.users WHERE id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
