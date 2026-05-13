const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).send(htmlPage('Method not allowed.', false));
  }

  const email = readEmail(req);
  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).send(htmlPage('That unsubscribe link is missing an email.', false));
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.error('unsubscribe: missing RESEND_API_KEY or RESEND_AUDIENCE_ID');
    return res.status(500).send(htmlPage('Server is misconfigured. Reply to any email and we will remove you manually.', false));
  }

  const r = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ unsubscribed: true }),
    }
  );

  if (!r.ok && r.status !== 404) {
    const t = await safeText(r);
    console.error('unsubscribe: resend patch failed', r.status, t);
    return res.status(502).send(htmlPage('Something went wrong. Reply to any email and we will remove you manually.', false));
  }

  return res.status(200).send(htmlPage(email, true));
}

function readEmail(req) {
  const fromQuery = req.query && typeof req.query.email === 'string' ? req.query.email : '';
  if (fromQuery) return fromQuery.trim().toLowerCase();
  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const fromBody = typeof body.email === 'string' ? body.email : '';
  return fromBody.trim().toLowerCase();
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
async function safeText(r) { try { return await r.text(); } catch { return ''; } }

function htmlPage(messageOrEmail, success) {
  const isSuccess = success === true;
  const title = isSuccess ? 'Unsubscribed' : 'Could not unsubscribe';
  const heading = isSuccess ? 'You’re unsubscribed.' : 'Could not unsubscribe.';
  const body = isSuccess
    ? `We’ve removed <strong style="color:#FEF9E7;">${escapeHtml(messageOrEmail)}</strong> from the HangarX list. You won’t receive further emails.<br><br>If this was a mistake or you change your mind, you can sign up again at <a style="color:#2FAFC0;" href="https://hangarx-genai-creator-kit.vercel.app/">hangarx.ai</a>.`
    : escapeHtml(messageOrEmail);

  return `<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} · HangarX</title>
<meta name="robots" content="noindex,nofollow" />
<style>
  :root { color-scheme: dark; }
  body { margin:0; min-height:100vh; background:#0A0E1A; color:#FEF9E7; font-family:-apple-system,BlinkMacSystemFont,'Inter',Helvetica,Arial,sans-serif; display:flex; align-items:center; justify-content:center; padding:32px; line-height:1.6; }
  .card { max-width:520px; width:100%; padding:48px 36px; border:1px solid rgba(199,154,90,0.45); border-radius:2px; background:#0F1626; }
  .eyebrow { font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:#C79A5A; margin-bottom:14px; }
  h1 { font-family:'Cormorant Garamond',Georgia,serif; font-style:italic; font-weight:500; font-size:34px; line-height:1.15; margin:0 0 18px; color:#FEF9E7; }
  p, .body { font-size:15.5px; color:#D8D2BD; margin:0 0 18px; }
  a { color:#2FAFC0; }
  .footer { margin-top:28px; padding-top:18px; border-top:1px solid rgba(199,154,90,0.18); font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; letter-spacing:.10em; color:#8A8A8A; text-transform:uppercase; }
</style>
</head><body>
  <div class="card">
    <div class="eyebrow">// HangarX · list management</div>
    <h1>${heading}</h1>
    <p class="body">${body}</p>
    <div class="footer">// cinematic GenAI films without the slop</div>
  </div>
</body></html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
