"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    country: "",
    phone: "+91",
    people: "",
    eventType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! We will contact you soon.");
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get in <span className="text-yellow-400">Touch</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 space-y-6"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
          </div>

          {/* Address & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
          </div>

          {/* Phone & Number of People */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <select
              name="people"
              value={formData.people}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            >
              <option value="">Number of People</option>
              <option value="0-50">0-50</option>
              <option value="50-100">50-100</option>
              <option value="100-200">100-200</option>
              <option value="200+">200+</option>
            </select>
          </div>

          {/* Event Type */}
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          >
            <option value="">Type of Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Haldi">Haldi</option>
            <option value="Corporate">Corporate</option>
            <option value="Other">Other</option>
          </select>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
