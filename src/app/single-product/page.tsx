"use client";

import { useState } from "react";
import Link from "next/link";
import BannerCard from "../components/BannerCard";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

const SingleProductPage = () => {
  const [activeTab, setActiveTab] = useState("review");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const productImages = [
    "/img/category/s-p1.jpg",
    "/img/category/s-p1.jpg",
    "/img/category/s-p1.jpg",
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: "Blake Ruiz",
      date: "12th Feb, 2018 at 05:56 pm",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      avatar: "/img/product/review-1.png",
    },
    {
      id: 2,
      name: "Blake Ruiz",
      date: "12th Feb, 2018 at 05:56 pm",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      avatar: "/img/product/review-2.png",
    },
    {
      id: 3,
      name: "Blake Ruiz",
      date: "12th Feb, 2018 at 05:56 pm",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      avatar: "/img/product/review-3.png",
    },
  ];

  const relatedProducts = [
    { id: 1, name: "Product 1", price: 150.0, image: "/img/product/p1.jpg" },
    { id: 2, name: "Product 2", price: 150.0, image: "/img/product/p2.jpg" },
    { id: 3, name: "Product 3", price: 150.0, image: "/img/product/p3.jpg" },
    { id: 4, name: "Product 4", price: 150.0, image: "/img/product/p4.jpg" },
  ];

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specification", label: "Specification" },
    { id: "comments", label: "Comments" },
    { id: "review", label: "Reviews" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BannerCard title="Product Details Page" link="product-details" />

      {/* Product Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative">
                <img
                  src={productImages[currentImage]}
                  alt="Product"
                  className="w-full h-96 object-cover rounded-lg"
                />

                {/* Image Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentImage === index ? "bg-yellow-500" : "bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4 mt-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImage === index
                        ? "border-yellow-500"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Faded SkyBlu Denim Jeans
              </h1>
              <div className="text-2xl font-bold text-yellow-500 mb-6">
                $149.99
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">Category:</span>
                  <Link
                    href="#"
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    Household
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 w-24">Availability:</span>
                  <span className="text-green-600">In Stock</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <label className="text-gray-700 font-semibold">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) =>
                      updateQuantity(parseInt(e.target.value) || 1)
                    }
                    className="w-16 text-center border-none focus:ring-0"
                  />
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                  Add to Cart
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                  💎
                </button>
                <button
                  onClick={toggleFavorite}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isFavorite
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-yellow-500 text-yellow-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === "description" && (
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {`Beryl Cook is one of Britain's most talented and amusing
                  artists. Beryl's pictures feature women of all shapes and
                  sizes enjoying themselves. Born between the two world wars,
                  Beryl Cook eventually left Kendrick School in Reading at the
                  age of 15, where she went to secretarial school and then into
                  an insurance office.`}
                </p>
                <p>
                  {`It is often frustrating to attempt to plan meals that are
                  designed for one. Despite this fact, we are seeing more and
                  more recipe books and Internet websites that are dedicated to
                  the act of cooking for one.`}
                </p>
              </div>
            )}

            {activeTab === "specification" && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        Width
                      </td>
                      <td className="py-3 text-gray-600">128mm</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        Height
                      </td>
                      <td className="py-3 text-gray-600">508mm</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        Depth
                      </td>
                      <td className="py-3 text-gray-600">85mm</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        Weight
                      </td>
                      <td className="py-3 text-gray-600">52gm</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        Quality checking
                      </td>
                      <td className="py-3 text-gray-600">yes</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        Freshness Duration
                      </td>
                      <td className="py-3 text-gray-600">03days</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        When packeting
                      </td>
                      <td className="py-3 text-gray-600">
                        Without touch of hand
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-900">
                        Each Box contains
                      </td>
                      <td className="py-3 text-gray-600">60pcs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "comments" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Comments
                  </h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6"
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">
                                {review.name}
                              </h4>
                              <button className="text-yellow-600 hover:text-yellow-700 text-sm">
                                Reply
                              </button>
                            </div>
                            <p className="text-gray-500 text-sm mb-2">
                              {review.date}
                            </p>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Post a comment
                  </h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    />
                    <div className="text-right">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "review" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">
                        Overall
                      </h5>
                      <div className="text-3xl font-bold text-yellow-500 mb-1">
                        4.0
                      </div>
                      <div className="text-sm text-gray-500">(03 Reviews)</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Based on 3 Reviews
                      </h3>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">
                              {stars} Star
                            </span>
                            <div className="flex-1 flex items-center">
                              {renderStars(stars)}
                            </div>
                            <span className="text-sm text-gray-500">01</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6"
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {review.name}
                            </h4>
                            <div className="flex items-center gap-2 mb-2">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Add a Review
                  </h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">Your Rating:</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="text-2xl text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Outstanding</p>
                  </div>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Review"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    />
                    <div className="text-right">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Products
            </h2>
            <p className="text-gray-600">You may like these products also</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
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
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
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
                  <h6 className="text-sm font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h6>
                  <div className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductPage;
