# Logomark

The typographic logo: "INNOVATIVE" in Playfair Display over "COMPASS" in `gold`, set between two gold hairlines.

```html
<span class="logomark">
  <span class="primary">INNOVATIVE</span>
  <span class="secondary">COMPASS</span>
</span>
```

- **Sizes:** the default (20px over 10px) is the nav lockup. `.lg` (56px over 20px, 48px hairlines) is for covers and title pages, and it can carry a `<span class="tagline">` line in `overline`-style tracking.
- **On dark:** add `.on-dark` on `ink` or `charcoal`. The lines switch to `cream` and `gold-soft`.
- **You provide:** the two words in uppercase, exactly as above. The hairlines are pseudo-elements. In navigation, wrap it in a link with `aria-label="Innovative Compass — home"`.
- **Alignment:** it centres its own lines. In the footer it's left-aligned with an inline `align-items: flex-start`.
- **Don't:** recolour or re-track the primary line, add a compass icon, or swap in a drawn mark. There's no image logo yet.
