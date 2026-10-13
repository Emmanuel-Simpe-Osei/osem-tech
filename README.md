# OSEM Technologies Website

Next.js 14 · TypeScript · Tailwind CSS

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Add domain `osemtech.com` under Project Settings → Domains

## Contact Form

The form in `src/components/Contact.tsx` uses a mock submit. To wire it up:
- Replace the `setTimeout` in `handleSubmit` with a `fetch()` call to
  a Resend / EmailJS / your own API route.

## Favicon

Replace `public/favicon.ico` with your own branded icon.
