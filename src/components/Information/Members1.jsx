
import { Check } from "lucide-react";
import React from "react";

import { useLocation, useNavigate } from "react-router";

const Members1 = () => {
  const navigate = useNavigate();

  const location = useLocation();
  
    const steps = [
      "Self Information",
      "Member 1",
      "Member 2",
      "Member 3",
      "Payment",
    ];
    const stepPaths = ["/self", "/member1", "/member2", "/member3", "/payment"];
    const currentStepIndex = stepPaths.indexOf(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 to-emerald-400 flex items-center justify-center p-4 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full mx-auto my-8">
        {/* Stepper / Progress Bar */}
        <div className="flex justify-between items-center mb-8 sm:mb-10 relative">
            {/* Line behind steps */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 mx-4"></div>

            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isActive = index === currentStepIndex;

              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                ${
                  isCompleted
                    ? "bg-[#1EA1A9] text-white border-2 border-[#1EA1A9]"
                    : ""
                }
                ${isActive ? "border-2 border-green-600 text-green-700" : ""}
                ${
                  !isCompleted && !isActive
                    ? "bg-transparent border border-gray-300 text-gray-400"
                    : ""
                }
              `}
                  >
                    {isCompleted ? <Check size={16} /> : index + 1}
                  </div>
                  <span
                    className={`mt-2 text-center text-xs sm:text-sm whitespace-nowrap transition-colors duration-300
                ${isCompleted ? "text-[#1EA1A9] font-medium" : ""}
                ${isActive ? "text-green-700 font-semibold" : ""}
                ${!isCompleted && !isActive ? "text-gray-500" : ""}
              `}
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>

        {/* Form Fields */}
        <form className="space-y-6">
          {/* Member 1 Name / Relation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="member1-name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Member 1
              </label>
              <input
                type="text"
                id="member1-name"
                name="member1-name"
                placeholder="Member 1 Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="relation"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Relation
              </label>
              <select
                id="relation"
                name="relation"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition duration-200"
              >
                <option value="">- Select -</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Email / Phone/Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Phone/Mobile
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              />
            </div>
          </div>

          {/* DOB / Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="dob"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                DOB
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition duration-200"
              >
                <option value="">- Select -</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate("/selfinformation")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Previous
            </button>
            <button
              type="submit"
              onClick={() => navigate("/member2")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Members1;
