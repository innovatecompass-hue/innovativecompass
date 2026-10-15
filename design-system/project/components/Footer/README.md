# Footer

The closing band on `charcoal`: the on-dark logomark and tagline, the Navigate and Contact columns, then a fine-print row with the "Automate · Integrate · Elevate" triad.

```html
<footer class="charcoal">
  <div class="container">
    <div class="footer-grid">
      <div class="brand-block">
        <span class="logomark on-dark" style="align-items: flex-start; margin-bottom: 16px;">…</span>
        <p>The quiet operators behind ambitious companies.</p>
      </div>
      <div><h4>Navigate</h4><ul><li><a href="index.html">Home</a></li>…</ul></div>
      <div><h4>Contact</h4><ul><li><a href="mailto:…">…</a></li><li><a href="#book">Book a Call →</a></li></ul></div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Innovative Compass. All rights reserved.</span>
      <span>Automate · Integrate · Elevate</span>
    </div>
  </div>
</footer>
```

- **You provide:** the links and the contact address. Call `InnovativeCompass.year()` to fill `#year`.
- **Colours:** headings in `taupe` (`overline`), links in `on-dark-78` turning `gold-soft` on hover, the blurb in `on-dark-60`. Rules are `gold-soft-18` above and `gold-soft-12` above the fine print.
- **Layout:** a 2fr/1fr/1fr grid with `space-64` gaps, stacking under 960px.
- **Don't:** put the footer on `ink`. `charcoal` is reserved for it.
