# Astrology Journal: lead-magnet landing page

A standalone landing page with its own design (pastel sky gradients, Abril Fatface, Josefin Sans, Cormorant Garamond) taken from the journal itself. It shares nothing with the main Innovative Compass styles and deploys as its own Vercel project, `astrology-journal`, with this folder as the Root Directory.

Visitors leave a first name, email and (optionally) their Sun sign. `api/journal-signup.js` saves them to GoHighLevel, and the page hands back the PDF download plus a next step: Circle of Stars.

## Files

```
astrology-journal/
├── index.html         # The page (thank-you screen + Circle of Stars upsell live in the <template>)
├── journal.css        # Its own design system
├── journal.js         # Scroll reveal + signup form
├── assets/            # Page previews (page-*.webp)
└── api/
    └── journal-signup.js  # Vercel function: GHL upsert + tags, returns the PDF link
```

## Go-live checklist

1. **GHL token.** In the Innovative Compass sub-account: Settings → Private Integrations → Create. Give it the *View Contacts* and *Edit Contacts* scopes and copy the token.
2. **Host the PDF.** Upload the journal to GHL Media Library (or any public URL) and copy the link.
3. **Vercel env vars** (Project → Settings → Environment Variables):
   | Name | Value |
   |---|---|
   | `GHL_API_KEY` | the Private Integration token |
   | `GHL_LOCATION_ID` | the Innovative Compass location ID (Settings → Business Profile) |
   | `JOURNAL_PDF_URL` | the PDF link from step 2 |
   If `JOURNAL_PDF_URL` is not set, the download points to `/astrology-journal.pdf`, so you can also commit the PDF into this folder (keep it under ~50 MB).
4. **GHL workflow.** Trigger: *Contact Tag Added* = `astrology-journal`. Action: send the welcome email with the same PDF link. The thank-you message on the page promises "a copy is on its way to your inbox", so turn this on before launch.
5. **Swap in hi-res previews.** The images in `assets/` were cropped from a screenshot (about 310 px wide), so they look soft on retina screens. Export each page at about 900 px wide and save over the same filenames.

## What lands in GHL

- Contact upserted by email (no duplicates), `source` = "Astrology Journal landing page".
- Tag `astrology-journal` on every signup.
- Tag `sun-<sign>` (e.g. `sun-leo`) when they pick a Sun sign, ready for segmented emails during each sign's season.
- Tags are added with the Add Tags endpoint, so existing contacts keep the tags they already have.

## Preview locally

```
cd astrology-journal && python3 -m http.server 4823
```
Open http://localhost:4823/. With no API running, the form shows the thank-you state in "preview mode" and saves nothing. Use `vercel dev` (with the env vars in `.env.local`) to test the real GHL connection.

## Circle of Stars upsell

The thank-you screen offers Circle of Stars (link tagged `utm_source=astrology-journal`). The link points to `constellate-livid.vercel.app/welcome`; update it in `index.html` once Circle of Stars has its own domain.

## Testimonials

There's a commented-out testimonials block in `index.html` between the letter and the FAQ. Paste in real reader quotes and remove the comment markers.
