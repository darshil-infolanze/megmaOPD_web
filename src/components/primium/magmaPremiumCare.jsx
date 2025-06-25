import React, { useEffect } from "react";

import { FaCheck } from "react-icons/fa6";

import FeaturesSection from "./FeaturesSection";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

const MagmaPremiumCare = () => {
  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSelectPlan = (plan) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    navigate("/selfinformation");
  };

  const handleOpenPDF =()=>{
     window.open("/docs/premium plan.pdf", "_blank");
  }
  return (
    <>
      <section className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text and Details */}
          <div className="flex flex-col text-center md:text-left">
            <div className="mb-4">
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                GET PROTECTED TODAY
              </span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-8">
              Magma Premium Care
            </h1>

            {/* Coverage Info */}

            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-white border border-violet-200 rounded-lg p-4 flex items-center space-x-4 shadow-sm">
                <Users className="w-8 h-8 text-violet-600" />
                <div>
                  <span className="block text-lg font-semibold text-violet-600">
                    Coverage:
                  </span>
                  <p className="text-slate-600 font-medium">
                    Self + Spouse + 2 Children
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <FaCheck className="w-5 h-5 text-violet-600" />
                <span className="text-slate-700 text-lg">
                  Unlimited Doctor Access
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-5 h-5 text-violet-600" />
                <span className="text-slate-700 text-lg">
                  Annual Health Check-ups
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-5 h-5 text-violet-600" />
                <span className="text-slate-700 text-lg">
                  Mental Wellness Support
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-5 h-5 text-violet-600" />
                <span className="text-slate-700 text-lg">
                  Personalized Nutrition Guidance
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-5 h-5 text-violet-600" />
                <span className="text-slate-700 text-lg">
                  Eye & Dental Care
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-5 h-5 text-violet-600" />
                <span className="text-slate-700 text-lg">
                  Big Discounts on Health Essentials
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <span className="text-4xl font-bold text-violet-600">
                ₹29,999
              </span>
              <span className="text-lg text-slate-600 ml-2">(Incl. GST)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className="bg-violet-600 hover:bg-slate-600 rounded text-white font-bold py-3 px-8  shadow-lg transition duration-300 ease-in-out"
                onClick={() =>
                  handleSelectPlan({ name: "Magma Premium Care", price: 29999 })
                }
              >
                Buy Now
              </button>

              <button className="bg-slate-600 text-white border rounded border-slate-600 font-bold py-3 px-8 transition duration-300 ease-in-out hover:bg-transparent hover:text-slate-500"
              onClick={handleOpenPDF}
              >
                Download Plan Details
              </button>
            </div>
          </div>

          {/* Right Section - Family Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* The circular shape with the family image */}

              <div>
                <img
                  src="https://axencare.in/wp-content/uploads/2025/05/Axen-Premium-Care1.png" // Placeholder image, replace with your actual family image
                  alt="Happy family"
                  className="w-full h-full object-cover animate-float rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection />
    </>
  );
};

export default MagmaPremiumCare;
