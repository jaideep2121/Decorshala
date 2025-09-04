"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const images = [
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/images9.png",
];

const Navbar = () => {
  const [current, setCurrent] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState({});
  const [fadeIn, setFadeIn] = useState(false);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fade-in navbar on page load
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const toggleSubMenu = (key) => {
    setMobileSubMenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // WhatsApp number & message
  const phoneNumber = "918287701077"; // replace with your number
  const message = encodeURIComponent("I want to enquire for an event");

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index}`}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl shadow-lg
                    bg-white/95 md:bg-white/90 backdrop-blur-md border border-yellow-400
                    transition-all duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex justify-between items-center px-6 h-16 text-gray-800">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/G.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg">Decorshala</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li className="hover:text-yellow-500 transition cursor-pointer border-b-2 border-transparent hover:border-yellow-400">
              Home
            </li>

            {/* Wedding Planner Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-yellow-500 flex items-center border-b-2 border-transparent group-hover:border-yellow-400 pb-1">
                Wedding Planner <span className="ml-1">▼</span>
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-lg border border-yellow-400 
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="divide-y divide-gray-200">
                  <li>
                    <h4 className="px-4 py-2 font-semibold text-gray-700 bg-yellow-50 border-b border-yellow-200">Wedding Styles</h4>
                    <ul>
                      {["Destination Wedding", "Luxury Weddings", "Beach Weddings"].map((item, i) => (
                        <li key={i} className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <h4 className="px-4 py-2 font-semibold text-gray-700 bg-yellow-50 border-b border-yellow-200">Theme Weddings</h4>
                    <ul>
                      {["Palace Weddings", "Royal Weddings"].map((item, i) => (
                        <li key={i} className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-yellow-500 border-b-2 border-transparent group-hover:border-yellow-400 pb-1">
                Services ▼
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-lg border border-yellow-400 
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="divide-y divide-gray-200">
                  <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">Wedding Planning</li>
                  <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">Birthday Party Decoration</li>
                  <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">Anniversary Party Planner</li>
                  <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">Government Events</li>

                  {/* Corporate Events Nested */}
                  <li className="relative group px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">
                    <div className="flex justify-between items-center">Corporate Events <span>▶</span></div>
                    <div className="absolute top-0 left-full w-64 bg-white shadow-lg rounded-lg border border-yellow-400
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <ul className="divide-y divide-gray-200">
                        <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">Product Launch</li>
                        <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">College & University Events</li>
                      </ul>
                    </div>
                  </li>

                  <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer">Artist Management</li>
                </ul>
              </div>
            </li>

            <li className="hover:text-yellow-500 transition cursor-pointer border-b-2 border-transparent hover:border-yellow-400">About</li>
            <li className="hover:text-yellow-500 transition cursor-pointer border-b-2 border-transparent hover:border-yellow-400">Gallery</li>
            <li className="hover:text-yellow-500 transition cursor-pointer border-b-2 border-transparent hover:border-yellow-400">Contact</li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-2xl z-50 relative">
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white text-black border-t border-yellow-400 overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul>
            {/* Top-level items */}
            {["Home", "About", "Gallery", "Contact"].map((item, i) => (
              <li
                key={i}
                className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}

            {/* Wedding Planner Mobile */}
            <li className="px-4 py-2 cursor-pointer">
              <div
                onClick={() => toggleSubMenu("wedding")}
                className="flex justify-between items-center hover:text-yellow-600 transition-colors duration-300"
              >
                Wedding Planner ▼
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 origin-top ${
                  mobileSubMenu.wedding ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="pl-4 mt-2">
                  {["Destination Wedding", "Luxury Weddings", "Beach Weddings", "Palace Weddings", "Royal Weddings"].map(
                    (item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </li>

            {/* Services Mobile */}
            <li className="px-4 py-2 cursor-pointer">
              <div
                onClick={() => toggleSubMenu("services")}
                className="flex justify-between items-center hover:text-yellow-600 transition-colors duration-300"
              >
                Services ▼
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 origin-top ${
                  mobileSubMenu.services ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <ul className="pl-4 mt-2">
                  {["Wedding Planning","Birthday Party Decoration","Anniversary Party Planner","Government Events"].map(
                    (item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
                      >
                        {item}
                      </li>
                    )
                  )}

                  {/* Nested Corporate Events */}
                  <li className="px-4 py-2 cursor-pointer">
                    <div
                      onClick={() => toggleSubMenu("corporate")}
                      className="flex justify-between items-center hover:text-yellow-600 transition-colors duration-300"
                    >
                      Corporate Events ▶
                    </div>
                    <div
                      className={`overflow-hidden transition-[max-height] duration-500 origin-top ${
                        mobileSubMenu.corporate ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 mt-2">
                        {["Product Launch","College & University Events"].map((item, i) => (
                          <li
                            key={i}
                            className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>

                  <li className="px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition-colors duration-300 cursor-pointer">
                    Artist Management
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section Text */}
      <div className="flex items-center justify-center h-full relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-2xl leading-tight">
          Welcome to <span className="text-yellow-400">Decorshala</span>
        </h1>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Navbar;
