# Cta

The brand's only action: a text link with a `gold` underline and an arrow, never a filled button.

```html
<a href="#book" class="cta">Book a Call <span class="arrow">→</span></a>
<a href="#book" class="cta cta-large">Book a Call <span class="arrow">→</span></a>
```

- **You provide:** the label and the arrow span. The label is "Book a Call" everywhere; the arrow is the → glyph.
- **Sizes:** default `cta-label` (16px) in heroes and rows; `.cta-large` (`cta-label-lg`, 20px) in the closing section.
- **Hover:** the underline stretches to 108% and turns `gold-soft`, and the arrow moves 6px right, over `duration-underline`.
- **Colour:** it inherits the text colour, so it works on any ground.
- **Pair it** with a reassurance in `.aside-note` (`aside`, in `taupe`). In the hero it sits inside `.cta-row` with a `space-32` gap; in the final CTA it goes below.
- **Don't:** box it, fill it, or put two on one screen. There's no focus style yet, so keyboard users get the browser default.
