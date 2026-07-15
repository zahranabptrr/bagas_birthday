# David's 28th Birthday Date Invitation

A responsive, interactive birthday date invitation built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- canvas-confetti

## Features

- Animated birthday welcome screen
- Confetti celebration when the invitation is opened
- Playful moving/shrinking “No” button
- Three selectable date styles with dynamic descriptions and outfit suggestions
- Saved choice using `localStorage`
- Shareable dashboard URL, for example: `?plan=creative&view=summary`
- Responsive layout for mobile and desktop

## Project structure

```text
david-birthday-invitation/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── background-decor.tsx
│   ├── birthday-experience.tsx
│   ├── confirmation-step.tsx
│   ├── date-style-step.tsx
│   ├── invitation-step.tsx
│   ├── progress-dots.tsx
│   └── welcome-step.tsx
├── hooks/
│   └── use-date-plan.ts
├── lib/
│   └── date-options.ts
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Run locally

### Requirements

- Node.js 20.9 or newer
- npm

### Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production check

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

### Option 1: Vercel dashboard

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Keep the detected framework as **Next.js**.
5. Click **Deploy**.

No environment variables are required for the local-storage version.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. To create a production deployment later, run:

```bash
vercel --prod
```

## Sharing the plan

After confirming a date style, select **Copy shared dashboard link**. The selected style is included in the URL, allowing another person to open the same summary on a different device.

`localStorage` is device-specific. The shareable URL is what makes this version usable across two devices without a database or login system.

## Customization

- Change the birthday copy and date in the files inside `components/`.
- Edit the three choices in `lib/date-options.ts`.
- Change colors and global visual styling in `app/globals.css`.
