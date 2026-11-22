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
- **Email sending**: the built-in sender allows only a few emails per hour. Use your own SMTP
  (Resend / Brevo) or login links and resets will start failing with "too many emails".
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
1. `cd tests && npm install && npm test` (248 checks: login flows, API limits, access rules, the real API code against a pretend database, and the real Supabase login library against a pretend Supabase server).
   To run it automatically on every GitHub push: on github.com open the repo > Add file > Create new file,
   name it `.github/workflows/auth-tests.yml` and paste in the contents of `tests/auth-tests.workflow.yml`.
2. Open the preview and test: log in, sign up, forgot password, login link, Google, log out.
