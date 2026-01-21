"use client";

import { useState } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else throw new Error("Failed");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-700 mb-12">
        Have a project in mind or want to learn more about Smartinovate’s solutions? Fill out the form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            required
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 font-medium mt-4">
            ✅ Message sent successfully! We’ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium mt-4">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
}
