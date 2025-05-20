import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, company, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "smtpout.secureserver.net",
    port: 465, // or 587 if you want TLS
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "cstlford@gmail.com",
      subject: `New Contact from ${name}`,
      text: `${message} \n\nEmail: ${email} \nPhone: ${phone} \nCompany: ${company}`,
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
