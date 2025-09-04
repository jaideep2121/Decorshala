"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Fake reviews data
const reviews = [
  { name: "Anita Sharma", photo: "/images/im.jpg", rating: 5, comment: "Decorshala made my wedding absolutely magical! Every detail was perfect." },
  { name: "Rohan Verma", photo: "/images/im.jpg", rating: 4.5, comment: "Highly professional team. Our corporate event looked stunning!" },
  { name: "Priya Kapoor", photo: "/images/im.jpg", rating: 5, comment: "Loved the birthday party setup for my son. Kids and adults were amazed!" },
  { name: "Vikram Singh", photo: "/images/im.jpg", rating: 4, comment: "Great creativity and attention to detail. Definitely recommend Decorshala." },
];

// Dynamic stats
const statsData = [
  { label: "Projects Completed", value: 500 },
  { label: "Years of Experience", value: 65 },
  { label: "Happy Clients", value: 450 },
  { label: "Events Covered", value: 300 },
];

const ReviewSection = () => {
  const [stats, setStats] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map((num, i) => (num < statsData[i].value ? num + Math.ceil(statsData[i].value / 100) : statsData[i].value)));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400 inline-block" />);
      else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline-block" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400 inline-block" />);
    }
    return stars;
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Clients Love Us</span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {statsData.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">{stats[i]}+</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews Grid - swipeable on mobile */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 hidden md:block">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} renderStars={renderStars} />
          ))}
        </div>

        {/* Mobile Swipeable Reviews */}
        <div className="md:hidden overflow-x-auto flex gap-4 pb-4">
          {reviews.map((review, index) => (
            <div key={index} className="min-w-[250px]">
              <ReviewCard review={review} renderStars={renderStars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, renderStars }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
    <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-yellow-400">
      <Image src={review.photo} alt={review.name} fill className="object-cover" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
    <div className="mb-3">{renderStars(review.rating)}</div>
    <p className="text-gray-600 text-sm">{review.comment}</p>
  </div>
);

export default ReviewSection;
