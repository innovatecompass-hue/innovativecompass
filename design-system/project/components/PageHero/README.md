# PageHero

The opener for inner pages (About, Services): eyebrow, a `display-1` belief statement capped at 16ch, and one `lead-lg` paragraph, on `cream`.

```html
<section class="page-hero cream">
  <div class="container">
    <span class="eyebrow">About</span>
    <h1>We believe most businesses are over-tooled and under-designed.</h1>
    <p>…</p>
  </div>
</section>
```

- **You provide:** the page name as the eyebrow, a one-sentence point of view, and one paragraph.
- **Spacing:** padding `space-112` above and `space-88` below; `space-32` under the eyebrow, `space-40` under the h1.
- **On dark:** `.page-hero.dark` is supported and the paragraph switches to `on-dark-78`.
