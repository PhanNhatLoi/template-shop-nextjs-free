"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/img/product/p1.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: true, // Mặc định yêu thích
  },
  {
    id: 2,
    image: "/img/product/p2.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: false,
  },
  {
    id: 3,
    image: "/img/product/p3.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: true, // Mặc định yêu thích
  },
  {
    id: 4,
    image: "/img/product/p4.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: false,
  },
  {
    id: 5,
    image: "/img/product/p5.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: false,
  },
  {
    id: 6,
    image: "/img/product/p6.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: true, // Mặc định yêu thích
  },
  {
    id: 7,
    image: "/img/product/p7.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: false,
  },
  {
    id: 8,
    image: "/img/product/p8.jpg",
    name: "addidas New Hammer sole for Sports person",
    price: "$150.00",
    oldPrice: "$210.00",
    isFavorite: false,
  },
];

const productSlides = [
  {
    title: "Latest Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    products: products,
  },
  {
    title: "Coming Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    products: [...products.slice(5), ...products.slice(0, 5)],
  },
];

const ProductCard = ({
  id,
  image,
  name,
  price,
  oldPrice,
  isFavorite,
  onToggleFavorite,
}: {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}) => {
  return (
    <div className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 md:top-4 right-3 md:right-4">
          <button
            onClick={() => onToggleFavorite(id)}
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white hover:bg-yellow-400 hover:text-white"
            }`}
          >
            <svg
              className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
                isFavorite ? "scale-110" : "scale-100"
              }`}
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-3 md:top-4 left-3 md:left-4">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Sale
          </span>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center space-x-2 mb-3 md:mb-4">
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">
            {price}
          </span>
          <span className="text-gray-400 line-through text-sm md:text-base">
            {oldPrice}
          </span>
        </div>
        <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductArea = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([1, 3, 6]); // Mặc định yêu thích sản phẩm 1, 3, 6

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + productSlides.length) % productSlides.length
    );
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="bg-white relative py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div key={currentSlide} className="animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {productSlides[currentSlide].title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {productSlides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div
            key={currentSlide}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn"
          >
            {productSlides[currentSlide].products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-10 transform -translate-y-1/2 w-12 h-12 bg-gray-500 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
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
            className="absolute right-4 top-10 transform -translate-y-1/2 w-12 h-12 bg-gray-500 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
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
      </div>
    </section>
  );
};

export default ProductArea;
