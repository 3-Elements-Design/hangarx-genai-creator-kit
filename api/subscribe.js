const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM = 'HangarX <noreply@hangarx.ai>';

// Public base URL where the kit files live. Override at runtime via the
// SITE_URL env var on Vercel if your domain changes.
const SITE_URL = process.env.SITE_URL || 'https://hangarx.ai';
const PDF_URL = `${SITE_URL}/downloads/hangarx-genai-creator-kit-v1.1.pdf`;
const ZIP_URL = `${SITE_URL}/downloads/hangarx-genai-creator-kit-v1.1.zip`;
const KIT_PAGE = `${SITE_URL}/kit`;
const FILM_URL = 'https://www.youtube.com/watch?v=WcTTLH53bV0';
const NOVEL_URL = `${SITE_URL}/graphic-novel`;

const WELCOME_SUBJECT = 'Your HangarX GenAI Creator Kit is here';

const WELCOME_TEXT = `Your HangarX GenAI Creator Kit is attached.

The full system behind HANGAR X: The Mirror Protocol — yours to use.

→ PDF playbook (356 pages, polished)
  ${PDF_URL}

→ ZIP source bundle (53 markdown files, fork-friendly)
  ${ZIP_URL}

→ Full download page (keep this link, share it, come back to it)
  ${KIT_PAGE}

The kit pairs blank templates with the HangarX filled example across seven Parts:
story foundations, worldbuilding and continuity, clip architecture,
prompting system, audio and performance, production assembly, and the
graphic novel companion.

The 10-minute short film and the 41-page graphic novel are the worked example.
Read and watch as you go:

→ Short film: ${FILM_URL}
→ Graphic novel: ${NOVEL_URL}

No spam, no churn. Just the work, and the occasional dispatch from the studio
when we ship new material.

— HangarX

Unsubscribe at any time: {{UNSUBSCRIBE_URL}}
`;

