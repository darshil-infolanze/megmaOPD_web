import React from "react";
import family from "../../assets/family.png";
import { FaCheck } from "react-icons/fa6";

import FeaturesSection from "./FeaturesSection";

const AxenPremiumCare = () => {
  return (
    <>
      <section className="bg-[#1EA1A90D]  min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text and Details */}
          <div className="flex flex-col text-center md:text-left">
            <p className="text-sm  text-gray-600 mb-2 font-semibold uppercase tracking-wide">
              GET PROTECTED TODAY
            </p>
            <h1 className="text-4xl sm:text-5xl text-capitalize font-sans font-bold text-[#505050] mb-6 leading-tight">
              Axen Premium Care
            </h1>

            <div className="bg-gray-50 p-4 rounded-lg inline-block self-center md:self-start mb-6">
              <div className="flex items-center text-gray-700">
                <div>
                  <img
                    src={family}
                    alt="Self + Spouse + 2 Children"
                    className="w-10"
                  />
                </div>
                <div>
                  <h3 className="text-lg mb-0 font-bold text-[#1EA1A9] ">
                    <span>Coverage:</span>
                  </h3>
                  <p className=" text-md text-[#7A7A7A] font-bold">
                    &nbsp;Self + Spouse + 2 Children
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-lg text-gray-700">
              <li className="flex items-center">
                <FaCheck className="h-6 w-6 text-[#7ad03a] mr-2" />
                Unlimited Doctor Access
              </li>
              <li className="flex items-center">
                <FaCheck className="h-6 w-6 text-[#7ad03a] mr-2" />
                Annual Health Check-ups
              </li>
              <li className="flex items-center">
                <FaCheck className="h-6 w-6 text-[#7ad03a] mr-2" />
                Mental Wellness Support
              </li>
              <li className="flex items-center">
                <FaCheck className="h-6 w-6 text-[#7ad03a] mr-2" />
                Personalized Nutrition Guidance
              </li>
              <li className="flex items-center">
                <FaCheck className="h-6 w-6 text-[#7ad03a] mr-2" />
                Eye & Dental Care
              </li>
              <li className="flex items-center">
                <FaCheck className="h-6 w-6 text-[#7ad03a] mr-2" />
                Big Discounts on Health Essentials
              </li>
            </ul>

            <p className="text-4xl font-bold text-[#1EA1A9] mb-8">
              ₹29,999{" "}
              <span className="text-3xl font-bold text-[#1EA1A9]">
                (Incl. GST)
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#1EA1A9] hover:bg-[#7ad03a] rounded text-white font-bold py-3 px-8  shadow-lg transition duration-300 ease-in-out">
                <a href="/selfinformation">Buy Now</a>
              </button>

              <button className="bg-[#7ad03a] text-white border rounded border-[#7ad03a] font-bold py-3 px-8 transition duration-300 ease-in-out hover:bg-transparent hover:text-[#7ad03a]">
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
                  className="w-full h-full object-cover"
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

export default AxenPremiumCare;
