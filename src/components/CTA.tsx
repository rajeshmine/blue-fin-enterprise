"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { CTA as CTA_CONTENT, CONTACT } from "@/lib/content";

export default function CTA() {
  const waLink = CTA_CONTENT.whatsapp.href(
    CONTACT.whatsapp.number,
    CONTACT.whatsapp.defaultMessage
  );

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800 text-center px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-primary dark:text-gray-100">
        {CTA_CONTENT.title}
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <Link
          href={CTA_CONTENT.primary.href}
          className="inline-flex items-center justify-center bg-blue-950 dark:bg-primary text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:scale-105 active:scale-100 transition touch-manipulation w-full sm:w-auto"
        >
          {CTA_CONTENT.primary.text}
        </Link>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:scale-105 active:scale-100 transition touch-manipulation w-full sm:w-auto hover:bg-[#20bd5a]"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2} />
          {CTA_CONTENT.whatsapp.text}
        </a>
      </div>
    </section>
  );
}