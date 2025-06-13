import React from 'react';
import FeatureCard from './featurecard';
import { healthShieldFeatures } from './healthShieldFeatures';

const HealthShieldFeaturesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Comprehensive
            <span className="block text-green-600 text-2xl font-normal mt-1">
              Health Shield Benefits
            </span>
          </h2>
          {/* Wavy line effect */}
          <svg className="mx-auto mt-4" width="100" height="15" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 7.5C10 2.5 20 12.5 30 7.5C40 2.5 50 12.5 60 7.5C70 2.5 80 12.5 90 7.5C100 2.5 110 12.5 120 7.5" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthShieldFeatures.map((feature, index) => (
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

export default HealthShieldFeaturesSection; 