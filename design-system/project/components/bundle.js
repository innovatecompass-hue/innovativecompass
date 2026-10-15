/* @ds-bundle: {"format":4,"namespace":"InnovativeCompass","components":[]} */
/* The site's main.js as callable functions. Nothing runs until called. */
(function () {
  var ns = window.InnovativeCompass || (window.InnovativeCompass = {});

  // Scroll reveal: adds .visible to each .reveal (and .revealed to .process-grid) as it enters the viewport.
  ns.reveal = function (root) {
    root = root || document;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          if (e.target.classList.contains('process-grid')) {
            e.target.classList.add('revealed');
          }
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    root.querySelectorAll('.reveal, .process-grid').forEach(function (el) { io.observe(el); });
    return io;
  };

  // Year: fills #year (the footer copyright) with the current year.
  ns.year = function (el) {
    el = el || document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  };
})();
