

import React from 'react';

import { Headset, Users, Stethoscope, BriefcaseMedical, HeartPulse, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
    <div className="p-3 bg-green-100 rounded-full mb-4">
      <Icon className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const App = () => {
  const features = [
    {
      icon: Headset,
      title: "Convenient Online Access",
      description: "Enjoy the flexibility of managing your healthcare from the comfort of your home, with access to services via our easy-to-use online platform, anytime and anywhere.",
    },
    {
      icon: Users,
      title: "Personalized Wellness Management",
      description: "With a dedicated wellness manager, you receive continuous support and guidance, ensuring all your health needs are addressed promptly and efficiently.",
    },
    {
      icon: Stethoscope,
      title: "Exclusive Discounts on Medicines & Diagnostics",
      description: "Save on lab tests and medications with discounts of up to 40% on diagnostics and 25% off branded medicines, making healthcare more affordable.",
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Health Coverage",
      description: "From annual health check-ups to specialist consultations, we provide a wide range of services that ensure complete healthcare protection for all members of your family.",
    },
    {
      icon: HeartPulse,
      title: "Tailored Healthcare Plans",
      description: "Our plans are designed to meet the unique needs of you and your family, ensuring personalized coverage that adapts to your lifestyle and health requirements.",
    },
    {
      icon: BriefcaseMedical,
      title: "Unlimited Access to Healthcare Professionals",
      description: "With unlimited teleconsultations, you can connect with doctors from various specialties anytime, offering convenience and peace of mind whenever you need medical advice.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center relative pb-4">
          Why Choose Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};
export default App;