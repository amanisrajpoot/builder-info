"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    // Send form data to Formspree
    const res = await fetch("https://formspree.io/f/mldnvgqz", {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        _replyto: form.email,
      }),
    });
    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setError("There was an error sending your message. Please try again later.");
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">Thank you for reaching out! We&apos;ll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded shadow">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm min-h-[80px]"
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded hover:bg-primary/90 transition">Send Message</button>
        </form>
      )}
      <div className="mt-10 text-center">
        <h2 className="text-lg font-semibold mb-2">Company Contact Info</h2>
        <div className="text-sm text-muted-foreground">Email: <a href="mailto:info@builderinfo.in" className="underline">info@builderinfo.in</a></div>
        <div className="text-sm text-muted-foreground">Phone: <a href="tel:+918896011202" className="underline">+91 88960 11202</a></div>
      </div>
      <div className="mt-8 w-full h-48 rounded overflow-hidden flex items-center justify-center">
        <iframe
          title="Lucknow, Uttar Pradesh Map"
          src="https://www.google.com/maps?q=Lucknow,+Uttar+Pradesh,+India&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
} 