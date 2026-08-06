-- ============================================================
-- ViATestPrep MASTER SUPABASE DATABASE SCHEMA & MIGRATION SCRIPT
-- Copy & paste this entire SQL script into your Supabase SQL Editor and click RUN.
-- 100% Safe to execute multiple times (idempotent IF NOT EXISTS commands).
-- ============================================================

-- 1. CONSULTANCIES TABLE
CREATE TABLE IF NOT EXISTS consultancies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  plan_name TEXT NOT NULL,          -- 'Starter', 'Growth', 'Enterprise', 'Developer Bypass'
  duration_days INT NOT NULL,       -- 30, 90, 365
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  owner_user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE consultancies ADD COLUMN IF NOT EXISTS owner_user_id UUID REFERENCES auth.users(id);

-- 2. STUDENTS TABLE
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultancy_id UUID REFERENCES consultancies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  student_id TEXT UNIQUE,
  target_band NUMERIC(2,1) DEFAULT 7.0,
  status TEXT DEFAULT 'Active',
  access_expires_at TIMESTAMP WITH TIME ZONE,
  access_level TEXT DEFAULT 'full',
  access_token TEXT UNIQUE,
  auth_user_id UUID REFERENCES auth.users(id),
  stage TEXT DEFAULT 'Enrolled',
  next_follow_up DATE,
  activity_log JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  tuition_fee INT,
  tuition_status TEXT DEFAULT 'Pending',
  tuition_method TEXT,
  tuition_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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

-- 3. MOCK TEST HISTORY TABLE
CREATE TABLE IF NOT EXISTS mock_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  test_name TEXT NOT NULL,
  module_type TEXT NOT NULL,
  listening_band NUMERIC(2,1),
  reading_band NUMERIC(2,1),
  writing_task1 TEXT,
  writing_task2 TEXT,
  writing_band NUMERIC(2,1),
  writing_task1_band NUMERIC(2,1),
  writing_task2_band NUMERIC(2,1),
  writing_feedback TEXT,
  writing_auto_graded BOOLEAN DEFAULT true,
  correct_count INT,
  total_questions INT,
  answer_review JSONB,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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

-- 4. SPEAKING GRADES TABLE
CREATE TABLE IF NOT EXISTS speaking_grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  cue_card_title TEXT NOT NULL,
  fluency_score NUMERIC(2,1) NOT NULL,
  vocab_score NUMERIC(2,1) NOT NULL,
  grammar_score NUMERIC(2,1) NOT NULL,
  pronunciation_score NUMERIC(2,1) NOT NULL,
  overall_band NUMERIC(2,1) NOT NULL,
  feedback TEXT,
  audio_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS fluency_band NUMERIC(2,1);
ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS lexical_band NUMERIC(2,1);
ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS grammar_band NUMERIC(2,1);
ALTER TABLE speaking_grades ADD COLUMN IF NOT EXISTS pron_band NUMERIC(2,1);

-- 5. PAYMENT ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_uuid TEXT UNIQUE NOT NULL,
  gateway TEXT NOT NULL,
  gateway_ref TEXT,
  plan_name TEXT NOT NULL,
  duration_days INT NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  consultancy_name TEXT NOT NULL,
  consultancy_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  reference_id TEXT,
  payer_phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verified_at TIMESTAMP WITH TIME ZONE
);

ALTER TABLE orders ADD COLUMN IF NOT EXISTS gateway_ref TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS reference_id TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS payer_phone TEXT;

-- 6. STUDENT ERROR REPORTS TABLE (COMMERCIAL GRADE)
CREATE TABLE IF NOT EXISTS error_reports (
  id TEXT PRIMARY KEY,
  student_id TEXT,
  student_name TEXT,
  consultancy_id TEXT,
  section TEXT,
  label TEXT,
  error_type TEXT,
  description TEXT,
  question_ref TEXT,
  status TEXT DEFAULT 'open',
  resolution_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

-- 7. SYSTEM NOTIFICATIONS TABLE (BACKEND DEV ALERTS)
CREATE TABLE IF NOT EXISTS system_notifications (
  id TEXT PRIMARY KEY,
  type TEXT DEFAULT 'error_report',
  title TEXT,
  message TEXT,
  meta JSONB,
  dev_status TEXT DEFAULT 'UNREAD',
  priority TEXT DEFAULT 'HIGH',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read_at TIMESTAMPTZ
);

-- 8. PERFORMANCE INDEXES FOR PRODUCTION QUERY SPEED
CREATE INDEX IF NOT EXISTS idx_students_consultancy ON students(consultancy_id);
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_mock_history_student ON mock_history(student_id);
CREATE INDEX IF NOT EXISTS idx_error_reports_consultancy ON error_reports(consultancy_id);
CREATE INDEX IF NOT EXISTS idx_dev_notifications_status ON system_notifications(dev_status);

-- 9. DATA MIGRATION CLEANUP
UPDATE students SET stage = 'Completed' WHERE status = 'Completed' AND stage = 'Enrolled';
