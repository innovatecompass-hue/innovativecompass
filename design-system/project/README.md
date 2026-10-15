Innovative Compass is a strategic operations firm, "the quiet operators behind ambitious companies." The brand looks like a print journal: sage paper, near-black bands, Playfair headlines, Inter body copy, and one gold hairline doing all the accent work. Everything is square, flat and unhurried. If a choice feels loud, it's wrong.

## Using this system

- Load `tokens.css`, then `components/bundle.css`. The bundle is the site's own stylesheet, so every class in these components is the production class. It `@import`s Inter (400/500/600) and Playfair Display (400/500, with italics) from Google Fonts.
- Write the markup as plain HTML with those classes. There's no framework. Each component's README gives its exact markup.
- An element with `.reveal` stays invisible until `InnovativeCompass.reveal()` runs (from `components/bundle.js`, the site's `main.js`). Leave `.reveal` off anything that has to show without script.
- For new surfaces like decks, proposals or emails, use the semantic tokens `surface`, `surface-alt`, `text`, `text-muted`, `label`, `accent` and `hairline`. Put `data-theme="dark"` on a container to get the dark-section values. It's the token equivalent of the site's `.dark` class.

## Voice and copy

- Write to one founder, in the second person. The firm is "we"; the founder's note is "I".
- Keep it calm, short and declarative. Name the feeling before the fix: "You didn't grow this far to be buried in your own business."
- Headlines are sentences and end with a full stop: "How we work." "The quiet kind of growth." "Less, better."
- Write statements as two lines, with the second line turning the thought in italic: "You don't need more tools. / *You need a system.*" or "Most founders wait too long. / *You don't have to.*"
- Use em dashes for the aside: "Not from effort — from inefficiency."
- Eyebrows are two to four words in Title Case, rendered uppercase: "The Real Cost", "What We Build", "If This Resonates".
- Number things with two digits, 01–04.
- There's one call to action, "Book a Call →". Put a reassurance in italics beside or below it: "Thoughtful conversations only. No pitch." or "Limited engagements each quarter. We take on work we can do properly."
- Keep proof modest and add a caveat. "20+ hours returned to founders each week" is followed by "Figures reflect typical outcomes across client engagements in their first 90 days."
- Words the brand uses again and again: quiet, system, diagnose, design, build, clarity. Avoid hype, urgency, exclamation marks, emoji and superlatives.
- The sign-off triad is set with middle dots: "Automate · Integrate · Elevate".

## Colour

- The page ground is `cream` (sage). Body copy is `ink` and secondary copy is `ink-muted`.
- Light bands alternate with `bone`. Dark bands are `ink` (`.dark`). Only the footer uses `charcoal`.
- On dark grounds, headings are `cream` and paragraphs use `on-dark-78`. Long-form copy uses `on-dark-82`; one-line intros use `on-dark-72`.
- `gold` is the only accent, and it's a line, not a fill: the eyebrow dash, the CTA underline, the process line and the numerals 01–04. On dark grounds the accent becomes `gold-soft` for eyebrows, result figures and hovers.
- `taupe` is for labels: light-ground eyebrows, attributions, captions, aside notes and the footer fine print.
- Hairlines between items are `taupe-30` or `taupe-35` on light grounds and `gold-soft-18` or `gold-soft-12` on dark. The nav sits on `taupe-18`.
- Never fill a button or card with gold. Never put `gold-soft` on a light ground.
- Section rhythm on the homepage: dark hero, then cream problem, cream founder note, dark reframe, cream method, bone services, dark results, cream testimonial, dark CTA, charcoal footer. Alternate tones and never stack two dark bands.

### Known contrast failures

These values are exact from the code and flagged here rather than re-tinted:

- `taupe` on `cream` is 2.1:1 and on `bone` 1.75:1. Every light-ground eyebrow, caption and placeholder label fails WCAG AA, which needs 4.5:1.
- `gold` numerals on `cream` are 2.2:1 and on `bone` 1.8:1. They fail even the 3:1 large-text floor at 48–54px.
- The sage palette shift changed `cream` and `bone` but not the on-dark tints. `on-dark-*` and `veil-light` are still mixed from the old cream `#f4efe6`, so dark-band paragraphs run slightly warmer than the headings above them.
- There's no focus style. Links and the CTA rely on the browser's default outline.

## Type

- Headings are Playfair Display 400 with -0.015em tracking, never bold: `display-1` (h1), `display-2` (h2), `display-3` (h3) and `statement` for the two-line set pieces. Each size is the desktop end of a fluid `clamp()`; the style's note gives the full range.
- Emphasis is italic Playfair, never weight or colour: `statement-italic`, `signature-name`.
- Numerals are Playfair in `gold`: `numeral` (process steps), `numeral-lg` (service blocks), `numeral-sm` (problem list). Result figures use `stat` in `gold-soft`.
- Body is Inter with `font-feature-settings: "ss01", "liga"`. Use `body` (17/1.65) by default, `lead` for intros, `body-sm` and `body-xs` for items. Cap paragraphs at `measure`.
- Labels use `overline`: 11px, 500, 0.18em, uppercase. Only `overline`, `nav-link` and the wordmark are uppercase.
- 500 is the heaviest weight in use (`item-title`, `cta-label`, `overline`). Don't set 600 or above.

## Space and layout

- Content sits in `.container`, which is `max` (1240px) wide with `space-56` gutters. Under 960px the gutters drop to `space-24`.
- Sections pad `space-104` top and bottom (`space-72` under 960px). The final CTA gets `space-128` and the testimonial `space-88`.
- A section head runs: eyebrow, `space-24`, the h2, `space-16`, the intro. Leave `space-64` before the content grid.
- Layouts are asymmetric and left-aligned: 2fr/3fr (problem), 1fr/2fr (service block), 1.2fr/1fr (hero), 1fr/1.4fr (founder note). Everything collapses to one column at 960px.
- Grid gaps step up with the content: `space-48`, `space-56`, `space-64`, `space-72`, `space-80`.
- Nothing is centred except the two lines of the logomark.

## Lines, corners, depth

- Every rule is `hairline-width` (1px). Separate items with a top border, never a box.
- Corners are square (`radius-none`).
- There are no shadows. The only gradients are the hero's faint `gold-soft-08` glow and the image placeholder's hatch.

## Motion

- Use one curve, `ease`.
- On hover, underlines grow over `duration-underline`, the CTA arrow shifts 6px right, and colours change over `duration-color`.
- On entry, `.reveal` fades up 16px over `duration-reveal`, staggered by `stagger` with `.d1`–`.d4`. The process line draws across over `duration-draw`.
- Nothing bounces, loops or autoplays.

## Imagery

- No photography ships yet. Every image slot is an `ImagePlaceholder` labelled with its role and ratio: "Hero Image · 4:5", "Founder Portrait · 3:4".
- Ratios in use: 4:5 (hero), 3:4 (portrait), 16:10 (wide), 1:1 (square), 21:9 (process strip).

## Logo and iconography

- The logo is typographic. `Logomark` sets "INNOVATIVE" in Playfair tracked 0.24em over "COMPASS" in `gold` between two gold hairlines. There's no image file yet; the stylesheet keeps an unused `.logo-img` slot for an `assets/logo.png`.
- On dark grounds use `.logomark.on-dark`, which switches to `cream` and `gold-soft`.
- There's no icon set. The only glyphs are typographic: → (CTA arrow), • (service index), · (separators) and — (dashes, attributions). Don't add icon fonts or emoji.

## Not synced

- Styled in `bundle.css` but unused on any page, so no component: `.scroll-hint`, `.logo-img`, `.footer-grid .mark`, `.process-image`, `.about-gallery`, `.service-block .grid.with-image`. The `.logomark.lg .tagline` slot is shown in the Logomark preview.
- The placeholder's internal gradient stops (gold at 4%, taupe at 8%) live only in `bundle.css`.
- Fluid `clamp()` sizes are stored at their desktop maximum; each style's note gives the full clamp.
- The site has no component library, so the previews are static renditions of the production markup, styled by the production stylesheet.
