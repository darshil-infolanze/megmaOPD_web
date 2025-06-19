import React from "react";
import FeatureCard from "./FeatureCard"; // path depends on your folder structure

const FeaturesSection = () => {
  const features = [
    {
      image: "https://axencare.in/wp-content/uploads/2025/04/4-1.png",
      title: "Comprehensive Care Access",
      description: [
        {
          bold: "Unlimited Teleconsultations",
          text: " – Talk to doctors anytime, any specialty.",
        },
        {
          bold: "Annual Health Check-up",
          text: " – 1 full check-up per adult, every year.",
        },
        {
          bold: "Wellness Manager",
          text: " – Personal health concierge, always there for you.",
        },
      ],
    },
    {
      image:
        "https://axencare.in/wp-content/uploads/2025/05/Advanced-Wellness-Programs.png",
      title: "Advanced Wellness Programs",
      description: [
        {
          bold: "Mental Wellness Support",
          text: " – Care for your mind, not just your body.",
        },
        {
          bold: "2 Therapy Sessions + Helpline",
          text: " – Get expert help and 24/7 support when you need it.",
        },
      ],
    },
    {
      image:
        "https://axencare.in/wp-content/uploads/2025/05/Specialist-Benefits.png",
      title: "Specialist Benefits",
      description: [
        {
          bold: "Eye & Dental Cover",
          text: " – 1 eye test + 1 dental consultation per member.",
        },
        {
          bold: "Customized Nutrition Plan",
          text: " – 2 diet consults + personalized meal tracker.",
        },
      ],
    },
    {
      image: "https://axencare.in/wp-content/uploads/2025/04/6.png",
      title: "Medicines & Diagnostics",
      description: [
        {
          bold: "Diagnostics Discount",
          text: " – Enjoy up to 40% off on a wide range of lab tests.",
        },
        {
          bold: "Medicine Discount",
          text: " – Save up to 25% on prescribed medicines and essentials.",
        },
      ],
    },
    {
      image: "https://axencare.in/wp-content/uploads/2025/04/5-1.png",
      title: "Tools & Extras",
      description: [
        {
          bold: "Health Dashboard & Reminders",
          text: " – Track progress with smart alerts.",
        },
        {
          bold: "Health Risk Assessment (HRA)",
          text: " – Annual report to monitor health risks.",
        },
        {
          bold: "Hospitalization Support",
          text: " – Personal health concierge, always there for you.",
        },
      ],
    },
  ];

  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(85deg, rgba(226,232,240,1) 0%, rgba(241,245,249,1) 50%, rgba(196,181,253,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-600">
          Your Complete
        </h2>
        <p className="text-xl md:text-2xl lowercase font-extrabold italic text-violet-600 mt-2">
          health and wellness package
        </p>

        {/* Wavy underline */}
        <div className="mt-4">
          <svg
            width="300"
            height="20"
            viewBox="0 0 300 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-80 h-6 text-violet-600"
          >
            <path
              d="M0 10 C10 0, 20 20, 30 10 S50 0, 60 10 S80 20, 90 10 S110 0, 120 10 S140 20, 150 10 S170 0, 180 10 S200 20, 210 10 S230 0, 240 10 S260 20, 270 10 S290 0, 300 10"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
