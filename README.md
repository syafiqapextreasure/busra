# BUSRA Solution & Services

A Malay and English website for BUSRA’s aluminium, glass and construction services in Seri Kembangan. The build writes searchable HTML and compressed assets to `public/`. Cloudflare Workers serves clean URLs, accepts project quotations and provides a private staff area.

## Run locally

Use Node.js 24 and npm. From the repository root:

```sh
npm ci
npm run build
npx wrangler d1 migrations apply DB --local
npm run dev
```

Open the local URL printed by Wrangler. Local D1 data and KV photos remain under `.wrangler/`. For staff testing, create an untracked `.dev.vars` containing `ADMIN_PASSWORD` with a unique random ASCII password of at least 20 characters. Use username `busra` at `/admin`. Supply a local test recipient endpoint only if you want to exercise outgoing notifications.

## Install on Cloudflare Workers

Use an account with Workers, D1 and Workers KV available. From a local checkout:

```sh
npm ci
npx wrangler login
npm run deploy
npx wrangler d1 migrations apply DB --remote
npx wrangler secret put ADMIN_PASSWORD
npx wrangler secret put STAFF_NOTIFICATION_URL
```

The checked-in bindings point to the BUSRA account's existing `busra-db` D1 database and its dedicated private `busra-quote-photos` Workers KV namespace. The deployment needs Worker deployment access and permission to use these bindings. Run both migrations before accepting enquiries. For a different account, create a D1 database and a KV namespace, then replace their identifiers in `wrangler.jsonc`. The staff download route checks authentication before reading KV. After a new upload, readers at another edge location may need to retry briefly while the photo propagates.

`STAFF_NOTIFICATION_URL` is the HTTPS URL of a receiver configured by BUSRA to alert staff, such as a team-owned automation that emails its enquiry owner. It must accept JSON POST requests with `event` set to `quote.received` and a `reference` string, and return HTTP 2xx on acceptance. The URL is a secret. The receiver can deduplicate deliveries using the `Idempotency-Key` header. Sending the customer's personal details to the receiver is unnecessary. Failed alerts remain queued in D1 and retry every 15 minutes. Without a receiver, staff can still see enquiries in the inbox and alerts remain pending. Test an actual alert with the intended recipient before launch.

Add the company domain in **Workers & Pages → busra → Settings → Domains & Routes**. Canonical URLs, alternate-language links, social previews and the sitemap use `https://www.aluminiumglassbudget.com` on both public hostnames. The public origin is defined in `src/public-origin.mjs`. If deploying under another permanent domain, set `SITE_URL` consistently in build and Worker settings. Confirm the live hostname, address, contact channel, actual service options and privacy/retention policy before launch.

To activate GA4 for the production site, create a Web data stream with Enhanced measurement off and set the Worker runtime text variable `GA4_MEASUREMENT_ID` to its public `G-…` ID. Check Reports → Realtime after opening a public page. Staff, photo links, confirmation pages and Worker previews are excluded.

For subsequent Git-connected builds, use `npm run build` for the build and `npx wrangler deploy` for deployment. Apply any new D1 migration to the production binding during the corresponding release. Keep credentials in Cloudflare secrets or your private local environment.

## Staff workflow

Open `/admin` in the deployed site and sign in with username `busra` and the configured `ADMIN_PASSWORD`. Use HTTPS. Each enquiry has a reference, submitted contact details, private photo downloads and a status of New, Contacted, Quoted, Won or Closed. Use the pagination links for older entries. Rotate the secret when staff access changes. For named staff accounts or MFA, place the staff routes behind the team’s Cloudflare Access application as an additional access layer.

At `/admin/content`, enter the exact language-specific page path and choose a supported text field. Save a draft, open **Preview drafts**, then publish when ready. The page title, description and main heading are editable. Text elements that the templates mark with `data-edit` are also available. Layout, service lists, navigation and images are versioned in this repository. Staff edits are stored in D1. Source rebuilds keep the saved overrides in place. The draft privacy wording and illustrative portfolio images require company review before being presented as final material.

## Enquiry API and operations

Staff can open **View daily contact counts** from the enquiry inbox or visit `/admin/metrics`. Counts are grouped by Malaysia calendar day, page language and event. A phone or WhatsApp click measures intent. A quote is counted by a database trigger when a new enquiry is inserted, so submission retries do not add another conversion. Contact-click events store no names, references, phone numbers, page text, cookies or visitor identifiers. Cloudflare's separate abuse-rate binding uses source IP transiently to limit repeated requests. The report shows the most recent 30 days. Apply both migrations before launching contact analytics.

The public form posts multipart data to `/api/quotes`. It validates the required fields, enforces attachment limits, checks JPEG, PNG and WebP signatures, stores uploads in a private Workers KV namespace, then records the enquiry in D1. A client-generated UUIDv4 makes submission retries return the same stored reference. The reference alone does not allow lookup or access to files. The rate-limit binding caps submissions per source IP to eight per minute per Cloudflare location.

Staff alerts contain only the reference. The webhook, access, retention, backups and any analytics should be reflected in the company’s final privacy notice. Follow the Cloudflare dashboard’s D1 recovery options and arrange private KV backup and retention with the site owner. Removing a record for retention or a valid deletion request requires deleting its KV keys listed in `quotes.files` and its D1 row.

Run integration tests with:

```sh
node --test --test-isolation=none tests/worker.test.mjs
npx wrangler deploy --dry-run --outdir .wrangler/build-check
```

The tests exercise duplicate requests, invalid fields, private uploads, storage failure recovery, staff access, status updates, content drafts, origin/rate controls and deferred notifications using local fixtures. The dry run bundles the Worker without publishing it.

The local Cloudflare emulator also accepted a multipart quotation with a private PNG attachment, returned the same reference on a submission retry, and required staff authentication for the inbox. The staff editor's draft, preview, publish and restore flows were checked against a built English page. Published metadata changed both its search description and social preview. Public pages, sitemap and robots URLs resolved to the serving origin. The production staff receiver and account provisioning are installation checks for your Cloudflare account.

Cloudflare references: [static assets](https://developers.cloudflare.com/workers/static-assets/), [HTML URL handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/), [Workers KV bindings](https://developers.cloudflare.com/kv/concepts/kv-bindings/) and [D1 migrations](https://developers.cloudflare.com/d1/reference/migrations/).

