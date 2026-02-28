import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT, CONTACT_PAGE } from "@/lib/content";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-blue-900 dark:bg-primary pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="h-1 w-14 bg-accent rounded-full shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                {CONTACT_PAGE.hero.title} <span className="font-bold text-accent">{CONTACT_PAGE.hero.titleAccent}</span>
              </h1>
              <p className="text-blue-200/90 mt-2 text-sm sm:text-base">
                {CONTACT_PAGE.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Contact info & map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-700 p-5 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Image
                  src={CONTACT.logoPath}
                  alt={`${CONTACT_PAGE.card.companyName} Logo`}
                  width={72}
                  height={72}
                  className="shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl font-bold text-primary text-center sm:text-left">
                    {CONTACT_PAGE.card.companyName}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {CONTACT_PAGE.card.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <a
                  href={CONTACT.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors ring-1 ring-blue-500/20">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm mb-0.5">{CONTACT_PAGE.card.officeLabel}</p>
                    <p>{CONTACT.address.officeLine1} {CONTACT.address.officeLine2}</p>
                    <p className="mt-1">{CONTACT.address.factoryLine1} {CONTACT.address.factoryLine2}</p>
                  </div>
                </a>
                <a
                  href={CONTACT.telLink}
                  className="flex gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors ring-1 ring-emerald-500/20">
                    <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm mb-0.5">{CONTACT_PAGE.card.callLabel}</p>
                    <p>{CONTACT.phone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors ring-1 ring-[#25D366]/20">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm mb-0.5">{CONTACT_PAGE.card.whatsappLabel}</p>
                    <p>{CONTACT.phone}</p>
                  </div>
                </a>
                <a
                  href={CONTACT.mailLink}
                  className="flex gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors ring-1 ring-red-500/20">
                    <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm mb-0.5">{CONTACT_PAGE.card.emailLabel}</p>
                    <p>{CONTACT.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-700 overflow-hidden flex-1 min-h-[280px]">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-primary">{CONTACT.getDirections}</h3>
              </div>
              <div className="h-56 sm:h-64 lg:h-72 w-full min-h-[224px]">
                <iframe
                  title={`${CONTACT.companyName} Location`}
                  src={CONTACT.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:min-h-[600px]">
            <div className="bg-blue-900 dark:bg-primary rounded-2xl shadow-xl dark:shadow-gray-950/50 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 h-full flex flex-col">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {CONTACT_PAGE.form.title}
                </h2>
                <p className="text-blue-200/80 mt-2 text-sm">
                  {CONTACT_PAGE.form.subtitle}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
