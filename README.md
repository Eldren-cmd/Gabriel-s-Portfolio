# Gabriel Adegboyega Portfolio

Personal single-page portfolio built with:

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- EmailJS

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## EmailJS Setup

1. Copy `.env.example` to `.env.local`.
2. Fill in your EmailJS values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
SCREENSHOTONE_ACCESS_KEY=your_screenshotone_access_key
```

3. Restart the dev server.

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

Deploy to Vercel and add the same EmailJS + ScreenshotOne environment variables in project settings.
