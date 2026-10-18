// POST /api/journal-signup
// Adds an Astrology Journal reader to GoHighLevel, tags them, and returns the PDF link.
//
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   GHL_API_KEY       Private Integration token with the contacts.write scope
//   GHL_LOCATION_ID   The Innovative Compass sub-account (location) ID
//   JOURNAL_PDF_URL   Public link to the PDF (e.g. GHL Media Library); defaults to the copy in /astrology-journal

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';
const SIGNS = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const pdfUrl = () => process.env.JOURNAL_PDF_URL || '/astrology-journal/astrology-journal.pdf';

async function ghl(path, body) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      Version: GHL_VERSION,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GHL ${path} ${res.status}: ${await res.text()}`);
  return res.json();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let input = req.body || {};
  if (typeof input === 'string') {
    try { input = JSON.parse(input); } catch { input = {}; }
  }

  // Honeypot: bots fill every field. Pretend it worked and save nothing.
  if (input.company) return res.status(200).json({ ok: true, downloadUrl: pdfUrl() });

  const email = String(input.email || '').trim().toLowerCase();
  const firstName = String(input.firstName || '').trim().slice(0, 60);
  const sunSign = SIGNS.includes(input.sunSign) ? input.sunSign : '';

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: 'Please enter a valid email address so we can send your journal.' });
  }

  if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
    console.error('journal-signup: GHL_API_KEY or GHL_LOCATION_ID is not set');
    return res.status(500).json({ error: 'Signups are paused for a moment. Please try again soon.' });
  }

  try {
    // Upsert matches existing contacts by email. Tags go on separately because
    // upsert's `tags` field would overwrite any tags the contact already has.
    const { contact } = await ghl('/contacts/upsert', {
      locationId: process.env.GHL_LOCATION_ID,
      email,
      firstName: firstName || undefined,
      source: 'Astrology Journal landing page',
    });

    const tags = ['astrology-journal'];
    if (sunSign) tags.push(`sun-${sunSign}`);
    await ghl(`/contacts/${contact.id}/tags`, { tags });
  } catch (err) {
    console.error('journal-signup:', err.message);
    return res.status(502).json({ error: 'Something went wrong on our side. Please try again in a minute.' });
  }

  return res.status(200).json({ ok: true, downloadUrl: pdfUrl() });
};
