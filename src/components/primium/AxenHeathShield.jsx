import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid'; // Install Heroicons if you want these icons: npm install @heroicons/react
import HealthShieldFeaturesSection from './HealthShieldFeaturesSection';
const AxenHealthShield = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Section - Text and Details */}
        <div className="flex flex-col text-center md:text-left">
          <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
            GET PROTECTED TODAY
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Axen Health Shield
          </h1>

          <div className="bg-gray-100 p-4 rounded-lg inline-block self-center md:self-start mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Coverage:</h3>
            <div className="flex items-center text-gray-700">
              {/* Simple placeholder for the family icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-2v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2H3a2 2 0 00-2 2v1a2 2 0 002 2h18a2 2 0 002-2v-1a2 2 0 00-2-2h-2zM9 4a4 4 0 11-8 0 4 4 0 018 0zm7 0a4 4 0 11-8 0 4 4 0 018 0zm-4 4a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p>Self + Spouse + 2 Children</p>
            </div>
          </div>

          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              Unlimited Doctor Access
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              2 Annual Health Check-ups
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              4 Mental Wellness Support
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              Personalized Nutrition Guidance
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              Eye & Dental Care
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              Big Discounts on Health Essentials
            </li>
          </ul>

          <p className="text-5xl font-bold text-green-700 mb-8">
            ₹49,999 <span className="text-2xl font-semibold text-gray-600">(Incl. GST)</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
              Buy Now
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
              Download Plan Details
            </button>
          </div>
        </div>

        {/* Right Section - Family Image with Shield and Plus Icon */}
        <div className="relative flex justify-center md:justify-end">
          {/* Main green circle background */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-green-200 flex items-center justify-center overflow-hidden">
            {/* Family Image (assuming it's a specific family, based on visual evidence, they appear to be of South Asian descent) */}
            <img
              src="https://via.placeholder.com/600x600/d1e7c5/333333?text=Family+Portrait" // Replace with your actual family image
              alt="Family"
              className="w-full h-full object-cover rounded-full"
            />

            {/* Shield Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Using a simple SVG for the shield. For a more detailed shield, you might need a complex SVG or image asset. */}
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-70">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="url(#paint0_linear)" stroke="#fff" strokeWidth="0.5"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4CAF50"/>
                    <stop offset="1" stopColor="#81C784"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* You might want two shields overlapping for the dual-tone effect as in the image.
                  This is a simplified single shield. */}
            </div>
          </div>

          {/* Plus Icon at the top-right */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

      </div>
      <HealthShieldFeaturesSection />
    </section>
  );
};

export default AxenHealthShield;