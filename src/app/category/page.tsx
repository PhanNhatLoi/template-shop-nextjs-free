"use client";

import { useState } from "react";
import Link from "next/link";
import BannerCard from "../components/BannerCard";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  isFavorite: boolean;
}

interface Category {
  id: string;
  name: string;
  count: number;
  children?: Category[];
}

const CategoryPage = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("default");
  const [showPerPage, setShowPerPage] = useState(12);

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "addidas New Hammer sole for Sports person",
      price: 150.0,
      originalPrice: 210.0,
      image: "/img/product/p1.jpg",
      isFavorite: false,
    },
    {
      id: 2,
      name: "addidas New Hammer sole for Sports person",
      price: 150.0,
      originalPrice: 210.0,
      image: "/img/product/p2.jpg",
      isFavorite: false,
    },
    {
      id: 3,
      name: "addidas New Hammer sole for Sports person",
      price: 150.0,
      originalPrice: 210.0,
      image: "/img/product/p3.jpg",
      isFavorite: false,
    },
    {
      id: 4,
      name: "addidas New Hammer sole for Sports person",
      price: 150.0,
      originalPrice: 210.0,
      image: "/img/product/p4.jpg",
      isFavorite: false,
    },
    {
      id: 5,
      name: "addidas New Hammer sole for Sports person",
      price: 150.0,
      originalPrice: 210.0,
      image: "/img/product/p5.jpg",
      isFavorite: false,
    },
    {
      id: 6,
      name: "addidas New Hammer sole for Sports person",
      price: 150.0,
      originalPrice: 210.0,
      image: "/img/product/p6.jpg",
      isFavorite: false,
    },
  ]);

  const categories: Category[] = [
    {
      id: "fruitsVegetable",
      name: "Fruits and Vegetables",
      count: 53,
      children: [
        { id: "frozenFish", name: "Frozen Fish", count: 13 },
        { id: "driedFish", name: "Dried Fish", count: 9 },
        { id: "freshFish", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives", name: "Meat Alternatives", count: 1 },
        { id: "meat", name: "Meat", count: 11 },
      ],
    },
    {
      id: "meatFish",
      name: "Meat and Fish",
      count: 53,
      children: [
        { id: "frozenFish2", name: "Frozen Fish", count: 13 },
        { id: "driedFish2", name: "Dried Fish", count: 9 },
        { id: "freshFish2", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives2", name: "Meat Alternatives", count: 1 },
        { id: "meat2", name: "Meat", count: 11 },
      ],
    },
    {
      id: "cooking",
      name: "Cooking",
      count: 53,
      children: [
        { id: "frozenFish3", name: "Frozen Fish", count: 13 },
        { id: "driedFish3", name: "Dried Fish", count: 9 },
        { id: "freshFish3", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives3", name: "Meat Alternatives", count: 1 },
        { id: "meat3", name: "Meat", count: 11 },
      ],
    },
    {
      id: "beverages",
      name: "Beverages",
      count: 24,
      children: [
        { id: "frozenFish4", name: "Frozen Fish", count: 13 },
        { id: "driedFish4", name: "Dried Fish", count: 9 },
        { id: "freshFish4", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives4", name: "Meat Alternatives", count: 1 },
        { id: "meat4", name: "Meat", count: 11 },
      ],
    },
    {
      id: "homeClean",
      name: "Home and Cleaning",
      count: 53,
      children: [
        { id: "frozenFish5", name: "Frozen Fish", count: 13 },
        { id: "driedFish5", name: "Dried Fish", count: 9 },
        { id: "freshFish5", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives5", name: "Meat Alternatives", count: 1 },
        { id: "meat5", name: "Meat", count: 11 },
      ],
    },
    { id: "pestControl", name: "Pest Control", count: 24 },
    {
      id: "officeProduct",
      name: "Office Products",
      count: 77,
      children: [
        { id: "frozenFish6", name: "Frozen Fish", count: 13 },
        { id: "driedFish6", name: "Dried Fish", count: 9 },
        { id: "freshFish6", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives6", name: "Meat Alternatives", count: 1 },
        { id: "meat6", name: "Meat", count: 11 },
      ],
    },
    {
      id: "beauttyProduct",
      name: "Beauty Products",
      count: 65,
      children: [
        { id: "frozenFish7", name: "Frozen Fish", count: 13 },
        { id: "driedFish7", name: "Dried Fish", count: 9 },
        { id: "freshFish7", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives7", name: "Meat Alternatives", count: 1 },
        { id: "meat7", name: "Meat", count: 11 },
      ],
    },
    {
      id: "healthProduct",
      name: "Health Products",
      count: 29,
      children: [
        { id: "frozenFish8", name: "Frozen Fish", count: 13 },
        { id: "driedFish8", name: "Dried Fish", count: 9 },
        { id: "freshFish8", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives8", name: "Meat Alternatives", count: 1 },
        { id: "meat8", name: "Meat", count: 11 },
      ],
    },
    { id: "petCare", name: "Pet Care", count: 29 },
    {
      id: "homeAppliance",
      name: "Home Appliances",
      count: 15,
      children: [
        { id: "frozenFish9", name: "Frozen Fish", count: 13 },
        { id: "driedFish9", name: "Dried Fish", count: 9 },
        { id: "freshFish9", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives9", name: "Meat Alternatives", count: 1 },
        { id: "meat9", name: "Meat", count: 11 },
      ],
    },
    {
      id: "babyCare",
      name: "Baby Care",
      count: 48,
      children: [
        { id: "frozenFish10", name: "Frozen Fish", count: 13 },
        { id: "driedFish10", name: "Dried Fish", count: 9 },
        { id: "freshFish10", name: "Fresh Fish", count: 17 },
        { id: "meatAlternatives10", name: "Meat Alternatives", count: 1 },
        { id: "meat10", name: "Meat", count: 11 },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleFavorite = (productId: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  const brands = [
    { id: "apple", name: "Apple", count: 29 },
    { id: "asus", name: "Asus", count: 29 },
    { id: "gionee", name: "Gionee", count: 19 },
    { id: "micromax", name: "Micromax", count: 19 },
    { id: "samsung", name: "Samsung", count: 19 },
  ];

  const colors = [
    { id: "black", name: "Black", count: 29 },
    { id: "balckleather", name: "Black Leather", count: 29 },
    { id: "blackred", name: "Black with red", count: 19 },
    { id: "gold", name: "Gold", count: 19 },
    { id: "spacegrey", name: "Spacegrey", count: 19 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BannerCard title="Shop Category page" link="Fashon Category" />

      {/* Category Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Browse Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full text-left flex items-center justify-between py-2 hover:text-yellow-600 transition-colors"
                      >
                        <span className="flex items-center">
                          {category.children && (
                            <span
                              className={`mr-2 transition-transform ${
                                expandedCategories.includes(category.id)
                                  ? "rotate-90"
                                  : ""
                              }`}
                            >
                              ▶
                            </span>
                          )}
                          {category.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          ({category.count})
                        </span>
                      </button>

                      {category.children &&
                        expandedCategories.includes(category.id) && (
                          <ul className="ml-6 mt-2 space-y-1">
                            {category.children.map((child) => (
                              <li key={child.id}>
                                <Link
                                  href="#"
                                  className="block py-1 text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                                >
                                  {child.name}{" "}
                                  <span className="text-gray-400">
                                    ({child.count})
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Product Filters
                </h3>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Brands</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand.id} className="flex items-center">
                        <input
                          type="radio"
                          name="brand"
                          value={brand.id}
                          checked={selectedBrand === brand.id}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          {brand.name}{" "}
                          <span className="text-gray-400">({brand.count})</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Color</h4>
                  <div className="space-y-2">
                    {colors.map((color) => (
                      <label key={color.id} className="flex items-center">
                        <input
                          type="radio"
                          name="color"
                          value={color.id}
                          checked={selectedColor === color.id}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          {color.name}{" "}
                          <span className="text-gray-400">({color.count})</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Price</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>Price: ${priceRange[0]}</span>
                      <span>to</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Filter Bar */}
              <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="default">Default sorting</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>

                    <select
                      value={showPerPage}
                      onChange={(e) => setShowPerPage(parseInt(e.target.value))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value={12}>Show 12</option>
                      <option value={24}>Show 24</option>
                      <option value={48}>Show 48</option>
                    </select>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors">
                      ←
                    </button>
                    <button className="px-3 py-2 bg-yellow-500 text-white rounded-lg">
                      1
                    </button>
                    <button className="px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors">
                      2
                    </button>
                    <button className="px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors">
                      3
                    </button>
                    <span className="px-3 py-2 text-gray-600">...</span>
                    <button className="px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors">
                      6
                    </button>
                    <button className="px-3 py-2 text-gray-600 hover:text-yellow-600 transition-colors">
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden group"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Product Actions */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                            🛍️
                          </button>
                          <button
                            onClick={() => toggleFavorite(product.id)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                              product.isFavorite
                                ? "bg-red-500 text-white"
                                : "bg-white hover:bg-red-500 hover:text-white"
                            }`}
                          >
                            ❤️
                          </button>
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                            🔄
                          </button>
                          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                            👁️
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h6 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h6>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
