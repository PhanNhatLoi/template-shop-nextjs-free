"use client";

import { useState, useEffect } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "left"
  );

  const slides = [
    {
      title: "Nike New Collection!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: "/img/banner/banner-img.png",
    },
    {
      title: "Adidas New Collection!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: "/img/banner/banner-img.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setSlideDirection("left");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection("right");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative min-h-screen lg:h-[80vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/img/banner/banner-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]">
          {/* Content */}
          <div className="text-white relative">
            <div
              key={currentSlide}
              className="transition-all duration-500 ease-in-out animate-fadeIn"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                {slides[currentSlide].title.split(" ").map((word, index) => (
                  <span key={index}>
                    {word}
                    {index === 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-base md:text-lg mb-6 lg:mb-8 text-gray-200 max-w-lg">
                {slides[currentSlide].description}
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium uppercase hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block relative overflow-hidden">
            <div
              key={currentSlide}
              className={`transition-transform duration-700 ease-in-out ${
                slideDirection === "left"
                  ? "animate-slideInFromRight"
                  : "animate-slideInFromLeft"
              }`}
            >
              <img
                src={slides[currentSlide].image}
                alt="Banner"
                className="w-full max-w-3xl mx-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 z-20 hover:scale-110 active:scale-95"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 z-20 hover:scale-110 active:scale-95"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setSlideDirection(index > currentSlide ? "left" : "right");
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
