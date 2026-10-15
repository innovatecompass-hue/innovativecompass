# Section

The page is a stack of full-width bands, each a `<section>` with one tone class and a `.container` inside.

```html
<section class="cream">
  <div class="container">…</div>
</section>
```

- **Tones:** `.cream` (`cream`, the default), `.bone` (`bone`), `.dark` (`ink` ground, `cream` text, `gold-soft` eyebrows), `.charcoal` (footer).
- **Padding:** `space-104` top and bottom; `space-72` under 960px. Some sections set their own: hero 88/72, testimonial `space-88`, service blocks `space-96`, final CTA `space-128`.
- **Container:** `max` (1240px) wide with `space-56` side padding; `space-24` under 960px.
- **Rhythm:** alternate tones, open with a dark hero, close with a dark CTA, then the charcoal footer. Never stack two dark bands.
- **Tokens:** for new surfaces, `data-theme="dark"` on a container gives the same values through `surface`, `text` and `text-muted`.
