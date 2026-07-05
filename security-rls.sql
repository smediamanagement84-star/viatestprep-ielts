-- Row Level Security policies for the viatestprep-ielts Supabase project.
--
-- WHY THIS FILE EXISTS: index.html embeds the Supabase "anon" key directly in
-- client-side JavaScript (necessary - there is no login wall in front of the
-- static site). That key is public: anyone who opens dev tools can copy it
-- and call this project's REST API (https://<project>.supabase.co/rest/v1/...)
-- directly, completely bypassing the app's own JS logic (tenant filters,
-- capacity checks, "only service_role writes this table" conventions, etc).
--
-- By default, a Postgres table with NO Row Level Security enabled lets the
-- anon key do whatever the anon role's grants allow - which in a fresh
-- Supabase project is typically full SELECT/INSERT/UPDATE/DELETE. If RLS has
-- never been explicitly turned on for these tables, that is almost certainly
-- the current state: anyone with the anon key could, right now, read every
-- consultancy's billing info, or POST a row straight into `orders` claiming
-- status='paid' and grant themselves a free subscription without ever
-- touching eSewa/Khalti.
--
-- Run this whole file in the Supabase SQL Editor. It is safe to re-run.

-- ===========================================================================
-- PART 1 - safe to apply right now, no further app changes needed.
-- Nothing in index.html or the standalone test pages touches `orders` or
-- `consultancies` via the anon key anymore (see /api/consultancy/lookup.js
-- and the payment endpoints, which all use the service_role key server-side).
-- ===========================================================================

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
-- No policies at all = default deny for every role except service_role
-- (service_role bypasses RLS entirely, which is what the payment endpoints
-- rely on). The anon key gets zero access to this table, in either direction.

ALTER TABLE consultancies ENABLE ROW LEVEL SECURITY;
-- Same story: only /api/consultancy/lookup.js and /api/payment/*-verify.js
-- (service_role) ever need to touch this table.

-- ===========================================================================
-- PART 2 - students / mock_history / speaking_grades.
--
-- OPTION A (real isolation) is now enabled: a consultancy's own login session
-- (real Supabase Auth, since consultancies.owner_user_id exists and consultancy
-- signup/login is real - see api/consultancy/register.js) can only ever read
-- or write its own students, scored via auth.uid(). A self-serve student
-- (their own Supabase Auth account) can read their own row.
--
-- This does NOT cover the CRM's owner-bypass mode (index.html's "?ownerkey="
-- link, consultancyId === '__owner__') - that mode has no real Supabase Auth
-- session at all (auth.uid() is null for it), by design, since it's meant to
-- work from a bare secret-URL with no login step. Under these policies its
-- direct anon-key reads/writes to these three tables would just silently
-- return nothing / be rejected. That mode has been moved to a service-role-
-- backed admin API instead (api/admin/roster.js, student.js, speaking-grade.js,
-- writing-grade.js - all gated by the same OWNER_BYPASS_KEY, which bypasses
-- RLS the same way every other /api/admin/* and /api/consultancy/* endpoint
-- already does), so it keeps working under RLS rather than depending on these
-- tables staying wide open.

ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "consultancy reads own students" ON students
  FOR SELECT USING (
    consultancy_id IN (SELECT id FROM consultancies WHERE owner_user_id = auth.uid())
  );
CREATE POLICY "consultancy writes own students" ON students
  FOR INSERT WITH CHECK (
    consultancy_id IN (SELECT id FROM consultancies WHERE owner_user_id = auth.uid())
  );
CREATE POLICY "consultancy updates own students" ON students
  FOR UPDATE USING (
    consultancy_id IN (SELECT id FROM consultancies WHERE owner_user_id = auth.uid())
  );
CREATE POLICY "consultancy deletes own students" ON students
  FOR DELETE USING (
    consultancy_id IN (SELECT id FROM consultancies WHERE owner_user_id = auth.uid())
  );
-- A logged-in student (self-serve auth) reading their own row:
CREATE POLICY "student reads own row" ON students
  FOR SELECT USING (auth_user_id = auth.uid());

ALTER TABLE mock_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "scoped to owning student's consultancy" ON mock_history
  FOR ALL USING (
    student_id IN (
      SELECT id FROM students WHERE consultancy_id IN (
        SELECT id FROM consultancies WHERE owner_user_id = auth.uid()
      ) OR auth_user_id = auth.uid()
    )
  );

ALTER TABLE speaking_grades ENABLE ROW LEVEL SECURITY;
CREATE POLICY "scoped to owning student's consultancy" ON speaking_grades
  FOR ALL USING (
    student_id IN (
      SELECT id FROM students WHERE consultancy_id IN (
        SELECT id FROM consultancies WHERE owner_user_id = auth.uid()
      )
    )
  );
