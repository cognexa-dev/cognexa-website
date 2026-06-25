import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO = "sales@cognexa.in";
const FROM = "no-reply@cognexa.in";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form error: RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email service is not configured. Please call us directly." }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, company, email, phone, role, interests, message } = body;

    if (!name || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const interestList = Array.isArray(interests) ? interests.join(", ") : (interests ?? "Not specified");

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New audit request — ${company} (${name})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0A1628; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: white; font-size: 20px; margin: 0 0 4px;">New Audit Request</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 0;">Submitted via cognexa.in</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0A1628; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0A1628; font-weight: 600;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #1B4FD8;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0A1628;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Role</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0A1628;">${role || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Interested in</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0A1628;">${interestList}</td>
            </tr>
          </table>

          ${message ? `
          <div style="margin-top: 24px; padding: 16px; background: #f7f9fc; border-radius: 8px; border-left: 3px solid #1B4FD8;">
            <p style="font-size: 12px; color: #64748b; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="font-size: 14px; color: #0A1628; margin: 0; line-height: 1.6;">${message}</p>
          </div>` : ""}

          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px;">
            <p style="font-size: 12px; color: #1B4FD8; margin: 0; font-weight: 600;">
              Reply to this email to respond directly to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    // Confirmation email to the prospect
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: `We received your request — Cognexa Technologies`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0A1628; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: white; font-size: 20px; margin: 0 0 4px;">Thank you, ${name}.</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 0;">We will be in touch within 4 business hours.</p>
          </div>

          <p style="color: #0A1628; font-size: 15px; line-height: 1.6;">
            Your audit request for <strong>${company}</strong> has been received.
            A Cognexa specialist will review your details and reach out to confirm the scope of your free assessment.
          </p>

          <div style="margin-top: 24px; padding: 20px; background: #f7f9fc; border-radius: 8px;">
            <p style="font-size: 13px; font-weight: 600; color: #0A1628; margin: 0 0 12px;">What to expect</p>
            <ol style="margin: 0; padding-left: 20px; color: #64748b; font-size: 13px; line-height: 2;">
              <li>Confirmation call within 4 business hours to align on scope</li>
              <li>Structured discovery session — typically 60 minutes</li>
              <li>Written assessment and prioritized action plan</li>
            </ol>
          </div>

          <p style="color: #64748b; font-size: 13px; margin-top: 24px;">
            Questions in the meantime? Call us at <a href="tel:+919898931509" style="color: #1B4FD8;">+91 98989 31509</a>
            or email <a href="mailto:sales@cognexa.in" style="color: #1B4FD8;">sales@cognexa.in</a>.
          </p>

          <p style="color: #94a3b8; font-size: 12px; margin-top: 32px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
            Cognexa Technologies · cognexa.in
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again or call us directly." }, { status: 500 });
  }
}
