-- ============================================================
-- StudFlow — Sprint Excellence : Table user_feedback
-- Coller dans Supabase > SQL Editor > Run
-- ============================================================

CREATE TABLE IF NOT EXISTS user_feedback (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id     UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    type        TEXT NOT NULL DEFAULT 'general',
    message     TEXT NOT NULL,
    metadata    JSONB DEFAULT '{}',
    created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_feedback_user
    ON user_feedback(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_user_feedback_type
    ON user_feedback(type, created_at DESC);

-- ==================== RLS ====================

ALTER TABLE user_feedback ENABLE ROW LEVEL SECURITY;

-- Users can insert their own feedback
CREATE POLICY "feedback_insert" ON user_feedback
    FOR INSERT WITH CHECK (
        user_id IS NULL OR auth.uid() = user_id
    );

-- Users can read their own feedback
CREATE POLICY "feedback_select" ON user_feedback
    FOR SELECT USING (auth.uid() = user_id);
