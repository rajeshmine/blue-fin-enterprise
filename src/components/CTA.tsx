"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Have a Query? Talk To Us
      </h2>
      <Link
        href="/contact"
        className="inline-block bg-blue-950 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
      >
        Enquiry Now!
      </Link>
    </section>
  );
}