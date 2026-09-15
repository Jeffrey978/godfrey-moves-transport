# Godfrey Moves Transport

Marketing site for Godfrey Moves Transport Ltd (GMT), a premium commuter bus
company operating in Port Harcourt, Rivers State.

The site presents the pilot corridor (Igrita to RSU Gate), the fixed fare table,
the operating model, and the growth roadmap, and routes enquiries to WhatsApp.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- Tailwind CSS v4 alongside hand-written CSS in `app/globals.css`
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Layout

| Path                  | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `app/page.tsx`        | The entire landing page; content lives in consts at top |
| `app/layout.tsx`      | Metadata, OG tags, and the no-flash theme script        |
| `app/globals.css`     | All styling, including the light and dark themes        |
| `app/ThemeToggle.tsx` | Client-side light/dark switch, persisted to localStorage |
| `public/og.webp`      | Hero background image                                   |
| `public/og.png`       | Social card image, for crawlers without WebP support    |

## Editing content

Route stops, fares, operating figures, and the roadmap are plain arrays at the
top of `app/page.tsx` — edit those rather than the JSX below them.

The contact number appears in two places in `app/page.tsx`: `whatsappNumber`
(international format, digits only) and the `tel:` link in the partner section.
Update both together.

## Environment variables

| Variable               | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Production origin, e.g. `https://godfreymoves.com`. Used to build absolute OG and Twitter card URLs. Set it in the Vercel project settings once the domain is live; without it, share previews fall back to `http://localhost:3000`. |

## Deployment

Pushes to `main` deploy to production via Vercel. Pull requests get preview
deployments automatically.
