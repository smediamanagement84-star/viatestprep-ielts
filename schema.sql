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
  student_id TEXT UNIQUE,           -- display ID shown in the CRM, e.g. 'VTP-0001'
  target_band NUMERIC(2,1) DEFAULT 7.0,
  status TEXT DEFAULT 'Active',     -- 'Active', 'Completed', 'Paused'
  access_expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  -- The secret half of a student's personal "?student=<token>" login link.
  -- Generated client-side (crypto.randomUUID()) when a consultancy adds the
  -- student in the CRM. Anyone holding this token can log in as this student
  -- (same trust model as the site's owner-bypass key) - it is only ever
  -- shown to CRM staff via "Copy Access Link", never listed anywhere public.
  access_token TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Run these in your Supabase SQL Editor if `students` already exists without them:
-- ALTER TABLE students ADD COLUMN IF NOT EXISTS access_token TEXT UNIQUE;
-- ALTER TABLE students ADD COLUMN IF NOT EXISTS student_id TEXT UNIQUE;

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

-- 5. Payment Orders Table (real eSewa/Khalti transactions - audit trail +
-- source of truth for what a consultancy actually paid for. Never trust a
-- client-reported amount or "success" flag - the /api/payment/* serverless
-- functions write and update these rows only after independently verifying
-- the transaction with eSewa/Khalti's own server-side status/lookup APIs.)
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_uuid TEXT UNIQUE NOT NULL,   -- our own idempotency key (esewa transaction_uuid / khalti purchase_order_id)
  gateway TEXT NOT NULL,                   -- 'esewa' | 'khalti'
  gateway_ref TEXT,                        -- esewa ref_id / khalti pidx+transaction_id, filled in on verify
  plan_name TEXT NOT NULL,                 -- 'Starter', 'Growth', 'Enterprise'
  duration_days INT NOT NULL,              -- 30, 90, 365
  amount NUMERIC(10,2) NOT NULL,           -- computed server-side from PLAN_PRICES, never from client input
  consultancy_name TEXT NOT NULL,
  consultancy_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',  -- 'pending' | 'paid' | 'failed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verified_at TIMESTAMP WITH TIME ZONE
);

-- Run this in your Supabase SQL Editor if `orders` already exists without it:
-- ALTER TABLE orders ADD COLUMN IF NOT EXISTS gateway_ref TEXT;
