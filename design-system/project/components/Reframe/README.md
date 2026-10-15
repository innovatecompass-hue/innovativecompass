# Reframe

The turning-point statement on `ink`: a two-line `statement` whose second line turns in italic, an 80px `gold` rule, and one quiet paragraph.

```html
<section class="dark reframe">
  <div class="container">
    <div class="inner">
      <span class="eyebrow">The Shift</span>
      <h2>You don't need more tools.<span class="line2">You need a system.</span></h2>
      <div class="rule"></div>
      <p>…</p>
    </div>
  </div>
</section>
```

- **You provide:** a plain first line and a turning second line (in `.line2`, which renders as `statement-italic`), plus one `lead` paragraph in `on-dark-72`.
- **Use once per page.** It's the beat between the problem and the method.
- **Layout:** left-aligned, max 820px, at least 70vh tall.
