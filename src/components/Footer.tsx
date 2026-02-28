import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 font-sans">
      

      {/* Bottom Copyright Bar */}
      <div className="bg-[#2D3675] py-5 sm:py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-white text-xs tracking-wider text-center md:text-left">
          <p>©2025. All Rights Reserved.</p>
          <p>
            Powered By <span className="text-red-500 font-bold ml-1">BLUEFIN
            ENGINEERING ENTERPRISES</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;