"use client";

import Link from "next/link";
import { CTA as CTA_CONTENT } from "@/lib/content";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800 text-center px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-primary dark:text-gray-100">
        {CTA_CONTENT.title}
      </h2>
      <Link
        href={CTA_CONTENT.buttonHref}
        className="inline-block bg-blue-950 dark:bg-primary text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:scale-105 active:scale-100 transition touch-manipulation"
      >
        {CTA_CONTENT.buttonText}
      </Link>
    </section>
  );
}