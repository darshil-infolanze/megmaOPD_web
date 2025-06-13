import React, { useState } from "react";

const Payments = () => {
  const [selectedPayment, setSelectedPayment] = useState("razorpay");

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Pay for order</h1>

        {/* Order Summary Table */}
        <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/5"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
                >
                  Qty
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
                >
                  Totals
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Axen Premium Care
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  x 1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  ₹29,999
                </td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 text-right"
                >
                  Subtotal:
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                  ₹29,999
                </td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800 text-right"
                >
                  Total:
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">
                  ₹29,999 (includes ₹2,288 SCGST 9%, ₹2,288 CGST 9%)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Options */}
        <div className="space-y-4 mb-8">
          {/* Credit Card/Debit Card/NetBanking */}
          <label
            htmlFor="razorpay"
            className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200
              ${
                selectedPayment === "razorpay"
                  ? "border-purple-600 ring-2 ring-purple-200 bg-purple-50"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }
            `}
          >
            <input
              type="radio"
              id="razorpay"
              name="paymentMethod"
              value="razorpay"
              checked={selectedPayment === "razorpay"}
              onChange={handlePaymentChange}
              className="form-radio h-5 w-5 text-purple-600 transition duration-150 ease-in-out cursor-pointer"
            />
            <div className="ml-4 flex-grow">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium text-lg">
                  Credit Card/Debit Card/NetBanking
                </span>
                {/* Placeholder for Razorpay logo */}
                <img
                  src="https://placehold.co/100x30/FFFFFF/000000?text=Razorpay"
                  alt="Pay by Razorpay"
                  className="h-6 w-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x30/cccccc/ffffff?text=Razorpay";
                  }}
                />
              </div>
              {selectedPayment === "razorpay" && (
                <p className="mt-2 text-gray-600 text-sm">
                  Pay securely by Credit or Debit card or Internet Banking
                  through Razorpay.
                </p>
              )}
            </div>
          </label>

          {/* Cashfree Payments */}
          <label
            htmlFor="cashfree"
            className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200
              ${
                selectedPayment === "cashfree"
                  ? "border-purple-600 ring-2 ring-purple-200 bg-purple-50"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }
            `}
          >
            <input
              type="radio"
              id="cashfree"
              name="paymentMethod"
              value="cashfree"
              checked={selectedPayment === "cashfree"}
              onChange={handlePaymentChange}
              className="form-radio h-5 w-5 text-purple-600 transition duration-150 ease-in-out cursor-pointer"
            />
            <div className="ml-4 flex-grow flex items-center justify-between">
              <span className="text-gray-900 font-medium text-lg">
                Cashfree Payments
              </span>
              {/* Placeholder for Cashfree Payments logo */}
              <img
                src="https://placehold.co/100x30/FFFFFF/000000?text=Cashfree"
                alt="Cashfree Payments"
                className="h-6 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x30/cccccc/ffffff?text=Cashfree";
                }}
              />
            </div>
          </label>

          {/* PhonePe Payment Solutions */}
          <label
            htmlFor="phonepe"
            className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200
              ${
                selectedPayment === "phonepe"
                  ? "border-purple-600 ring-2 ring-purple-200 bg-purple-50"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }
            `}
          >
            <input
              type="radio"
              id="phonepe"
              name="paymentMethod"
              value="phonepe"
              checked={selectedPayment === "phonepe"}
              onChange={handlePaymentChange}
              className="form-radio h-5 w-5 text-purple-600 transition duration-150 ease-in-out cursor-pointer"
            />
            <div className="ml-4 flex-grow flex items-center justify-between">
              <div>
                <span className="text-gray-900 font-medium text-lg">
                  PhonePe Payment Solutions
                </span>
                {selectedPayment === "phonepe" && (
                  <p className="mt-1 text-gray-600 text-sm">
                    UPI, Credit/Debit Card, Netbanking
                  </p>
                )}
              </div>
              {/* Placeholder for PhonePe logo */}
              <img
                src="https://placehold.co/100x30/FFFFFF/000000?text=PhonePe"
                alt="PhonePe"
                className="h-6 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x30/cccccc/ffffff?text=PhonePe";
                }}
              />
            </div>
          </label>
        </div>

        {/* Privacy Policy Disclaimer */}
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <a href="#" className="text-purple-600 hover:underline">
            privacy policy
          </a>
          .
        </p>

        {/* Pay for order button */}
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
          >
            Pay for order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