const WELCOME_HTML = `<!doctype html>
<html><body style="margin:0;padding:0;background:#0A0E1A;font-family:-apple-system,BlinkMacSystemFont,'Inter',Helvetica,Arial,sans-serif;color:#FEF9E7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0A0E1A;">
    <tr><td align="center" style="padding:48px 24px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Hidden preheader (shown by some clients next to the subject in the inbox list) -->
        <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">Your 356-page playbook and full source bundle are ready to download.</div>

        <tr><td style="padding-bottom:8px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;letter-spacing:.16em;color:#C79A5A;text-transform:uppercase;">HangarX GenAI Creator Kit</td></tr>

        <tr><td style="font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;font-style:italic;font-size:34px;line-height:1.15;color:#FEF9E7;padding:14px 0 22px;">Your kit is here.</td></tr>

        <tr><td style="font-size:15.5px;line-height:1.65;color:#D8D2BD;padding-bottom:28px;">
          You just signed up for <strong style="color:#FEF9E7;">the HangarX GenAI Creator Kit</strong> &mdash; a 356-page production playbook plus the full markdown source bundle. Pick your format:
        </td></tr>

        <!-- PDF CARD -->
        <tr><td style="padding-bottom:14px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr><td style="background:#0F1626;border:1px solid rgba(199,154,90,0.45);padding:24px;">
              <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10.5px;letter-spacing:.18em;color:#C79A5A;text-transform:uppercase;padding-bottom:8px;">// 01 &mdash; The Playbook</div>
              <div style="font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:22px;color:#FEF9E7;padding-bottom:6px;">Read the PDF</div>
              <div style="font-size:14px;line-height:1.55;color:#D8D2BD;padding-bottom:14px;">The polished, branded 356-page playbook. Read end-to-end.</div>
              <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10.5px;letter-spacing:.14em;color:#8A8A8A;text-transform:uppercase;padding-bottom:16px;">PDF &nbsp;&middot;&nbsp; 356 pages &nbsp;&middot;&nbsp; 1.8 MB</div>
              <a href="${PDF_URL}" style="display:inline-block;background:#C79A5A;color:#0A0E1A;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;padding:13px 22px;border-radius:2px;font-weight:500;">&darr; Download PDF</a>
            </td></tr>
          </table>
        </td></tr>

        <!-- ZIP CARD -->
        <tr><td style="padding-bottom:28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr><td style="background:#0F1626;border:1px solid rgba(199,154,90,0.45);padding:24px;">
              <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10.5px;letter-spacing:.18em;color:#C79A5A;text-transform:uppercase;padding-bottom:8px;">// 02 &mdash; The Source Bundle</div>
              <div style="font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:22px;color:#FEF9E7;padding-bottom:6px;">Get the ZIP</div>
              <div style="font-size:14px;line-height:1.55;color:#D8D2BD;padding-bottom:14px;">53 markdown files &mdash; every template, every HangarX worked example, every checklist. Fork it.</div>
              <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10.5px;letter-spacing:.14em;color:#8A8A8A;text-transform:uppercase;padding-bottom:16px;">ZIP &nbsp;&middot;&nbsp; 53 files &nbsp;&middot;&nbsp; 1.7 MB</div>
              <a href="${ZIP_URL}" style="display:inline-block;background:#C79A5A;color:#0A0E1A;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;padding:13px 22px;border-radius:2px;font-weight:500;">&darr; Download ZIP</a>
            </td></tr>
          </table>
        </td></tr>

        <tr><td style="font-size:14.5px;line-height:1.65;color:#D8D2BD;padding-bottom:22px;">
          The kit pairs blank templates with the HangarX filled example across <strong style="color:#FEF9E7;">seven Parts</strong>: story foundations, worldbuilding and continuity, clip architecture, prompting system, audio and performance, production assembly, and the graphic novel companion.
        </td></tr>

        <tr><td style="font-size:14.5px;line-height:1.65;color:#D8D2BD;padding-bottom:14px;">
          The 10-minute short film and the 41-page graphic novel are the worked example. Read and watch as you go:
        </td></tr>

        <tr><td style="padding-bottom:32px;">
          <a href="${FILM_URL}" style="display:inline-block;color:#2FAFC0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;border:1px solid rgba(199,154,90,0.45);padding:10px 16px;border-radius:2px;margin-right:8px;margin-bottom:8px;">&#9654; Watch the film</a>
          <a href="${NOVEL_URL}" style="display:inline-block;color:#2FAFC0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;border:1px solid rgba(199,154,90,0.45);padding:10px 16px;border-radius:2px;margin-bottom:8px;">&#9646; Read the novel</a>
        </td></tr>

        <tr><td style="border-top:1px solid rgba(199,154,90,0.18);padding-top:22px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:.10em;color:#8A8A8A;text-transform:uppercase;line-height:1.7;">
          // HangarX &mdash; cinematic GenAI films without the slop<br>
          // <a href="${KIT_PAGE}" style="color:#8A8A8A;text-decoration:none;">your download page</a> &middot; save this link, come back any time<br>
          // <a href="{{UNSUBSCRIBE_URL}}" style="color:#8A8A8A;text-decoration:none;">unsubscribe</a> any time
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body ?? {};
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: 'invalid_email' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.error('subscribe: missing RESEND_API_KEY or RESEND_AUDIENCE_ID');
    return res.status(500).json({ error: 'server_misconfigured' });
  }

  const auth = { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' };

  const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: auth,
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!contactRes.ok) {
    const errBody = await safeText(contactRes);
    const isDuplicate = contactRes.status === 409 || /already exist/i.test(errBody);
    if (!isDuplicate) {
      console.error('subscribe: resend contact add failed', contactRes.status, errBody);
      return res.status(502).json({ error: 'subscribe_failed' });
    }
  }

  const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(email)}`;

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: auth,
    body: JSON.stringify({
      from: FROM,
      to: [email],
      subject: WELCOME_SUBJECT,
      text: WELCOME_TEXT.replace('{{UNSUBSCRIBE_URL}}', unsubscribeUrl),
      html: WELCOME_HTML.replace('{{UNSUBSCRIBE_URL}}', unsubscribeUrl),
      headers: {
        'List-Unsubscribe': `<${unsubscribeUrl}>, <mailto:unsubscribe@hangarx.ai>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    }),
  });

  if (!emailRes.ok) {
    const errBody = await safeText(emailRes);
    console.error('subscribe: resend email send failed', emailRes.status, errBody);
    return res.status(200).json({ ok: true, warning: 'welcome_email_failed' });
  }

  return res.status(200).json({ ok: true });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}

async function safeText(r) {
  try { return await r.text(); } catch { return ''; }
}
