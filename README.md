# Trendy Folds

An ecommerce storefront for a fashion label: catalogue, categories, search,
cart, and a WhatsApp/email order flow.

Next.js 15, React 19, TypeScript, Tailwind, Cloudinary for images.

![The storefront](docs/screenshots/storefront.png)

---

## Run it

```bash
docker compose up -d --build
```

Open **http://localhost:3800**. No credentials are needed to browse; see
`.env.example` for the ones that enable order notifications.

---

## Credentials were being published to the browser

The most serious finding. Both integrations read their secrets like this:

```ts
this.accessToken = process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN || ''
this.emailApiKey  = process.env.NEXT_PUBLIC_EMAIL_API_KEY || ''
```

and then sent them from the browser:

```ts
headers: { 'Authorization': `Bearer ${this.accessToken}` }
```

**`NEXT_PUBLIC_` is not a namespace — it is an instruction to Next.js to inline
the value into the client bundle.** A WhatsApp Business API token and an email
provider key would both have been readable by anyone who opened devtools, and
usable by anyone who took them.

Nothing leaked in practice: no `.env` was ever committed, `.env*` is gitignored,
and the variables were never set. But the code *required* them to be set in
order to work, so the first successful deployment would have published them.

Both now live server-side behind `POST /api/notify`, with no `NEXT_PUBLIC_`
prefix, so Next.js cannot bundle them. Verified against the built image:

```
$ for each chunk in /_next/static/chunks: grep WHATSAPP_ACCESS_TOKEN|EMAIL_API_KEY
  no credential names appear in the client bundle
```

`src/app/test-whatsapp/page.tsx` — a debug page shipped as a public route, and
the last place reading the token client-side — was removed.

---

## Simulated customer activity

Two features invent customers.

`PurchaseNotifications` picks a name from a hardcoded list of fifteen every
6–12 seconds:

```ts
const sampleCustomers = [
  { name: 'Sarah A.', product: 'Pret Dress', avatar: '👩‍🦰' },
  { name: 'Hiba M.',  product: 'Men Pocket Square', avatar: '👩‍🦳' },
  ...
]
const timeOptions = ['1 min ago', '45 secs ago', '30 secs ago', ...]
```

and the header rating ticker cycles invented reviewers with
`const randomRating = 4 + Math.random()`.

No real customer is behind either. Presenting invented activity as real is a
dark pattern, and in several jurisdictions it is unlawful — the UK's Digital
Markets, Competition and Consumers Act 2024 prohibits fake consumer reviews and
misleading urgency claims, and the EU's Unfair Commercial Practices Directive
covers the same ground.

**Neither has been deleted** — that is the owner's decision, not mine. Both are
now behind `NEXT_PUBLIC_SHOW_SIMULATED_ACTIVITY`, which defaults to `false`, so
the default build does not ship fabricated social proof. See
`src/lib/socialProof.ts`.

---

## What the README claimed and what exists

| Claim | Reality |
|---|---|
| Product catalogue, search, cart | ✅ real — 22 files touch the cart |
| Checkout flow | ✅ real |
| SEO: meta tags, sitemap, robots.txt | ✅ `public/sitemap.xml`, `public/robots.txt` |
| **PWA Ready: manifest and service worker** | ❌ neither `manifest.json` nor `sw.js` exists |
| **User accounts and orders** | ❌ no authentication anywhere — zero files reference sign-in or sessions |

The claims that were true are still claimed. The two that were not have been
removed rather than implemented, because implementing accounts to make a README
sentence true is the wrong way round.

Orders are placed without an account: the basket is sent to the shop by
WhatsApp and email. That is a legitimate model for a small retailer, and it is
now what the README says.

---

## The build could not run in a container

`npm ci` failed compiling `mozjpeg` from source. It arrives via
`imagemin-mozjpeg`, a **devDependency** used by the local asset-preparation
scripts in `scripts/` — nothing in the application imports it, and `next build`
does not need it. The install runs with `--ignore-scripts`, which also removes a
supply-chain foothold.

---

## Layout

```
src/
├── app/
│   ├── page.tsx              storefront
│   ├── product/[id]/         product detail
│   ├── cart/  checkout/      basket and order flow
│   └── api/notify/route.ts   server-side order notification   ← added
├── components/
│   ├── Navigation.tsx        header, search, cart count
│   └── PurchaseNotifications.tsx   simulated activity (off by default)
└── lib/
    ├── notifications.ts      posts to /api/notify
    ├── whatsapp.ts           message formatting
    └── socialProof.ts        the simulated-activity switch   ← added
scripts/                      local image compression and Cloudinary upload
```

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `EMAIL_API_KEY` / `EMAIL_SERVICE_URL` | empty | Server-only. Order confirmation email |
| `WHATSAPP_ACCESS_TOKEN` / `WHATSAPP_PHONE_NUMBER_ID` | empty | Server-only. Order notification |
| `NEXT_PUBLIC_SHOW_SIMULATED_ACTIVITY` | `false` | Invented purchase popups and ratings |

Note which of these carry `NEXT_PUBLIC_` and which do not. That prefix is the
difference between a secret and a published string.

## Known limitations

- **No tests.** This is the largest gap. The bugs found here — a credential in
  the client bundle, a README claiming features that do not exist — are not the
  kind unit tests catch, but a build-time check that greps the bundle for
  credential names would have caught the first one, and is worth adding.
- **No backend or database.** The catalogue is static data in the repository;
  there are no API routes besides `/api/notify`, no persistence, and no stock
  levels. Nothing prevents ordering an item that is gone.
- **A personal phone number is displayed** in the header and footer
  (`+92 328-3250250`). Fine for a real shop that owns it, worth checking before
  this repository is public.
- **No payment integration.** Checkout collects details and notifies the shop;
  money is handled out of band.
- **Product data is not validated.** `cloudinary-images.json` maps products to
  image URLs by hand, and a mismatch shows a broken image rather than failing
  the build.
