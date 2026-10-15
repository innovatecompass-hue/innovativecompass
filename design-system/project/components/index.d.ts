// Innovative Compass ships no React components: components are plain HTML styled by bundle.css.
// bundle.js exposes the site's two behaviours.
export interface InnovativeCompassScripts {
  /** Observe every .reveal and .process-grid under root (default: document) and add .visible / .revealed on entry. */
  reveal(root?: ParentNode): IntersectionObserver;
  /** Write the current year into el (default: #year). */
  year(el?: HTMLElement | null): void;
}
declare global { interface Window { InnovativeCompass: InnovativeCompassScripts } }
