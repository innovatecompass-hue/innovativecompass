# Astrology Journal: lead-magnet landing page

A standalone page at `/astrology-journal/`. Its design (pastel sky gradients, Abril Fatface, Josefin Sans, Cormorant Garamond) comes from the journal itself and shares nothing with the main Innovative Compass styles.

Visitors leave a first name, email and (optionally) their Sun sign. `api/journal-signup.js` saves them to GoHighLevel, and the page hands back the PDF download.

## Files

```
astrology-journal/
├── index.html       # The page
├── journal.css      # Its own design system
├── journal.js       # Scroll reveal + signup form
└── assets/          # Page previews (page-*.webp)
api/
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
   If `JOURNAL_PDF_URL` is not set, the download points to `/astrology-journal/astrology-journal.pdf`, so you can also commit the PDF there (keep it under ~50 MB).
4. **GHL workflow.** Trigger: *Contact Tag Added* = `astrology-journal`. Action: send the welcome email with the same PDF link. The thank-you message on the page promises "a copy is on its way to your inbox", so turn this on before launch.
5. **Swap in hi-res previews.** The images in `assets/` were cropped from a screenshot (about 310 px wide), so they look soft on retina screens. Export each page at about 900 px wide and save over the same filenames.

## What lands in GHL

- Contact upserted by email (no duplicates), `source` = "Astrology Journal landing page".
- Tag `astrology-journal` on every signup.
- Tag `sun-<sign>` (e.g. `sun-leo`) when they pick a Sun sign, ready for segmented emails during each sign's season.
- Tags are added with the Add Tags endpoint, so existing contacts keep the tags they already have.

## Preview locally

```
python3 -m http.server 4823
```
Open http://localhost:4823/astrology-journal/. With no API running, the form shows the thank-you state in "preview mode" and saves nothing. Use `vercel dev` (with the env vars in `.env.local`) to test the real GHL connection.

## Testimonials

There's a commented-out testimonials block in `index.html` between the letter and the FAQ. Paste in real reader quotes and remove the comment markers.
