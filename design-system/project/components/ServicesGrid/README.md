# ServicesGrid

The four disciplines as a 2×2 grid on `bone`. Each service is an index, a `display-3` title and one paragraph under a `taupe-35` hairline.

```html
<div class="services-grid">
  <div class="service">
    <span class="svc-num">01</span>
    <h3>Strategic Audit &amp; Advisory</h3>
    <p>…</p>
  </div>
  …
</div>
```

- **You provide:** four services, each with a title (with `&amp;` where needed) and one to two sentences of outcome, not features.
- **Style:** `index-label` in `gold`, prefixed by a • the CSS adds. The title is `display-3`; the copy is `body-sm` in `ink-muted`, max 42ch.
- **Hover:** a `gold` underline grows under the title over `duration-underline`.
- **Grid:** two columns, `space-56` row gap and `space-64` column gap; one column under 960px.
