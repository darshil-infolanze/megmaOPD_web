import React from "react";
import {
  Check,
  Headset,
  Users,
  Stethoscope,
  BriefcaseMedical,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import { FaEye, FaRocket } from "react-icons/fa6";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Banner2 from "../components/Banner/Banner2";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-black flex flex-col items-center text-center transition-shadow duration-300">
    <div className="p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-[#1EA1A9]" />
    </div>
    <h3 className="text-xl font-semibold text-[#8CC63E] mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

function App() {
  const features = [
    {
      icon: Headset,
      title: "Convenient Online Access",
      description:
        "Enjoy the flexibility of managing your healthcare from the comfort of your home, with access to services via our easy-to-use online platform, anytime and anywhere.",
    },
    {
      icon: Users,
      title: "Personalized Wellness Management",
      description:
        "With a dedicated wellness manager, you receive continuous support and guidance, ensuring all your health needs are addressed promptly and efficiently.",
    },
    {
      icon: Stethoscope,
      title: "Exclusive Discounts on Medicines & Diagnostics",
      description:
        "Save on lab tests and medications with discounts of up to 40% on diagnostics and 25% off branded medicines, making healthcare more affordable.",
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Health Coverage",
      description:
        "From annual health check-ups to specialist consultations, we provide a wide range of services that ensure complete healthcare protection for all members of your family.",
    },
    {
      icon: HeartPulse,
      title: "Tailored Healthcare Plans",
      description:
        "Our plans are designed to meet the unique needs of you and your family, ensuring personalized coverage that adapts to your lifestyle and health requirements.",
    },
    {
      icon: BriefcaseMedical,
      title: "Unlimited Access to Healthcare Professionals",
      description:
        "With unlimited teleconsultations, you can connect with doctors from various specialties anytime, offering convenience and peace of mind whenever you need medical advice.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1EA1A90D] font-inter">
      {/* About Section */}
      <div className="p-4 sm:p-8 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white rounded-lg shadow-xl overflow-hidden md:flex">
          {/* Left Section */}
          <div className="flex-1 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-center">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 uppercase tracking-wider">
              YOUR COMPLETE HEALTH AND WELLNESS SUPPORT
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1EA1A9] leading-tight">
              About Us
            </h1>

            <ul className="space-y-3">
              {[
                "Unlimited Doctor Access",
                "Annual Health Check-ups",
                "Mental Wellness Support",
                "Personalized Nutrition Guidance",
                "Eye & Dental Care",
                "Big Discounts on Health Essentials",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-base sm:text-lg"
                >
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 rounded-full  p-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 px-8 py-3 bg-[#8CC63E] text-white font-bold rounded-md border-2 border-[#8CC63E] transition duration-300 ease-in-out hover:bg-transparent hover:text-[#8CC63E] hover:border-[#8CC63E]">
              <a href="/premium">Explore Our Plans</a>
            </button>
          </div>

          {/* Right Section */}
          <div className="relative flex-1 bg-gray-50 p-6 sm:p-10 lg:p-12 flex items-center justify-center overflow-hidden">
            {/* Family Image (Placeholder) */}
            <div className="relative w-full max-w-sm">
              <img
                src="https://axencare.in/wp-content/uploads/2025/04/Axen-Care-scaled.png"
                alt="Happy family"
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x300/cccccc/333333?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}

      <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-3xl shadow-sm sm:shadow-lg border border-[#61CE70] p-6 sm:p-8 lg:p-10 max-w-6xl w-full">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
            {/* Our Vision */}
            <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 group hover:cursor-pointer">
              <div className="mb-4 sm:mb-6">
                <FaEye className="w-10 h-10 text-[#1EA1A9]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#61CE70] group-hover:text-[#1EA1A9] mb-3 sm:mb-4 transition-colors duration-300">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Our vision is to become a trusted leader in healthcare,
                transforming the way people experience healthcare by offering
                tailored plans that combine convenience, quality, and
                affordability. We aspire to empower individuals and families to
                take control of their health with confidence and ease.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-px h-5/6 bg-[#61CE70]"></div>
            </div>

            {/* Our Mission */}
            <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 group hover:cursor-pointer">
              <div className="mb-4 sm:mb-6">
                <FaRocket className="w-10 h-10 text-[#1EA1A9]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#61CE70] group-hover:text-[#1EA1A9] mb-3 sm:mb-4 transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Our mission at Axen Care is to provide accessible, affordable,
                and personalized healthcare solutions that prioritize the
                well-being of our clients. We aim to deliver comprehensive
                coverage, expert guidance, and continuous support to ensure a
                healthier and happier life for every individual and family we
                serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <h1 className="text-5xl font-bold text-[#1EA1A9] relative ">
            Why Choose Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Banner2 />
    </div>
  );
}

export default App;
