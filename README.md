# SmartInovate

Next.js website for SmartInovate, focused on digital engineering, smart-business and technology solutions.

## Technology

- Next.js 15 App Router, React 19
- Tailwind CSS, Framer Motion
- Three.js / React Three Fiber, React Icons
- `next-seo` configuration

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Available scripts

- `npm run dev` — local Next.js development
- `npm run build` — build
- `npm run start` — serve built app

> The current `lint` script uses `next lint`. Verify its compatibility with the installed Next.js version before depending on it in CI.

## Source

- `app/` — App Router pages and components
- `public/` — static media
- `next-seo.config.js` — SEO settings

## Deployment notes

Keep any environment-specific values out of tracked files. Check responsive layouts, SEO metadata, accessibility and performance before production deployment.

Website: [smartinovate.com](https://smartinovate.com).

This README describes the repository, not its verified live deployment status.
