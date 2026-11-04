# Login & auth: settings that live OUTSIDE the code

If login ever breaks and the tests are green, it is almost always one of these.

## Supabase dashboard
- **Authentication > URL Configuration > Site URL**: your live site address.
- **Redirect URLs** must include the live site and any preview you test on
  (wildcards work, e.g. `https://resourcesvia-*-jarus-projects-079a93e4.vercel.app/**`).
  Missing = confirmation, login-link and password-reset emails send people to the wrong place.
- **Authentication > Providers > Google** enabled, with the Google Cloud redirect URI set.
- **Email sending**: the built-in sender allows only a few emails per hour. Use your own SMTP
  (Resend / Brevo) or signups, login links and resets will start failing with "too many emails".
- **Confirm email** on = students must click an email link after signup. Off = instant access.

## Vercel
- Environment variable `OWNER_BYPASS_KEY` (Production AND Preview). Unset = owner/admin
  endpoints refuse everyone. Rotate it if it is ever shared or committed.
- Hobby plan allows 12 serverless functions in `api/` (files not starting with `_`).
  More than 12 = EVERY deploy fails, including `main`.

## Before every release
1. `cd tests && npm install && npm test`.
   To run it automatically on every GitHub push: on github.com open the repo > Add file > Create new file,
   name it `.github/workflows/auth-tests.yml` and paste in the contents of `tests/auth-tests.workflow.yml`.
2. Open the preview and test: log in, sign up, forgot password, login link, log out.
