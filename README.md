# Innovative Compass

A strategic operations firm. We diagnose, design, and build the systems ambitious companies are missing.

**Live site:** _(Vercel URL goes here after deployment)_

## Stack

Static site — HTML, CSS, and a small amount of JavaScript. No build step.

## Structure

```
.
├── index.html       # Homepage
├── about.html       # About page
├── services.html    # Services page
├── styles.css       # Design system + all page styles
├── main.js          # Scroll-reveal animations
└── assets/          # Images (drop logo.png here)
```

## Local preview

```
python3 -m http.server 4823
```
Then open http://localhost:4823

## Deployment

Deployed via Vercel. Any push to `main` triggers a new deploy.
