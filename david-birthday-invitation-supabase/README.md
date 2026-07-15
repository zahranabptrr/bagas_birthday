# David Birthday Invitation — Supabase Login + Shared Database

This is the no-install browser version. It includes this flow:

David Login → Open Invitation → YES saved → Choose Date Style → Confirm → Shared Dashboard

## 1. Create a Supabase project

Create a project in Supabase.

## 2. Create the database table and security policies

Open **SQL Editor**, paste the full contents of `setup.sql`, and run it once.

## 3. Create the two login accounts

Open **Authentication → Users → Add user** and create:

- David's email/password account
- Your email/password account

Both accounts receive the same access to the shared `david-28` row.

## 4. Add the browser-safe keys

Open **Project Settings → API** and copy:

- Project URL
- Publishable key (or legacy anon key)

Paste those values into `config.js`.

Never use the `service_role` key in this browser project.

## 5. Open the app

Double-click `index.html`. For sharing with David, upload all four files to a static host such as GitHub Pages, Netlify, or Vercel.

Files that must stay together:

- `index.html`
- `config.js`
- `setup.sql` (setup only; it does not need to be publicly hosted)
- `README.md`

## Notes

- Authentication sessions are handled by Supabase Auth.
- The dashboard reads the latest shared record from Supabase.
- The Refresh Dashboard button retrieves the newest database value.
- Row Level Security allows only authenticated users to read or update the invitation row.
