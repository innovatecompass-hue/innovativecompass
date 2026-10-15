# ProblemList

The diagnosis block: a section head on the left (2fr) and four numbered symptoms on the right (3fr), each under a `taupe-30` hairline.

```html
<div class="problem-grid">
  <div class="left"><span class="eyebrow">The Real Cost</span><h2>…</h2><p>…</p></div>
  <div class="problem-list">
    <div class="problem-item">
      <span class="num">01</span>
      <strong>Leads slip through.</strong>
      <p>Not because the team is careless, but because there's no system holding them.</p>
    </div>
    …
  </div>
</div>
```

- **You provide:** four items. Each has a two-digit number, a title of three or four words ending in a full stop, and one sentence that names the cause, not the blame.
- **Style:** `numeral-sm` in `gold`, `item-title` (19px, 500) in `ink`, `body-sm` in `ink-muted`. Items are `space-48` apart.
- **Write symptoms the reader recognises,** and turn them in the description: "Not from effort — from inefficiency."
