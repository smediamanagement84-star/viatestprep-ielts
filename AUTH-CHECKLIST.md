# Login & auth: settings that live OUTSIDE the code

If login ever breaks and the tests are green, it is almost always one of these.

## Supabase dashboard (project hcmhtxfmvutxtnwdbuur)
- **Project must not be paused.** Free projects pause after ~1 week without activity and then
  EVERY login fails (the project's web address stops existing). `/api/keepalive` pings it daily
  (see `vercel.json` > crons, runs on the production deployment). Pro plan removes the risk entirely.
  Quick check: open `https://hcmhtxfmvutxtnwdbuur.supabase.co/auth/v1/settings` - if it does not load, the project is paused.
- **Authentication > Providers > Google**: must be ENABLED with a Client ID + Secret from Google Cloud
  (Credentials > OAuth client ID > Web application). Authorized redirect URI in Google Cloud:
  `https://hcmhtxfmvutxtnwdbuur.supabase.co/auth/v1/callback`.
  If Google is off, the app hides the Google button automatically (no error page).
- **Authentication > URL Configuration > Site URL**: your live site address.
- **Redirect URLs** must include the live site and any preview you test on
  (wildcards work, e.g. `https://resourcesvia-*-jarus-projects-079a93e4.vercel.app/**`).
  Missing = login-link, Google and password-reset emails send people to the wrong place.
- **Email sending is REQUIRED for password resets, login links and confirmations.** Supabase's built-in sender is
  for testing only: it sends just a couple of emails per hour and may refuse to email anyone who is not a member
  of your Supabase team ("Email address not authorized" / "email rate limit exceeded"). Fix: set up your own
  SMTP under Authentication > Emails > SMTP Settings. Quickest option is a Gmail address:
  host `smtp.gmail.com`, port `465`, username = the Gmail address, password = a Gmail **App password**
  (Google Account > Security > 2-Step Verification > App passwords), sender email = the same address,
  sender name `ViaTestPrep`. (Brevo or Resend also work; Resend needs a verified domain.) After saving, raise
  Authentication > Rate Limits > "emails per hour" if needed.
- **Confirm email** (Authentication > Sign In / Providers > Email): currently OFF (signups log in instantly).
  Turn ON to make people verify their address: the app then shows a "Check your inbox" screen with Resend,
  and the link brings them back signed in. Turn it on together with your own SMTP (above) or emails will be rate-limited.

## Vercel
- `OWNER_BYPASS_KEY` (Production AND Preview): unset = owner/admin endpoints refuse everyone.
  Rotate it if it is ever shared or committed.
- `SUPABASE_SERVICE_ROLE_KEY`: required. It is also what signs login session tokens unless you set
  `SESSION_TOKEN_SECRET` (optional, any long random string; changing it logs everyone out once).
- `CRON_SECRET` (optional): if set, only Vercel's scheduler can call `/api/keepalive`.
- Hobby plan allows 12 serverless functions in `api/` (files not starting with `_`).
  More than 12 = EVERY deploy fails, including `main`. Currently 11. A test fails if you go over.

## How private data is protected
- At login the server hands out a signed session token; the app sends it as `X-Session-Token`.
  Student results, mock-test saving, error reports and developer notifications all check it.
  Knowing someone's ID is not enough. Tokens last 30 days; after that people simply log in again.
- A student's private link (`?student=...`) only works with the secret random code in it. A student's
  plain ID or display ID (e.g. `VTP-0007`) can never be used to log in.

## Before every release
1. `cd tests && npm install && npm test` (256 checks: login flows, API limits, access rules, the real API code against a pretend database, and the real Supabase login library against a pretend Supabase server).
   To run it automatically on every GitHub push: on github.com open the repo > Add file > Create new file,
   name it `.github/workflows/auth-tests.yml` and paste in the contents of `tests/auth-tests.workflow.yml`.
2. Open the preview and test: log in, sign up, forgot password, login link, Google, log out.

## Someone is locked out (forgot password and email is not working yet)
Supabase dashboard > SQL Editor > New query, paste this (change the email and the new password), click Run:

```sql
update auth.users
set encrypted_password = crypt('CHOOSE-A-NEW-PASSWORD', gen_salt('bf')),
    email_confirmed_at = coalesce(email_confirmed_at, now())
where email = 'their-email@gmail.com';
```
They can now log in with that password (and change it later). If it says `function crypt does not exist`,
use `extensions.crypt(...)` and `extensions.gen_salt(...)` instead.
Once Google sign-in is on, anyone using the same Gmail address can also just press "Continue with Google".
