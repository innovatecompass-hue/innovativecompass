# PersonalNote

The founder's letter: a 3:4 portrait beside a first-person heading, two paragraphs, and an italic signature.

```html
<section class="personal-note cream">
  <div class="container">
    <div class="grid">
      <div class="portrait"><div class="img-placeholder"><span>Founder Portrait · 3:4</span></div></div>
      <div class="note-body">
        <span class="eyebrow">A Note from the Founder</span>
        <h2>…</h2>
        <p>…</p>
        <div class="signature">
          <span class="name">Miranda Ogletree</span>
          <span class="role">Founder · Innovative Compass</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- **You provide:** the portrait, the heading in "I", two paragraphs (`body`, `ink-muted`, line height 1.75), and the name and role.
- **Signature:** the name is `signature-name` (italic Playfair, 26px); the role is `overline` in `taupe`.
- **Layout:** 1fr/1.4fr with a `space-72` gap and `space-96` padding. Inside `.dark` the paragraphs turn `on-dark-82` and the name `cream`.
- **The only place the brand says "I".**
