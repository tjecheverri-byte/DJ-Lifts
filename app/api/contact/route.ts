import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Initialize with key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, eventDate, eventType, venue, details } = body;

    if (!name || !email || !eventDate || !eventType || !venue) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // NOTE: "onboarding@resend.dev" works for testing/dev only — it sends
      // to your verified email. For production, verify your own domain at
      // resend.com/domains and change this to something like:
      // "bookings@yourdomain.com"
      from: "DJ Lifts Bookings <bookings@djlifts.com>",
      to: ["bookdjlifts@gmail.com"],
      replyTo: email,
      subject: `🎧 Booking Request — ${eventType} · ${new Date(eventDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #ffffff; border-radius: 12px; overflow: hidden;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #00d4ff15, #a855f715); border-bottom: 1px solid #1f2937; padding: 32px;">
            <p style="color: #00d4ff; font-size: 11px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; margin: 0 0 8px 0;">DJ Lifts</p>
            <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0;">New Booking Request</h1>
            <p style="color: #71717a; font-size: 14px; margin: 8px 0 0 0;">Someone wants to book you for a ${eventType}.</p>
          </div>

          <!-- Details -->
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #f4f4f5; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; font-size: 14px;"><a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #f4f4f5; font-size: 14px;">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Event Date</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #00d4ff; font-size: 14px; font-weight: 600;">${new Date(eventDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Event Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1f2937; color: #f4f4f5; font-size: 14px;">${eventType}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; ${details ? "border-bottom: 1px solid #1f2937;" : ""} color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top; padding-top: 14px;">Venue</td>
                <td style="padding: 12px 0; ${details ? "border-bottom: 1px solid #1f2937;" : ""} color: #f4f4f5; font-size: 14px; padding-top: 14px;">${venue}</td>
              </tr>
              ${
                details
                  ? `
              <tr>
                <td style="padding: 12px 0; color: #71717a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top; padding-top: 14px;">Details</td>
                <td style="padding: 12px 0; color: #d4d4d8; font-size: 14px; line-height: 1.6; padding-top: 14px;">${details.replace(/\n/g, "<br>")}</td>
              </tr>`
                  : ""
              }
            </table>

            <!-- Reply CTA -->
            <div style="margin-top: 28px; padding: 16px 20px; background: rgba(0, 212, 255, 0.06); border: 1px solid rgba(0, 212, 255, 0.2); border-radius: 8px;">
              <p style="color: #00d4ff; font-size: 12px; margin: 0; font-weight: 500;">
                Hit reply to respond directly to ${name} at ${email}
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 32px; border-top: 1px solid #1f2937;">
            <p style="color: #3f3f46; font-size: 11px; margin: 0;">
              Sent via djlifts.com · Houston, TX
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
