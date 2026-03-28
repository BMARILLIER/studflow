-- ============================================================
-- StudFlow — Sprint Analytics : Table analytics_events
-- Coller dans Supabase > SQL Editor > Run
-- ============================================================

CREATE TABLE IF NOT EXISTS analytics_events (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id     UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    event_name  TEXT NOT NULL,
    metadata    JSONB DEFAULT '{}',
    created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_analytics_events_user
    ON analytics_events(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_analytics_events_name
    ON analytics_events(event_name, created_at DESC);

-- ==================== RLS ====================

ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Users can insert their own events (or anonymous events with null user_id)
CREATE POLICY "analytics_insert" ON analytics_events
    FOR INSERT WITH CHECK (
        user_id IS NULL OR auth.uid() = user_id
    );

-- Users can only read their own events
CREATE POLICY "analytics_select" ON analytics_events
    FOR SELECT USING (auth.uid() = user_id);
