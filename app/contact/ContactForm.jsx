"use client";

import { useState, useTransition } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [pending, startTransition] = useTransition();

  async function handleSubmit(formData) {
    startTransition(async () => {
      // WhatsApp fallback
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      const text = `Hello SmartInnovate,%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      window.open(`https://wa.me/94767785300?text=${text}`, "_blank");

      setSuccess(true);
    });
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

      <form action={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-lg"
        />

        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your Message"
          className="w-full px-4 py-3 border rounded-lg"
        />

        {/* reCAPTCHA v3 placeholder */}
        <input type="hidden" name="recaptcha" value="enabled" />

        <button
          disabled={pending}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Success Toast */}
      {success && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
          ✅ Message sent successfully! Redirecting to WhatsApp…
        </div>
      )}
    </div>
  );
}
