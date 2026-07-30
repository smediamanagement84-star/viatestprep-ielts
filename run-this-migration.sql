-- ============================================================
-- CONSOLIDATED SUPABASE SCHEMA MIGRATION SCRIPT
-- Copy & Paste this entire file into your Supabase SQL Editor and click RUN.
-- Safe to execute multiple times (idempotent IF NOT EXISTS commands).
-- ============================================================

-- 1. STUDENTS TABLE ENHANCEMENTS
ALTER TABLE students ADD COLUMN IF NOT EXISTS access_token TEXT UNIQUE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS student_id TEXT UNIQUE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS access_level TEXT DEFAULT 'full';
ALTER TABLE students ADD COLUMN IF NOT EXISTS auth_user_id UUID REFERENCES auth.users(id);
ALTER TABLE students ALTER COLUMN access_expires_at DROP NOT NULL;
ALTER TABLE students ADD COLUMN IF NOT EXISTS stage TEXT DEFAULT 'Enrolled';
ALTER TABLE students ADD COLUMN IF NOT EXISTS next_follow_up DATE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS activity_log JSONB DEFAULT '[]'::jsonb;
ALTER TABLE students ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE students ADD COLUMN IF NOT EXISTS tuition_fee INT;
ALTER TABLE students ADD COLUMN IF NOT EXISTS tuition_status TEXT DEFAULT 'Pending';
ALTER TABLE students ADD COLUMN IF NOT EXISTS tuition_method TEXT;
ALTER TABLE students ADD COLUMN IF NOT EXISTS tuition_date DATE;

-- 2. MOCK HISTORY TABLE ENHANCEMENTS
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task1 TEXT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task2 TEXT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_band NUMERIC(2,1);
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task1_band NUMERIC(2,1);
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task2_band NUMERIC(2,1);
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_feedback TEXT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_auto_graded BOOLEAN DEFAULT true;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS correct_count INT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS total_questions INT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS answer_review JSONB;

-- 3. SPEAKING GRADES TABLE ENHANCEMENTS
ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS fluency_band NUMERIC(2,1);
ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS lexical_band NUMERIC(2,1);
ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS grammar_band NUMERIC(2,1);
ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS pron_band NUMERIC(2,1);

-- 4. CONSULTANCIES & ORDERS TABLE ENHANCEMENTS
ALTER TABLE consultancies ADD COLUMN IF NOT EXISTS owner_user_id UUID REFERENCES auth.users(id);
ALTER TABLE orders ADD COLUMN IF NOT EXISTS gateway_ref TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS reference_id TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS payer_phone TEXT;

-- 5. ROW LEVEL SECURITY POLICIES
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultancies ENABLE ROW LEVEL SECURITY;

-- 6. DATA MIGRATION CLEANUP
UPDATE students SET stage = 'Completed' WHERE status = 'Completed' AND stage = 'Enrolled';
