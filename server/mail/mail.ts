"use server";

import nodemailer from "nodemailer";

export type MailState = {
  success: boolean;
  message: string;
};

export async function sendMail(
  _: MailState,
  formData: FormData
): Promise<MailState> {
  try {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const serviceType = formData.get("serviceType") as string;
    const message = formData.get("message") as string;

    if (!fullName || !email || !message) {
      return {
        success: false,
        message: "Required fields are missing.",
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const subject = `New MSS Lead — ${serviceType || "General Inquiry"}`;

    // Mobile-friendlier HTML: reduced padding + responsive helpers
    const html = `
      <div
        class="mss-wrapper"
        style="
          background: #0f1724;
          padding: 24px;
          font-family: Arial, sans-serif;
          color: #d1d5db;
        "
      >
        <style>
          @media only screen and (max-width: 600px) {
            .mss-wrapper {
              padding: 12px !important;
            }
            .mss-card {
              border-radius: 16px !important;
            }
            .mss-card-body {
              padding: 18px !important;
            }
          }
        </style>

        <div
          class="mss-card"
          style="
            width: 100%;
            max-width: 640px;
            margin: 0 auto;
            background: rgba(26,26,26,0.6);
            border-radius: 20px;
            border: 1px solid rgba(34,211,238,0.25);
            overflow: hidden;
            box-shadow: 0 0 40px rgba(34,211,238,0.15);
          "
        >
          <!-- Header -->
          <div
            style="
              padding: 16px 20px;
              background: linear-gradient(135deg, #2dd4bf, #22d3ee);
              color: #0f1724;
              font-weight: 700;
              letter-spacing: 1px;
              font-size: 14px;
            "
          >
            New Managed Security Contact Request
          </div>

          <!-- Body -->
          <div
            class="mss-card-body"
            style="
              padding: 20px;
            "
          >
            <p style="margin: 0 0 12px 0; color: #9ca3af; font-size: 13px;">
              A new lead has been submitted through the MSS contact form.
            </p>

            <div
              style="
                margin-top: 16px;
                border: 1px solid rgba(34,211,238,0.25);
                border-radius: 14px;
                padding: 12px;
                background: rgba(15,23,36,0.7);
                font-size: 13px;
              "
            >
              <p style="margin: 0 0 4px 0;">
                <strong style="color:#2dd4bf;">Name:</strong> ${fullName}
              </p>
              <p style="margin: 0 0 4px 0;">
                <strong style="color:#22d3ee;">Email:</strong> ${email}
              </p>
              <p style="margin: 0 0 4px 0;">
                <strong style="color:#2dd4bf;">Phone:</strong> ${
                  phone || "Not provided"
                }
              </p>
              <p style="margin: 0;">
                <strong style="color:#22d3ee;">Service Type:</strong> ${
                  serviceType || "Not specified"
                }
              </p>
            </div>

            <div
              style="
                margin-top: 18px;
                border-left: 3px solid #2dd4bf;
                padding-left: 12px;
                font-size: 13px;
              "
            >
              <p style="margin: 0; font-weight: 600; color: #e5e7eb;">
                Client Message
              </p>
              <p
                style="
                  margin-top: 8px;
                  line-height: 1.6;
                  color: #d1d5db;
                  white-space: pre-wrap;
                "
              >
                ${message}
              </p>
            </div>

            <div
              style="
                margin-top: 22px;
                font-size: 11px;
                color: #9ca3af;
              "
            >
              This inquiry was generated from your MSS website contact form.
            </div>
          </div>
        </div>
      </div>
    `;

    const text = `
New MSS Contact Request

Name       : ${fullName}
Email      : ${email}
Phone      : ${phone || "Not provided"}
Service    : ${serviceType || "Not specified"}

Message:
${message}
`;

    const mailOptions = {
      from: `"MSS Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject,
      html,
      text,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Message sent successfully! Our team will contact you shortly.",
    };
  } catch (error) {
    console.error("Mail error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
