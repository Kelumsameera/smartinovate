"use client";

import { useState } from "react";

export default function GetStarted() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Message sent!");
      e.target.reset();
    } else {
      alert("❌ Failed to send");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-4">
          Start Your Project 🚀
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Submit details and we’ll contact you instantly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full border p-4 rounded-lg"
          />

          <input
            name="company"
            placeholder="Company Name"
            className="w-full border p-4 rounded-lg"
          />

          <select
            name="service"
            className="w-full border p-4 rounded-lg"
          >
            <option>Website Development</option>
            <option>eCommerce Store</option>
            <option>Mobile App</option>
            <option>Custom Software</option>
            <option>Cloud / DevOps</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            className="w-full border p-4 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </form>

      </div>
    </main>
  );
}
