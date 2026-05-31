"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export type BookingFormState = {
  success: boolean;
  error?: string;
};

export async function sendBookingEmail(
  _prev: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const name      = formData.get("name") as string;
  const email     = formData.get("email") as string;
  const yearGroup = formData.get("yearGroup") as string;
  const subject   = formData.get("subject") as string;
  const date      = formData.get("date") as string;
  const time      = formData.get("time") as string;
  const timezone  = formData.get("timezone") as string;
  const message   = formData.get("message") as string;

  if (!name || !email || !date || !time || !timezone) {
    return { success: false, error: "Please complete all required fields." };
  }

  try {
    await transporter.sendMail({
      from:     '"Mind\'s Eye Education" <info@mindseye.education>',
      to:       "info@mindseye.education",
      replyTo:  email,
      subject:  `New booking request from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${yearGroup ? `<p><strong>Year group:</strong> ${yearGroup}</p>` : ""}
        ${subject   ? `<p><strong>Subject / area:</strong> ${subject}</p>` : ""}
        <p><strong>Preferred date:</strong> ${date}</p>
        <p><strong>Preferred time:</strong> ${time} (${timezone})</p>
        ${message   ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly at info@mindseye.education.",
    };
  }
}
