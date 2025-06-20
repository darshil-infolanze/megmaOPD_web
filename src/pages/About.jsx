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
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-fuchsia-300 flex flex-col items-center text-center transition-shadow duration-300">
    <div className="p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-violet-600" />
    </div>
    <h3 className="text-xl font-semibold text-fuchsia-500 mb-2">{title}</h3>
    <p className="text-slate-700 leading-relaxed">{description}</p>
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
    <div className=" bg-gradient-to-br from-slate-100 to-violet-100  ">
      {/* About Section */}
      <div className="p-4 sm:p-8 flex items-center justify-center">
        <div className="max-w-6xl w-full  rounded-lg  overflow-hidden md:flex">
          {/* Left Section */}
          <div className="flex-1 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-center">
            <h2 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider">
              YOUR COMPLETE HEALTH AND WELLNESS SUPPORT
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-violet-500 leading-tight">
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
                  className="flex items-center text-slate-900 text-base sm:text-lg"
                >
                  <Check className="text-violet-600 w-5 h-5 mr-2 flex-shrink-0 rounded-full  p-0.5" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 px-8 py-3 bg-violet-500 text-white font-bold rounded-md border-2 border-violet-500 hover:bg-transparent hover:text-violet-600 transition duration-300">
              <a href="/premium">Explore Our Plans</a>
            </button>
          </div>

          {/* Right Section */}
          <div className="relative flex-1  p-6 sm:p-10 lg:p-12 flex items-center justify-center overflow-hidden">
            {/* Family Image (Placeholder) */}
            <div className="relative w-full max-w-sm">
              <img
                src="https://axencare.in/wp-content/uploads/2025/04/Axen-Care-scaled.png"
                alt="Happy family"
                className="w-full h-auto rounded-xl  animate-float  object-cover"
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
        <div className="bg-white rounded-3xl shadow-sm sm:shadow-lg border border-fuchsia-300 p-6 sm:p-8 lg:p-10 max-w-6xl w-full">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
            {/* Our Vision */}
            <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 group hover:cursor-pointer">
              <div className="mb-4 sm:mb-6">
                <FaEye className="w-10 h-10 text-violet-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-500 group-hover:text-violet-600 mb-3 sm:mb-4 transition-colors duration-300">
                Our Vision
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
               At Magma OPD, our vision is to revolutionize outpatient care by
              making quality medical consultations accessible and seamless for
              every individual. We envision a future where health services are
              just a click away, delivered with compassion and care.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-px h-5/6 bg-fuchsia-400"></div>
            </div>

            {/* Our Mission */}
            <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 group hover:cursor-pointer">
              <div className="mb-4 sm:mb-6">
                <FaRocket className="w-10 h-10 text-violet-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-500 group-hover:text-violet-600 mb-3 sm:mb-4 transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Magma OPD is on a mission to provide fast, affordable, and
              reliable outpatient healthcare services. We aim to bridge the gap
              between patients and doctors by offering easy appointment booking,
              expert consultations, and a smooth healthcare experience across
              all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="min-h-screen py-20 bg-gradient-to-br from-slate-100 to-violet-100 flex flex-col items-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <h1 className="text-5xl font-bold text-violet-500 relative ">
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
  