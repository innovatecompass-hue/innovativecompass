# ServiceBlock

One service in depth on the Services page: a `numeral-lg` index and label on the left (1fr), and a headline with three label/paragraph pairs on the right (2fr).

```html
<section class="service-block dark">
  <div class="container">
    <div class="grid">
      <div class="label-col"><div class="svc-num">01</div><div class="label">Strategic Audit &amp; Advisory</div></div>
      <div>
        <h2>A clear look at how the business actually runs.</h2>
        <div class="pair"><h4>Problem it solves</h4><p>…</p></div>
        <div class="pair"><h4>What changes</h4><p>…</p></div>
        <div class="pair"><h4>Outcome</h4><p>…</p></div>
      </div>
    </div>
  </div>
</section>
```

- **You provide:** the number, the service name, a promise headline (max 18ch), and the three pairs, always in this order: Problem it solves, What changes, Outcome.
- **Tones:** alternate `.dark` and `.cream` block by block. The pair labels are `overline` in `gold` (`gold-soft` on dark), and the copy is `on-dark-82` on dark.
- **Write the Outcome short:** "Fewer handoffs, fewer mistakes, a team that can finally think."
