import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Image from "next/image";

const Contact = () => {
  return (
    <footer className="bg-white pt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">

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
          <h2 className="text-primary font-bold text-lg mb-6">
            Blue Fin Engineering Enterprises
          </h2>
          <p className="text-[#2D3675] font-semibold mb-4 text-sm">Follow Us :</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 border border-gray-200 rounded-full text-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Reach Us */}
        <div className="text-[#2D3675]">
          <h3 className="font-bold text-xl mb-6">Reach Us</h3>
          <div className="space-y-4 text-sm leading-relaxed text-gray-600">
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
        <div className="text-[#2D3675]">
          <h3 className="font-bold text-xl mb-6">Get Directions</h3>
          {/* Placeholder for Map or Link */}

          <div className="w-full h-32 bg-gray-50 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.68938502533!2d77.8097464!3d12.733675300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70ebc3aaaaab%3A0x39c8851896d6f43e!2sBLUEFIN%20ENGINEERING%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1772262443972!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Contact;