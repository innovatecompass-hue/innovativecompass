# ImagePlaceholder

The stand-in for every image slot until photography exists: a hatched `bone` panel (`charcoal` inside `.dark`) with a frosted label naming the role and ratio.

```html
<div class="img-placeholder"><span>Hero Image · 4:5</span></div>
<div class="img-placeholder tall"><span>Founder Portrait · 3:4</span></div>
<div class="img-placeholder square"><span>…</span></div>
<div class="img-placeholder wide"><span>…</span></div>
```

- **You provide:** the label, written as "Role · ratio". The default ratio is 4:5; use `.tall` (3:4), `.square` (1:1) or `.wide` (16:10) for others.
- **Style:** `taupe-25` border, a 135° hatch, and the label in `overline` on `veil-light`. Inside `.dark` the border is `gold-soft-20` and the label is `gold-soft` on `veil-dark`.
- **Width:** it fills its column, so the parent sets the width.
- **Replace it** with a real image at the same ratio. Don't ship a placeholder.
- **Contrast:** `taupe` on the light veil is 2.2:1, flagged.
