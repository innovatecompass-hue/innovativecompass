# Reveal

The site's one entrance motion: elements fade up 16px as they scroll into view, staggered in 80ms steps.

```html
<span class="eyebrow reveal">The Method</span>
<h2 class="reveal d1">How we work.</h2>
<p class="reveal d2">…</p>
<script src="components/bundle.js"></script>
<script>InnovativeCompass.reveal();</script>
```

- **You provide:** `.reveal` on each element, `.d1`–`.d4` for the stagger (80, 160, 240 and 320ms), and one call to `InnovativeCompass.reveal()` after the markup.
- **Timing:** opacity and transform over `duration-reveal` on `ease`. It fires at 12% visibility with a -40px bottom margin, once per element.
- **Without the script, `.reveal` elements stay invisible.** Never put `.reveal` on content that must show without JavaScript.
- **Stagger within a group only:** eyebrow, then heading, then paragraph, then CTA. Don't chain more than four steps.
