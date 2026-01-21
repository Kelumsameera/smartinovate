import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("📩 New contact form submission:", { name, email, message });

  // Here you can integrate email delivery (SendGrid, Resend, Nodemailer)
  return NextResponse.json({ success: true });
}
