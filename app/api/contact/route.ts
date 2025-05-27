import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod/v4";

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  phone: z.string().max(20).optional(),
  company: z.string().max(100),
  message: z.string().min(1).max(2000),
});

export async function POST(req: Request) {
  const payload = await req.json();

  const result = ContactSchema.safeParse(payload);
  if (!result.success) {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid input." }),
      { status: 400 }
    );
  }

  const { name, email, phone, company, message } = result.data;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "cstlford@gmail.com",
      subject: `New Contact from ${name}`,
      text: `Message: ${message} \n\nEmail: ${email} \nPhone: ${phone} \nCompany: ${company}`, // Fallback
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p style="margin-left: 1em; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
