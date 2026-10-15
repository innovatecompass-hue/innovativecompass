# Nav

The site header: the logomark on the left and three uppercase links on the right, on `cream` with a `taupe-18` bottom rule.

```html
<nav class="nav">
  <a href="index.html" class="brand" aria-label="Innovative Compass — home">
    <span class="logomark"><span class="primary">INNOVATIVE</span><span class="secondary">COMPASS</span></span>
  </a>
  <ul>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="index.html#book">Book a Call</a></li>
  </ul>
</nav>
```

- **You provide:** the links. Keep it to three: About, Services, Book a Call. "Book a Call" goes last and points at `#book`.
- **Behaviour:** a `gold` underline grows under a link on hover over `duration-underline`. Under 960px the padding drops to `space-24` and the gap to 20px. Under 560px only the first two links show.
- **Always cream:** the nav stays `cream` even above a dark hero. That contrast is the page's first edge.
- **Don't:** add a filled button, a dropdown, or a background change on scroll.
