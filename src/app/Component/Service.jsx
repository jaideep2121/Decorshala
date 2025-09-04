"use client";
import React from "react";
import Image from "next/image";

const services = [
  { title: "Wedding Decoration", img: "/images/image2.jpg", desc: "Elegant and memorable wedding setups tailored to your dream." },
  { title: "Birthday Parties", img: "/images/birthday.jpg", desc: "Fun and colorful birthday decorations for all ages." },
  { title: "Corporate Events", img: "/images/coporate.jpg", desc: "Professional setups for launches, meetings, and corporate parties." },
  { title: "Theme Events", img: "/images/event.jpg", desc: "Creative theme-based decorations to wow your guests." },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">
          Our <span className="text-yellow-400">Services</span>
        </h2>

        {/* Grid for sm and above */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Horizontal scroll for mobile */}
        <div className="sm:hidden mt-6 overflow-x-auto flex gap-4">
          {services.map((service, index) => (
            <div key={index} className="min-w-[250px]">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Service Card
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative h-48 sm:h-56 w-full">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-4 sm:p-6 text-center">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServicesSection;
