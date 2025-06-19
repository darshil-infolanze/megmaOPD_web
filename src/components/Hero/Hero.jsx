import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const images = [
  {
    id: 1,
    url: "https://axencare.in/wp-content/uploads/2025/05/A1.png",
    alt: "Meditating Woman",
    tagTop: "Mental Wellness Support",
    tagBottom: "Big Discounts on Health Essential",
  },
  {
    id: 2,
    url: "https://axencare.in/wp-content/uploads/2025/05/B1.png",
    alt: "Family Wellness",
    tagTop: "Family Health Plan",
    tagBottom: "Free Annual Checkups",
  },
  {
    id: 3,
    url: "https://axencare.in/wp-content/uploads/2025/05/C1.png",
    alt: "Doctor Advice",
    tagTop: "24x7 Doctor Access",
    tagBottom: "Affordable Consultations",
  },
];

const lines = [
  "Protective Health",
  "Complete Wellness",
  "Personalized Support",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % lines.length);
    }, 4000);
    return () => clearInterval(textInterval);
  }, []);

  const current = images[currentIndex];

  return (
  <div className="relative bg-gradient-to-r from-slate-600 to-slate-800 pb-32  overflow-hidden">
      {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative  w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="w-full text-white py-12 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative">
        {/* Left Text */}
        <div className="max-w-xl">
          <p className="text-md text-violet-400 uppercase font-medium tracking-wide">
            Your Complete Health and Wellness Package
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
            All for your family <br />
            <span className="text-violet-400 animate-fadeInUp delay-200">
              {lines[currentLineIndex]}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white mt-4">
            Access comprehensive health coverage with expert guidance,
            discounts, and additional wellness benefits at an affordable price.
          </p>

          <a
           href="/about"
            className="mt-6  text-lg inline-flex items-center gap-2  font-semibold tracking-wide underline-offset-4 hover:text-fuchsia-300 hover:underline"
          >
            Start Exploring <ArrowRight size={20} />
          </a>
        </div>

        {/* Right Image Section */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center relative">
          {/* Image */}
          <div className="relative mt-10">
            <img
              src={current.url}
              alt={current.alt}
              className="rounded-lg object-cover w-full h-auto transition-opacity duration-700"
            />
          </div>

          {/* Dots */}
          {/* <div className="flex justify-center mt-16 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-3.5 h-3.5 bg-black"
                    : "w-2.5 h-2.5 bg-[#1da7aa]/60"
                }`}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
