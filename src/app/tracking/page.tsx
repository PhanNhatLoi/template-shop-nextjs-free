"use client";

import { useState } from "react";
import BannerCard from "../components/BannerCard";

const TrackingPage = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tracking logic here
    console.log("Tracking order:", { orderId, email });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BannerCard title="Order Tracking" link="Order Tracking" />

      {/* Tracking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed">
                {`To track your order please enter your Order ID in the box below
                and press the "Track" button. This was given to you on your
                receipt and in the confirmation email you should have received.`}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="order"
                  name="order"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Order ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Billing Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Track Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackingPage;
