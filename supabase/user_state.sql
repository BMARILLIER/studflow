-- Table user_state : synchronisation des donnees utilisateur entre appareils
CREATE TABLE IF NOT EXISTS user_state (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Mise a jour automatique du timestamp
CREATE OR REPLACE FUNCTION update_user_state_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_user_state_updated
    BEFORE UPDATE ON user_state
    FOR EACH ROW
    EXECUTE FUNCTION update_user_state_timestamp();

-- RLS : chaque utilisateur ne voit/modifie que ses propres donnees
ALTER TABLE user_state ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own state"
    ON user_state FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can insert own state"
    ON user_state FOR INSERT
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own state"
    ON user_state FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);
