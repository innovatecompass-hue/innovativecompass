# ProcessSteps

The method in four columns under a `gold` line that draws across as it scrolls into view: Diagnose, Think, Design, Build.

```html
<div class="process-head"><span class="eyebrow">The Method</span><h2>How we work.</h2><p>…</p></div>
<div class="process-grid">
  <div class="process-step">
    <span class="num">01</span>
    <span class="label">Diagnose</span>
    <p>We audit the business from the inside: workflows, data, people, tools, bottlenecks.</p>
  </div>
  …
</div>
```

- **You provide:** four steps, each with a number, a one-word verb label, and one sentence.
- **Style:** `numeral` (48px Playfair) in `gold`, the label in `overline`, copy in `body-xs` (`ink-muted`).
- **Motion:** the line starts at scaleX(0) and draws over `duration-draw` when `InnovativeCompass.reveal()` adds `.revealed`. Without the script it stays hidden, so add `.revealed` yourself if there's no script.
- **Under 960px** the steps stack and each gets a `gold` left border instead of the top line.
