"use client";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729154873/herllarn_qih5pm.jpg",
    },
    {
      id: 2,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729154873/empire_dyrstq.jpg",
    },
    {
      id: 3,

      imageUrl:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729166152/b0790802-7087-47bc-bc6c-839977974baf_h2h9gb.jpg",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* Slide container */}
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[400px] flex-shrink-0 flex items-center justify-center relative"
          >
            <img
              src={slide.imageUrl}
              alt={slide.text}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
          </div>
        ))}
      </div>

      {/* Next/Prev buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8250;
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
