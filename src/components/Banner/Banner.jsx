import React from "react";

import { FaArrowRight, FaCoins } from "react-icons/fa";
import HealthPlanCards from "../Subscribe/Subscribe"; // Assuming HealthPlanCards.jsx is in the same 'components' directory

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-600 to-slate-800 text-white  overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left: Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Our Plans, Your <br /> Peace of Mind
            </h1>
            <h2 className="text-accent text-2xl lg:text-3xl text-violet-400 font-bold italic mt-4">
              choose what fits you best
            </h2>
            <p className="mt-6 text-base lg:text-lg opacity-90">
              With an array of services that range from diagnostic discounts to
              emergency room coverage, we are committed to providing you with
              the peace of mind you deserve.
            </p>

            <a
              href="/magmapremiumcare"
              className="mt-6 inline-flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wide underline-offset-4 hover:text-violet-400  hover:underline"
            >
              Start Exploring{" "}
              <span className="inline-block">
                <FaCoins size={20} />
              </span>
            </a>
          </div>

          {/* Right: Illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <img
              src="https://premiumaddons.com/wp-content/uploads/2020/05/illustrated-money.png"
              alt="Plan Illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="-mt-12 lg:-mt-20">
        <HealthPlanCards />
      </div>
    </div>
  );
};

export default Banner;
