import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const steps = [
  "Self Information",
  "Member 1",
  "Member 2",
  "Member 3",
  "Payment",
];

const Payments = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen bg-[#1EA1A9] flex items-center justify-center p-4 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full mx-auto my-8">
        {/* Stepper */}
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative text-center">
              <div className="w-8 h-8 mx-auto bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <p className="text-[#1EA1A9] text-sm mt-2">{step}</p>
              {index < steps.length - 1 && (
                <div className="absolute top-4 left-1/2 w-full h-0.5 bg-teal-600 z-[-1]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Terms Text */}
        <div className="text-gray-700 text-sm mb-4">
          <p>
            Axencare shall not be held responsible for any payments made outside
            of our official website or authorized payment gateways. Customers
            are advised to ensure that all payments for health plans or services
            are made directly through our secure platform. The company will not
            be liable for any loss or dispute arising from transactions made
            through third parties or unauthorized agents.
          </p>
        </div>

        {/* Checkbox */}
        <label className="inline-flex items-start gap-2 mt-4 text-sm text-gray-800">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1"
          />
          <span>
            I have read and agree to the{" "}
            <a
              href="/term"
              className="text-red-400 font-medium underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-red-400 font-medium underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800"
          >
            Previous
          </button>
          <button
            onClick={() => navigate("/submit", { state })}
            disabled={!agree}
            className={`px-5 py-2 rounded-md text-white transition duration-200 ${
              agree
                ? "bg-[#1EA1A9] hover:bg-teal-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
