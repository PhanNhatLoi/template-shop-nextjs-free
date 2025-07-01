"use client";

import { useState } from "react";
import Link from "next/link";
import BannerCard from "../components/BannerCard";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const CheckoutPage = () => {
  const [isReturningCustomer, setIsReturningCustomer] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    country: "1",
    address1: "",
    address2: "",
    city: "",
    district: "1",
    postcode: "",
    orderNotes: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [couponCode, setCouponCode] = useState("");

  const orderItems: OrderItem[] = [
    { id: 1, name: "Fresh Blackberry", quantity: 2, price: 360.0 },
    { id: 2, name: "Fresh Tomatoes", quantity: 2, price: 360.0 },
    { id: 3, name: "Fresh Brocoli", quantity: 2, price: 360.0 },
  ];

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50.0;
  const total = subtotal + shipping;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLoginInputChange = (field: string, value: string | boolean) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout form submitted:", { formData, orderItems, total });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BannerCard title="Checkout" link="Checkout" />

      {/* Checkout Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {/* Returning Customer */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Returning Customer?
                  <button
                    onClick={() => setIsReturningCustomer(!isReturningCustomer)}
                    className="ml-2 text-yellow-600 hover:text-yellow-700 underline"
                  >
                    Click here to login
                  </button>
                </h2>
              </div>

              {isReturningCustomer && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    If you have shopped with us before, please enter your
                    details in the boxes below. If you are a new customer,
                    please proceed to the Billing & Shipping section.
                  </p>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Username or Email"
                      value={loginData.username}
                      onChange={(e) =>
                        handleLoginInputChange("username", e.target.value)
                      }
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) =>
                        handleLoginInputChange("password", e.target.value)
                      }
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    <div className="md:col-span-2 flex items-center justify-between">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        Login
                      </button>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={loginData.rememberMe}
                            onChange={(e) =>
                              handleLoginInputChange(
                                "rememberMe",
                                e.target.checked
                              )
                            }
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">
                            Remember me
                          </span>
                        </label>
                        <Link
                          href="#"
                          className="text-sm text-yellow-600 hover:text-yellow-700"
                        >
                          Lost your password?
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Coupon Area */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Have a coupon?
                  <button
                    onClick={() => setShowCoupon(!showCoupon)}
                    className="ml-2 text-yellow-600 hover:text-yellow-700 underline"
                  >
                    Click here to enter your code
                  </button>
                </h2>
              </div>

              {showCoupon && (
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                    Apply Coupon
                  </button>
                </div>
              )}
            </div>

            {/* Billing Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Billing Details
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        required
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Company name (optional)"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        required
                      />
                    </div>

                    <select
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="1">Country</option>
                      <option value="2">United States</option>
                      <option value="3">Canada</option>
                      <option value="4">United Kingdom</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Address line 01"
                      value={formData.address1}
                      onChange={(e) =>
                        handleInputChange("address1", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                    />

                    <input
                      type="text"
                      placeholder="Address line 02 (optional)"
                      value={formData.address2}
                      onChange={(e) =>
                        handleInputChange("address2", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />

                    <input
                      type="text"
                      placeholder="Town/City"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                    />

                    <select
                      value={formData.district}
                      onChange={(e) =>
                        handleInputChange("district", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="1">District</option>
                      <option value="2">District 1</option>
                      <option value="3">District 2</option>
                      <option value="4">District 3</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Postcode/ZIP"
                      value={formData.postcode}
                      onChange={(e) =>
                        handleInputChange("postcode", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                    />

                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={createAccount}
                          onChange={(e) => setCreateAccount(e.target.checked)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          Create an account?
                        </span>
                      </label>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Shipping Details
                        </h4>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={shipToDifferentAddress}
                            onChange={(e) =>
                              setShipToDifferentAddress(e.target.checked)
                            }
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">
                            Ship to a different address?
                          </span>
                        </label>
                      </div>

                      <textarea
                        placeholder="Order Notes (optional)"
                        value={formData.orderNotes}
                        onChange={(e) =>
                          handleInputChange("orderNotes", e.target.value)
                        }
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Your Order
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm font-semibold text-gray-900 border-b pb-2">
                      <span>Product</span>
                      <span>Total</span>
                    </div>

                    {orderItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="flex-1">
                          {item.name}{" "}
                          <span className="text-gray-500">
                            x {item.quantity}
                          </span>
                        </span>
                        <span className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 border-t pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        Flat rate: ${shipping.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold text-gray-900 border-t pt-2">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4 mb-6">
                    <div className="border rounded-lg p-4">
                      <label className="flex items-start">
                        <input
                          type="radio"
                          name="payment"
                          value="check"
                          checked={paymentMethod === "check"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <span className="font-semibold">Check payments</span>
                          <p className="text-sm text-gray-600 mt-1">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
                      <label className="flex items-start">
                        <input
                          type="radio"
                          name="payment"
                          value="paypal"
                          checked={paymentMethod === "paypal"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">PayPal</span>
                            <img
                              src="/img/product/card.jpg"
                              alt="PayPal"
                              className="h-6"
                            />
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {`Pay via PayPal; you can pay with your credit card if
                            you don't have a PayPal account.`}
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="mt-1 mr-2"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        {`I've read and accept the `}
                        <Link
                          href="#"
                          className="text-yellow-600 hover:text-yellow-700 underline"
                        >
                          {`terms & conditions*`}
                        </Link>
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!acceptTerms}
                      className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      Proceed to PayPal
                    </button>
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

export default CheckoutPage;
