"use client";

import { useState, useEffect } from "react";

const ExclusiveDeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      image: "/img/product/p1.jpg",
      name: "Nike New Collection",
      price: "$150.00",
      oldPrice: "$210.00",
    },
    {
      id: 2,
      image: "/img/product/p2.jpg",
      name: "Adidas Sports Shoes",
      price: "$180.00",
      oldPrice: "$250.00",
    },
    {
      id: 3,
      image: "/img/product/p3.jpg",
      name: "Puma Running Shoes",
      price: "$120.00",
      oldPrice: "$180.00",
    },
    {
      id: 4,
      image: "/img/product/p4.jpg",
      name: "Reebok Classic",
      price: "$90.00",
      oldPrice: "$140.00",
    },
  ];

  useEffect(() => {
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Exclusive Hot Deal Ends Soon!
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              Who are in extremely love with eco friendly system. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Days</div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Hours</div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Minutes</div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Seconds</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
              Shop Now
            </button>
          </div>

          {/* Product Slider */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div
                key={currentSlide}
                className="transition-all duration-500 ease-in-out"
              >
                <div className="relative">
                  <img
                    src={products[currentSlide].image}
                    alt={products[currentSlide].name}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {products[currentSlide].name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl md:text-2xl font-bold text-yellow-400">
                        {products[currentSlide].price}
                      </span>
                      <span className="text-gray-300 line-through text-sm md:text-base">
                        {products[currentSlide].oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 z-10"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-800"
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 z-10"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-800"
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
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-yellow-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeal;
