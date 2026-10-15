# FinalCta

The closing ask, the last section before the footer: eyebrow, a two-line `statement`, an offer paragraph, the large CTA and a scarcity aside.

```html
<section id="book" class="dark final-cta">
  <div class="container">
    <div class="inner">
      <span class="eyebrow">If This Resonates</span>
      <h2>Most founders wait too long.<span class="line2">You don't have to.</span></h2>
      <p>…</p>
      <a href="mailto:…?subject=Book%20a%20Call" class="cta cta-large">Book a Call <span class="arrow">→</span></a>
      <span class="aside-note">Limited engagements each quarter. We take on work we can do properly.</span>
    </div>
  </div>
</section>
```

- **You provide:** the eyebrow, both statement lines, a paragraph that describes the call ("Thirty minutes. We ask questions."), the CTA target, and the aside.
- **Spacing:** `space-128` padding, the most air on the page; `space-56` from the paragraph to the CTA.
- **Tones:** `.dark` by default. The About page uses `.cream` with `color: var(--ink)` set on the section, the h2 and the paragraph (`ink-muted`), and no aside.
- **Give it `id="book"`.** Every "Book a Call" link points here.
