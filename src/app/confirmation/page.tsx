"use client";

import Link from "next/link";
import BannerCard from "../components/BannerCard";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const ConfirmationPage = () => {
  const orderItems: OrderItem[] = [
    { id: 1, name: "Pixelstore fresh Blackberry", quantity: 2, price: 360.0 },
    { id: 2, name: "Pixelstore fresh Blackberry", quantity: 2, price: 360.0 },
    { id: 3, name: "Pixelstore fresh Blackberry", quantity: 2, price: 360.0 },
  ];

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <BannerCard title="Confirmation" link="Confirmation" />

      {/* Order Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you. Your order has been received.
            </h3>
          </div>

          {/* Order Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Order Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Order Info
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Order number:</span>
                  <span className="font-semibold">60235</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">Los Angeles</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-semibold">USD {total.toFixed(2)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Payment method:</span>
                  <span className="font-semibold">Check payments</span>
                </li>
              </ul>
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Billing Address
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Street:</span>
                  <span className="font-semibold">56/8</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-semibold">Los Angeles</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Country:</span>
                  <span className="font-semibold">United States</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Postcode:</span>
                  <span className="font-semibold">36952</span>
                </li>
              </ul>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Shipping Address
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Street:</span>
                  <span className="font-semibold">56/8</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-semibold">Los Angeles</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Country:</span>
                  <span className="font-semibold">United States</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Postcode:</span>
                  <span className="font-semibold">36952</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Order Details Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Order Details
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Product
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {orderItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{item.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <h5 className="text-sm font-semibold text-gray-900">
                          x {item.quantity.toString().padStart(2, "0")}
                        </h5>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </td>
                    </tr>
                  ))}

                  {/* Summary Rows */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">
                      <h4 className="text-sm font-semibold text-gray-900">
                        Subtotal
                      </h4>
                    </td>
                    <td className="px-6 py-4">
                      <h5 className="text-sm font-semibold text-gray-900"></h5>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">
                        ${subtotal.toFixed(2)}
                      </p>
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">
                      <h4 className="text-sm font-semibold text-gray-900">
                        Shipping
                      </h4>
                    </td>
                    <td className="px-6 py-4">
                      <h5 className="text-sm font-semibold text-gray-900"></h5>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">
                        Flat rate: ${shipping.toFixed(2)}
                      </p>
                    </td>
                  </tr>

                  <tr className="bg-yellow-50">
                    <td className="px-6 py-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Total
                      </h4>
                    </td>
                    <td className="px-6 py-4">
                      <h5 className="text-lg font-semibold text-gray-900"></h5>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-lg font-semibold text-gray-900">
                        ${total.toFixed(2)}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-center"
            >
              Continue Shopping
            </Link>
            <Link
              href="/tracking"
              className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-center"
            >
              Track Your Order
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConfirmationPage;
