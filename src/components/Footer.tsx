import React from "react";
import { FOOTER } from "@/lib/content";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 font-sans">
      <div className="bg-[#2D3675] py-5 sm:py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-white text-xs tracking-wider text-center md:text-left">
          <p>{FOOTER.copyright}</p>
          <p>
            {FOOTER.poweredBy} <span className="text-red-500 font-bold ml-1">{FOOTER.companyName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;