"use client";

import { useState } from "react";
import Link from "next/link";
import BannerCard from "../components/BannerCard";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Minimalistic shop for multipurpose use",
      price: 360.0,
      quantity: 1,
      image: "/img/cart.jpg",
    },
    {
      id: 2,
      name: "Minimalistic shop for multipurpose use",
      price: 360.0,
      quantity: 1,
      image: "/img/cart.jpg",
    },
    {
      id: 3,
      name: "Minimalistic shop for multipurpose use",
      price: 360.0,
      quantity: 1,
      image: "/img/cart.jpg",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [shippingCountry, setShippingCountry] = useState("1");
  const [shippingState, setShippingState] = useState("1");
  const [postcode, setPostcode] = useState("");
  const [selectedShipping, setSelectedShipping] = useState(
    "Local Delivery: $2.00"
  );

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getShippingCost = () => {
    const shippingCosts: { [key: string]: number } = {
      "Flat Rate: $5.00": 5.0,
      "Free Shipping": 0.0,
      "Flat Rate: $10.00": 10.0,
      "Local Delivery: $2.00": 2.0,
    };
    return shippingCosts[selectedShipping] || 0;
  };

  const getTotal = () => {
    return getSubtotal() + getShippingCost();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BannerCard title="Shopping Cart" link="Cart" />

      {/* Cart Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Cart Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Product
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Total
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg mr-4"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-semibold text-gray-900">
                          ${item.price.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center border border-gray-300 rounded-lg w-24">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="w-8 text-center border-none focus:ring-0"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Actions */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                  Update Cart
                </button>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="p-6 border-t border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Shipping Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Shipping Options
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Flat Rate: $5.00",
                      "Free Shipping",
                      "Flat Rate: $10.00",
                      "Local Delivery: $2.00",
                    ].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value={option}
                          checked={selectedShipping === option}
                          onChange={(e) => setSelectedShipping(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    <select
                      value={shippingCountry}
                      onChange={(e) => setShippingCountry(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="1">Bangladesh</option>
                      <option value="2">India</option>
                      <option value="4">Pakistan</option>
                    </select>

                    <select
                      value={shippingState}
                      onChange={(e) => setShippingState(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="1">Select a State</option>
                      <option value="2">Select a State</option>
                      <option value="4">Select a State</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Postcode/Zipcode"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />

                    <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                      Update Details
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Order Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        ${getSubtotal().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        ${getShippingCost().toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-gray-900">
                          Total
                        </span>
                        <span className="text-lg font-semibold text-gray-900">
                          ${getTotal().toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link
                      href="/"
                      className="block w-full px-6 py-3 bg-gray-500 text-white text-center rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                    <Link
                      href="/checkout"
                      className="block w-full px-6 py-3 bg-yellow-500 text-white text-center rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
