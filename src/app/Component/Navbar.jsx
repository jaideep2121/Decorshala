"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
  const [mobileSubMenu, setMobileSubMenu] = useState({}); // track open nested menus

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleSubMenu = (key) => {
    setMobileSubMenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
          <Image src={img} alt={`Slide ${index}`} fill priority={index === 0} className="object-cover" />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md border border-yellow-400">
        <div className="flex justify-between items-center px-6 h-16 text-gray-800">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/images/G.png" alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-lg">Decorshala</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li className="hover:text-yellow-500 transition cursor-pointer border-b-2 border-transparent hover:border-yellow-400">Home</li>

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
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-2xl">
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-yellow-400 overflow-hidden transition-max-height duration-500 ease-in-out ${mobileOpen ? "max-h-[1000px]" : "max-h-0"}`}>
          <ul>
            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Home</li>

            {/* Wedding Planner Mobile */}
            <li className="px-4 py-2 cursor-pointer">
              <div onClick={() => toggleSubMenu("wedding")} className="flex justify-between items-center">
                Wedding Planner ▼
              </div>
              <ul className={`pl-4 mt-2 overflow-hidden transition-max-height duration-500 ${mobileSubMenu.wedding ? "max-h-[500px]" : "max-h-0"}`}>
                {["Destination Wedding", "Luxury Weddings", "Beach Weddings", "Palace Weddings", "Royal Weddings"].map((item, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">{item}</li>
                ))}
              </ul>
            </li>

            {/* Services Mobile */}
            <li className="px-4 py-2 cursor-pointer">
              <div onClick={() => toggleSubMenu("services")} className="flex justify-between items-center">
                Services ▼
              </div>
              <ul className={`pl-4 mt-2 overflow-hidden transition-max-height duration-500 ${mobileSubMenu.services ? "max-h-[1000px]" : "max-h-0"}`}>
                {["Wedding Planning","Birthday Party Decoration","Anniversary Party Planner","Government Events"].map((item, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">{item}</li>
                ))}

                {/* Nested Corporate Events */}
                <li className="px-4 py-2 cursor-pointer">
                  <div onClick={() => toggleSubMenu("corporate")} className="flex justify-between items-center">
                    Corporate Events ▶
                  </div>
                  <ul className={`pl-4 mt-2 overflow-hidden transition-max-height duration-500 ${mobileSubMenu.corporate ? "max-h-[500px]" : "max-h-0"}`}>
                    {["Product Launch","College & University Events"].map((item, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </li>

                <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Artist Management</li>
              </ul>
            </li>

            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">About</li>
            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Gallery</li>
            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section Text */}
      <div className="flex items-center justify-center h-full relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-2xl leading-tight">
          Welcome to <span className="text-yellow-400">Decorshala</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;


