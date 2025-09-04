"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/images/G.png"
              alt="Decorshala Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-yellow-400 ml-2">Decorshala</span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            Transforming events into unforgettable memories. We specialize in weddings, birthdays, corporate events, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            {["Home", "Services", "Gallery", "About", "Contact"].map((link, i) => (
              <li key={i} className="hover:text-yellow-400 cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="mb-2 text-sm sm:text-base">
            Phone: <a href="tel:+918287701077" className="hover:text-yellow-400">+91 82877 01077</a>
          </p>
          <p className="mb-2 text-sm sm:text-base">
            Email: <a href="mailto:info@decorshala.com" className="hover:text-yellow-400">info@decorshala.com</a>
          </p>
          <p className="mb-2 text-sm sm:text-base">
            Address: 123 Event Street, Delhi, India
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-yellow-400 text-gray-900 p-3 rounded-full hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-gray-900 p-3 rounded-full hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/918287701077"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 p-3 rounded-full hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Decorshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
