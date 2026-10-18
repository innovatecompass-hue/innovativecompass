// Astrology Journal landing page: scroll reveal + lead-magnet signup.

const SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const ENDPOINT = '/api/journal-signup';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const IS_LOCAL = ['localhost', '127.0.0.1', ''].includes(location.hostname);

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Year
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// Sun sign dropdowns
document.querySelectorAll('[data-sign-select]').forEach((select) => {
  select.add(new Option('Choose your sign', ''));
  SIGNS.forEach((sign) => select.add(new Option(sign, sign.toLowerCase())));
});

// Signup
function showError(form, message) {
  const box = form.querySelector('.form-error');
  box.textContent = message;
  box.hidden = false;
}

// Swap every form on the page for the download panel, then focus the one the reader used.
function showSuccess(form, { downloadUrl, firstName, preview }) {
  const usedSlot = form.closest('.signup-slot');
  const template = document.getElementById('signup-success');
  document.querySelectorAll('.signup-slot').forEach((slot) => {
    const panel = template.content.cloneNode(true);
    panel.querySelector('[data-name]').textContent = firstName ? `, ${firstName}` : '';
    panel.querySelector('[data-download]').href = downloadUrl;
    panel.querySelector('[data-download]').hidden = !!preview; // no PDF exists in preview mode
    panel.querySelector('[data-preview-note]').hidden = !preview;
    slot.replaceChildren(panel);
  });
  usedSlot.querySelector('.success').focus({ preventScroll: true });
}

async function submit(form) {
  const data = Object.fromEntries(new FormData(form));
  const email = (data.email || '').trim();
  const emailInput = form.elements.email;

  form.querySelector('.form-error').hidden = true;
  emailInput.removeAttribute('aria-invalid');

  if (!EMAIL_RE.test(email)) {
    emailInput.setAttribute('aria-invalid', 'true');
    emailInput.focus();
    showError(form, 'Please enter a valid email address so we can send your journal.');
    return;
  }

  // Hosted previews (e.g. a design review link) set window.JOURNAL_PREVIEW and never call the API.
  if (window.JOURNAL_PREVIEW) {
    showSuccess(form, { downloadUrl: '#', firstName: data.firstName?.trim(), preview: true });
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  const label = button.textContent;
  button.disabled = true;
  button.textContent = 'Sending…';

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, email }),
    });

    // A plain static server (python -m http.server) has no API: preview the thank-you state instead.
    if (IS_LOCAL && [404, 405, 501].includes(res.status)) {
      showSuccess(form, { downloadUrl: 'astrology-journal.pdf', firstName: data.firstName?.trim(), preview: true });
      return;
    }

    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body.downloadUrl) throw new Error(body.error || 'Something went wrong. Please try again.');
    showSuccess(form, { downloadUrl: body.downloadUrl, firstName: data.firstName?.trim() });
  } catch (err) {
    const offline = err instanceof TypeError; // fetch() rejects with a TypeError when the network fails
    showError(form, offline ? 'We couldn\'t reach the server. Check your connection and try again.' : err.message);
    button.disabled = false;
    button.textContent = label;
  }
}

document.querySelectorAll('[data-signup]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit(form);
  });
});
