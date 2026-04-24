// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      if (e.target.classList.contains('process-grid')) {
        e.target.classList.add('revealed');
      }
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .process-grid').forEach((el) => io.observe(el));

// Year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
