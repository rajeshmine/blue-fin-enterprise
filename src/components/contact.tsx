import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { CONTACT } from "@/lib/content";

const Contact = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 sm:pt-16 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 min-w-0">

        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <div className="text-[#2D3675] text-5xl font-bold">
              <Image
                src={CONTACT.logoPath}
                alt={`${CONTACT.companyName} Logo`}
                width={60}
                height={60}
                className="mb-4"
              />
            </div>
          </div>
          <h2 className="text-primary font-bold text-base sm:text-lg mb-4 sm:mb-6">
            {CONTACT.companyName}
          </h2>
          {/* <p className="text-[#2D3675] dark:text-gray-300 font-semibold mb-4 text-sm">{CONTACT.followUs}</p> */}
          {/* <div className="flex gap-3">
            {[
              { Icon: Facebook, bg: "bg-[#1877F2]/10", color: "text-[#1877F2]", ring: "ring-[#1877F2]/20" },
              { Icon: Instagram, bg: "bg-[#E4405F]/10", color: "text-[#E4405F]", ring: "ring-[#E4405F]/20" },
              { Icon: Twitter, bg: "bg-[#1DA1F2]/10", color: "text-[#1DA1F2]", ring: "ring-[#1DA1F2]/20" },
              { Icon: Linkedin, bg: "bg-[#0A66C2]/10", color: "text-[#0A66C2]", ring: "ring-[#0A66C2]/20" },
            ].map(({ Icon, bg, color, ring }, index) => (
              <a
                key={index}
                href="#"
                className={`p-2.5 rounded-xl ${bg} ring-1 ${ring} ${color} hover:scale-110 transition-all duration-300`}
              >
                <Icon size={20} strokeWidth={2} />
              </a>
            ))}
          </div> */}
        </div>

        {/* Column 2: Reach Us */}
        <div className="text-[#2D3675] dark:text-gray-300">
          <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">{CONTACT.reachUs}</h3>
          <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              {CONTACT.address.officeLine1}<br />{CONTACT.address.officeLine2}
            </p>
            <p>
              {CONTACT.address.factoryLine1}<br />{CONTACT.address.factoryLine2}
            </p>
            <p className="font-medium">
              <a href={CONTACT.telLink} className="hover:text-accent transition-colors">{CONTACT.phone}</a>
              {" · "}
              <a
                href={`https://wa.me/${CONTACT.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline transition-colors"
              >
                WhatsApp
              </a>
            </p>
            <p className="lowercase">{CONTACT.email}</p>
          </div>
        </div>

        {/* Column 3: Get Directions */}
        <div className="text-[#2D3675] dark:text-gray-300">
          <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">{CONTACT.getDirections}</h3>

          <div className="w-full min-w-0 min-h-[200px] sm:min-h-[250px] bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
            <iframe src={CONTACT.mapEmbedUrl} width="100%" height="250" style={{ border: 0, minHeight: "200px", maxWidth: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${CONTACT.companyName} Location Map`}></iframe>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Contact;