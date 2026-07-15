# David Birthday Invitation — Editorial Beige Theme + Supabase

This is a browser-based version that does not require npm on the laptop. The interface uses a editorial beige-brown theme inspired by a luxury creative portfolio: warm cream, espresso brown, olive accents, ochre highlights, magazine-style composition, and refined typography.

## Application flow

Login → 3-slide birthday message → Open Invitation → YES saved → Choose Date Style → Confirm → Shared Dashboard

## Files

- `index.html` — complete application
- `config.js` — Supabase settings and editable slide content
- `setup.sql` — database table and security policies
- `assets/` — all slideshow photos

Keep `index.html`, `config.js`, and the `assets` folder together.

## 1. Set up Supabase

Create a Supabase project, open **SQL Editor**, paste the contents of `setup.sql`, and run it once.

## 2. Create login accounts

Open **Authentication → Users → Add user**, then create:

- David's email/password account
- Zahra's email/password account

Both users receive the same dashboard access.

## 3. Fill in config.js

Open **Project Settings → API** or **Connect** in Supabase and copy:

- Project URL
- Publishable key, or the legacy anon key

Paste them into `config.js`:

```js
window.APP_CONFIG = {
  supabaseUrl: "https://YOUR-PROJECT.supabase.co",
  supabaseAnonKey: "sb_publishable_YOUR_KEY",
  planId: "david-28",
  // personalized invitation content continues below...
};
```

Never use a `service_role`, `sb_secret`, or other server-only key in this project.

## 4. Open or publish the app

For a quick preview, open `index.html` in a browser. For reliable login and sharing between devices, upload the whole folder to a static host such as GitHub Pages, Netlify, Cloudflare Pages, or Vercel.

## Editing the slideshow

All slide text and photo paths are inside `config.js`. Replace a photo in `assets/` or update the corresponding path without changing the application code.

## Database behavior

- Clicking **YES** stores `accepted = true`.
- Confirming a date style stores `selected_style`, `confirmed_at`, and `updated_at`.
- The dashboard fetches the latest shared row from Supabase.
- Row Level Security limits access to authenticated accounts.


## Editorial beige theme

The visual theme is already built into `index.html`. The main palette is also documented in `config.js` under `theme`. You do not need to install any fonts, libraries, or packages.

The Supabase configuration and database flow are unchanged from the previous version.


## Update slideshow

This version includes 6 slideshow pages and 7 photos total, including the additional outdoor solo shot, playful close-up, and the extra couple photo.
