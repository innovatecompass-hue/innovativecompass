# Hero

The homepage opener on `ink`: eyebrow, a `display-1` headline that names the founder's feeling, two paragraphs, the CTA row, and a 4:5 image on the right.

```html
<section class="hero dark">
  <div class="container">
    <div class="hero-grid">
      <div class="inner">
        <span class="eyebrow">A Strategic Operations Firm</span>
        <h1>…</h1>
        <p>…</p>
        <div class="cta-row">
          <a href="#book" class="cta">Book a Call <span class="arrow">→</span></a>
          <span class="aside-note">Thoughtful conversations only. No pitch.</span>
        </div>
      </div>
      <div class="hero-image"><div class="img-placeholder tall"><span>Hero Image · 4:5</span></div></div>
    </div>
  </div>
</section>
```

- **You provide:** the eyebrow, the h1 as one sentence in the reader's voice, one or two `lead` paragraphs (`on-dark-78`), the CTA and its aside, and the image.
- **Layout:** a 1.2fr/1fr grid with a `space-72` gap. It fills the viewport less the nav, and a faint `gold-soft-08` glow sits top right. Single column under 960px.
- **Always `.dark`.** The paragraph colour is hard-coded for a dark ground.
