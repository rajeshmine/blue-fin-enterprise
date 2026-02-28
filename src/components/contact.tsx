import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Image from "next/image";

const Contact = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 sm:pt-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* Replace with your actual logo img tag */}
            <div className="text-[#2D3675] text-5xl font-bold">
              <Image
                src="/images/logo.png"
                alt="Blue Fin Logo"
                width={60}
                height={60}
                className="mb-4"
              />
            </div>
          </div>
          <h2 className="text-primary font-bold text-base sm:text-lg mb-4 sm:mb-6">
            Blue Fin Engineering Enterprises
          </h2>
          <p className="text-[#2D3675] dark:text-gray-300 font-semibold mb-4 text-sm">Follow Us :</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 border border-gray-200 dark:border-gray-600 rounded-full text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Reach Us */}
        <div className="text-[#2D3675] dark:text-gray-300">
          <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Reach Us</h3>
          <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              Classic Homes — Matham Road, Outer Ring<br />Road Hosur.
            </p>
            <p>
              Factory: Thally road near Swastik packages<br />Karnoor, Hosur — 635110.
            </p>
            <p className="font-medium">
              Call / WhatsApp: +91 94865 93321 / +91 85675<br />87051
            </p>
            <p className="lowercase">bluefinengineeringenterprises@gmail.com</p>
          </div>
        </div>

        {/* Column 3: Get Directions */}
        <div className="text-[#2D3675] dark:text-gray-300">
          <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Get Directions</h3>
          {/* Placeholder for Map or Link */}

          <div className="w-full min-h-[200px] sm:min-h-[250px] bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.68938502533!2d77.8097464!3d12.733675300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70ebc3aaaaab%3A0x39c8851896d6f43e!2sBLUEFIN%20ENGINEERING%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1772262443972!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0, minHeight: "200px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Blue Fin Location Map"></iframe>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Contact;