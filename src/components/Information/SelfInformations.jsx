import React from "react";
import logo from "../../assets/logo.webp";
import { Check } from "lucide-react";
const SelfInformations = () => {
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
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="axen-care"
            className="w-32 object-contain mb-2"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Axen Health Shield
          </h3>
        </div>

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
          {/* Self Name / Father/Husband Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="self-name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Self Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="self-name"
                name="self-name"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="father-husband-name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Father/Husband Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="father-husband-name"
                name="father-husband-name"
                placeholder="Father/Husband Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
          </div>

          {/* Email / Phone/Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
          </div>

          {/* Date Of Birth / Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="dob"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Date Of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition duration-200"
                required
              >
                <option value="">- Select -</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Pan Card / Aadhar Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="pan-card"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Pan Card <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pan-card"
                name="pan-card"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="aadhar-card"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Aadhar Card <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="aadhar-card"
                name="aadhar-card"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
          </div>

          {/* Address Line 1 / Address Line 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="address-line1"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address-line1"
                name="address-line1"
                placeholder="Address Line 1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address-line2"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="address-line2"
                name="address-line2"
                placeholder="Address Line 2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              />
            </div>
          </div>

          {/* City / State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
          </div>

          {/* PinCode / Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="pincode"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                PinCode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Zip"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none transition duration-200"
                required
              >
                <option value="india">India</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <a href="/member1">Next</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelfInformations;
