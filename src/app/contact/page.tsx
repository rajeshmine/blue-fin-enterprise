import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero header */}
      <section className="bg-blue-900 pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="h-1 w-14 bg-accent rounded-full shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                Reach <span className="font-bold text-accent">Blue Fin</span>
              </h1>
              <p className="text-blue-200/90 mt-2 text-sm sm:text-base">
                Get in touch with our team for inquiries and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Contact info & map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <Image
                  src="/images/logo.png"
                  alt="Blue Fin Logo"
                  width={72}
                  height={72}
                  className="shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-bold text-primary">
                    Blue Fin Engineering Enterprises
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Material Handling & Assembly Solutions
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <a
                  href="https://maps.google.com/?q=BLUEFIN+ENGINEERING+ENTERPRISES+Hosur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm mb-0.5">Office</p>
                    <p>Classic Homes — Matham Road, Outer Ring Road Hosur.</p>
                    <p className="mt-1">Factory: Thally road near Swastik packages Karnoor, Hosur — 635110.</p>
                  </div>
                </a>
                <a
                  href="tel:+919486593321"
                  className="flex gap-4 text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm mb-0.5">Call / WhatsApp</p>
                    <p>+91 94865 93321 / +91 85675 87051</p>
                  </div>
                </a>
                <a
                  href="mailto:bluefinengineeringenterprises@gmail.com"
                  className="flex gap-4 text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm mb-0.5">Email</p>
                    <p>bluefinengineeringenterprises@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex-1 min-h-[280px]">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-primary">Get Directions</h3>
              </div>
              <div className="h-64 lg:h-72 w-full">
                <iframe
                  title="Blue Fin Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.68938502533!2d77.8097464!3d12.733675300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70ebc3aaaaab%3A0x39c8851896d6f43e!2sBLUEFIN%20ENGINEERING%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1772262443972!5m2!1sen!2sin"
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
            <div className="bg-blue-900 rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 h-full flex flex-col">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Request a Call Back
                </h2>
                <p className="text-blue-200/80 mt-2 text-sm">
                  Fill in your details and we&apos;ll get back to you shortly.
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
