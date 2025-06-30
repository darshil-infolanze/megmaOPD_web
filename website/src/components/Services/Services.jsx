import React from "react";

// react icons
import {
  FaRegCheckCircle,
  FaUserShield,
  FaShieldAlt,
  FaChessQueen,
} from "react-icons/fa";

// FeatureCard component for displaying an individual feature with an icon, title, and description.
// It takes 'icon', 'title', and 'description' as props.
const FeatureCard = ({ icon, title, description }) => {
  return (
    // Card container with a dashed border, rounded corners, padding, and centered text.
    // The dashed border visually mimics the image's layout.

    <div className="group p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-start text-left h-full transition-shadow duration-300 hover:shadow-xl">
      {/* Icon */}
      <div className="text-slate-500 group-hover:text-violet-600 mb-4 transition-colors duration-300 group-hover:animate-fadeInUp delay-200">
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold text-violet-600 mb-2 leading-tight"
        style={{ fontFamily: '"Montserrat", Sans-serif' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Main FeatureCards component that renders a grid of FeatureCard components.
const FeatureCards = () => {
  return (
    // Container for the entire grid, with responsive padding and margin.
    // Uses a grid layout that adjusts columns based on screen size (1, 2, or 4 columns).
    <div className="p-4 sm:p-8 lg:p-12 bg-white font-sans m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Feature Card: Clear and Honest Plans */}
        <FeatureCard
          icon={<FaRegCheckCircle size={40} />}
          title="Clear and Honest Plans"
          description="No hidden clauses, no jargon – just straight answers."
        />

        {/* Second Feature Card: Fast and Friendly Support */}
        <FeatureCard
          icon={<FaUserShield size={40} />}
          title="Fast and Friendly Support"
          description="Real people, real help, whenever you need it."
        />

        {/* Third Feature Card: Fresh and Innovative */}
        <FeatureCard
          icon={<FaShieldAlt size={40} />}
          title="Fresh and Innovative"
          description="A new approach to health and wellness, designed with you in mind"
        />

        {/* Fourth Feature Card: Tailored for You */}
        <FeatureCard
          icon={<FaChessQueen size={40} />}
          title="Tailored for You"
          description="Flexible plans that fit your life, not the other way around."
        />
      </div>
    </div>
  );
};

export default FeatureCards;
