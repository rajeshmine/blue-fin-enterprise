"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit");
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    const messageBody = [
      `Name: ${formData.name}`,
      `Mobile: ${formData.phone}`,
      `Email: ${formData.email}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: messageBody,
        },
        publicKey
      );
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-white/90 text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === "sending"}
          className="w-full px-4 py-3 bg-white/95 rounded-xl border-0 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-shadow placeholder:text-gray-400 disabled:opacity-70"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-white/90 text-sm font-medium mb-2">
          Mobile Number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+91 00000 00000"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={status === "sending"}
          className="w-full px-4 py-3 bg-white/95 rounded-xl border-0 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-shadow placeholder:text-gray-400 disabled:opacity-70"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "sending"}
          className="w-full px-4 py-3 bg-white/95 rounded-xl border-0 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-shadow placeholder:text-gray-400 disabled:opacity-70"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white/90 text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "sending"}
          className="w-full px-4 py-3 bg-white/95 rounded-xl border-0 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-shadow placeholder:text-gray-400 resize-none disabled:opacity-70"
        />
      </div>

      {status === "success" && (
        <p className="text-green-400 text-sm font-medium">
          Thank you! Your request has been submitted. We&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm font-medium">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/70 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
