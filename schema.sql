-- 1. Consultancies Table
CREATE TABLE IF NOT EXISTS consultancies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  plan_name TEXT NOT NULL,          -- 'Starter', 'Growth', 'Enterprise'
  duration_days INT NOT NULL,       -- 30, 90, 365
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Students Table
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultancy_id UUID REFERENCES consultancies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  target_band NUMERIC(2,1) DEFAULT 7.0,
  status TEXT DEFAULT 'Active',     -- 'Active', 'Completed', 'Paused'
  access_expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Mock Test History Table (Reading / Listening / Writing scores and essays)
CREATE TABLE IF NOT EXISTS mock_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  test_name TEXT NOT NULL,          -- e.g. 'Cambridge 18 - Test 1'
  module_type TEXT NOT NULL,        -- 'listening', 'reading', 'writing'
  listening_band NUMERIC(2,1),
  reading_band NUMERIC(2,1),
  writing_task1 TEXT,
  writing_task2 TEXT,
  writing_band NUMERIC(2,1),
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Run these commands in your Supabase SQL Editor if the table already exists:
-- ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task1 TEXT;
-- ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task2 TEXT;
-- ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_band NUMERIC(2,1);

-- 4. Speaking Grades Table (Manual recordings and grades from 1-on-1 grader)
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
  audio_url TEXT,                   -- Optional link to file storage
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
