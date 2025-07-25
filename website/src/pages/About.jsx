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
import c2 from "../assets/c2.png";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  return (
    <>
      {/* Preventive Pulse Section with Directors */}
      <div className="bg-white py-20 px-4 sm:px-8 lg:px-12 border-t border-fuchsia-200 rounded">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-xl sm:text-5xl font-bold text-violet-600 mb-6">
            Preventive Pulse Healthcare Private Limited
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Preventive Pulse Healthcare Private Limited is dedicated to making
            preventive and outpatient healthcare more accessible, affordable,
            and proactive. With a mission to bridge the gap between patients and
            quality care, we provide comprehensive OPD plans, digital
            consultations, and continuous wellness support tailored for every
            individual and family.
          </p>

          {/* Directors Section */}
          <h3 className="text-2xl sm:text-3xl font-bold text-violet-500 mb-10">
            Meet Our Directors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
            {/* Director 1 */}
            <div className="bg-gradient-to-tr from-violet-50 to-fuchsia-50 p-6 rounded-2xl border border-violet-200 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-tr from-violet-200 to-fuchsia-100 flex items-center justify-center text-3xl text-violet-700 font-bold">
                B
              </div>
              <h4 className="text-xl font-semibold text-slate-800 text-center">
                Bahadur Singh
              </h4>
              <p className="text-slate-600 mt-3 text-center">
                Co-Founder & Director focused on building scalable, tech-enabled
                healthcare systems that improve lives through proactive wellness
                and OPD services.
              </p>
            </div>

            {/* Director 2 */}
            <div className="bg-gradient-to-tr from-violet-50 to-fuchsia-50 p-6 rounded-2xl border border-violet-200 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-tr from-violet-200 to-fuchsia-100 flex items-center justify-center text-3xl text-violet-700 font-bold">
                R
              </div>
              <h4 className="text-xl font-semibold text-slate-800 text-center">
                Rajan
              </h4>
              <p className="text-slate-600 mt-3 text-center">
                Director & Strategic Head, leading innovation and growth in
                digital healthcare services to deliver affordable preventive
                care at scale.
              </p>
            </div>
          </div>
        </div>
      </div>

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

              <button
                className="mt-6 px-8 py-3 bg-violet-500 text-white font-bold rounded-md border-2 border-violet-500 hover:bg-transparent hover:text-violet-600 transition duration-300"
                onClick={() => navigate("/magmapremiumcare")}
              >
                Explore Our Plans
              </button>
            </div>

            {/* Right Section */}

            <div className="relative flex-1 p-6 ism:p-10 lg:p-12 flex items-center justify-center overflow-hidden">
              {/* ✅ Animate the full block: tags + image together */}
              <div className="relative animate-float">
                {/* Top-left Tagline */}
                <div className="absolute left-3 -top-2 bg-lime-500 text-white text-sm px-4 py-2 rounded-lg shadow-md">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      ✅ Unlimited Doctor Access
                    </li>
                    <li className="flex items-center gap-2">
                      ✅ Annual Health Check-ups
                    </li>
                    <li className="flex items-center gap-2">
                      ✅ Mental Wellness Support
                    </li>
                  </ul>
                </div>

                {/* Circular Image with Gradient Border */}
                <div className="bg-gradient-to-br from-slate-600 to-violet-500 p-[4px] rounded-full">
                  <div className="bg-white rounded-full w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] flex items-center justify-center overflow-hidden">
                    <img
                      src={c2}
                      alt="Family Health Plan"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Bottom-right Tagline */}
                <div className="absolute bottom-3 right-3 bg-cyan-900 text-white text-sm px-4 py-2 rounded-lg shadow-md">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      ✅ Personalized Nutrition Guidance
                    </li>
                    <li className="flex items-center gap-2">
                      ✅ Eye & Dental Care
                    </li>
                    <li className="flex items-center gap-2">
                      ✅ Big Discounts on Health Essentials
                    </li>
                  </ul>
                </div>
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
                  At Magma OPD, our vision is to revolutionize outpatient care
                  by making quality medical consultations accessible and
                  seamless for every individual. We envision a future where
                  health services are just a click away, delivered with
                  compassion and care.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="flex items-center justify-center">
                {/* Vertical on md+, horizontal on small */}
                <div className="h-px w-5/6 bg-fuchsia-400 md:h-5/6 md:w-px"></div>
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
                  reliable outpatient healthcare services. We aim to bridge the
                  gap between patients and doctors by offering easy appointment
                  booking, expert consultations, and a smooth healthcare
                  experience across all touchpoints.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="min-h-screen py-20 bg-gradient-to-br from-slate-100 to-violet-100 flex flex-col items-center  px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl w-full">
            <h1 className="text-5xl mb-2 font-bold text-violet-500 relative ">
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
    </>
  );
}

export default App;
