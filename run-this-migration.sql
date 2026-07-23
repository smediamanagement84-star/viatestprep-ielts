-- Consolidated migration - every schema change introduced this session in
-- one place. Safe to run multiple times (all IF NOT EXISTS / idempotent).
-- Paste this whole file into Supabase Dashboard -> SQL Editor -> New Query
-- -> Run, once, and everything built so far will actually work.
--
-- If consultancy signup/login is failing, this is almost certainly why:
-- the `consultancies.owner_user_id` column this session's auth code depends
-- on was never added to your live database. Every request to
-- /api/consultancy/register or /api/consultancy/lookup would fail with a
-- Postgres "column ... does not exist" error until this runs - check your
-- Vercel project's Function Logs for /api/consultancy/register to see that
-- exact error if you want to confirm before/after.

-- consultancies: real login support
ALTER TABLE consultancies ADD COLUMN IF NOT EXISTS owner_user_id UUID REFERENCES auth.users(id);

-- students: real login support (self-serve), access-token links, access levels
ALTER TABLE students ADD COLUMN IF NOT EXISTS access_token TEXT UNIQUE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS student_id TEXT UNIQUE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS access_level TEXT DEFAULT 'full';
ALTER TABLE students ADD COLUMN IF NOT EXISTS auth_user_id UUID REFERENCES auth.users(id);
ALTER TABLE students ALTER COLUMN access_expires_at DROP NOT NULL;

-- mock_history: writing task1/task2 essays + automated grading
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task1 TEXT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task2 TEXT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_band NUMERIC(2,1);
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task1_band NUMERIC(2,1);
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_task2_band NUMERIC(2,1);
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_feedback TEXT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS writing_auto_graded BOOLEAN DEFAULT true;

-- orders: eSewa/Khalti gateway ref + manual QR payment fields
ALTER TABLE orders ADD COLUMN IF NOT EXISTS gateway_ref TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS reference_id TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS payer_phone TEXT;

-- Lock down orders/consultancies to service_role only - nothing in the app
-- reads/writes either directly via the anon key anymore (see
-- security-rls.sql for the full explanation).
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultancies ENABLE ROW LEVEL SECURITY;

-- mock_history: per-question answer review, so students can see exactly what
-- they answered on a past Reading/Listening attempt, not just the band -
-- required by /api/mock/submit.js and /api/student/index.js (?action=reports).
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS correct_count INT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS total_questions INT;
ALTER TABLE mock_history ADD COLUMN IF NOT EXISTS answer_review JSONB;

-- students: CRM pipeline + follow-up work-queue fields.
-- `stage` is the enrollment pipeline (Inquiry / Enrolled / Mock Testing /
-- Exam Ready / Completed); `status` shrinks to just Active/Paused.
-- `notes` finally gets a real column - the CRM has always had a notes box,
-- but the value only ever lived in each browser's localStorage and was
-- silently wiped on every cloud sync.
ALTER TABLE students ADD COLUMN IF NOT EXISTS stage TEXT DEFAULT 'Enrolled';
ALTER TABLE students ADD COLUMN IF NOT EXISTS next_follow_up DATE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS activity_log JSONB DEFAULT '[]'::jsonb;
ALTER TABLE students ADD COLUMN IF NOT EXISTS notes TEXT;
-- Legacy rows that used status='Completed' move into the pipeline properly.
UPDATE students SET stage = 'Completed' WHERE status = 'Completed' AND stage = 'Enrolled';
