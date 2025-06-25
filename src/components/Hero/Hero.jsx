import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

const images = [
  {
    id: 1,
    url: c1,
    alt: "Meditating Woman",
    tagTop: "Mental Wellness Support",
    tagBottom: "Big Discounts on Health Essentials",
  },
  {
    id: 2,
    url: c2,
    alt: "Family Wellness",
    tagTop: "Family Health Plan",
    tagBottom: "Free Annual Checkups",
  },
  {
    id: 3,
    url: c3,
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
    <div className="relative bg-gradient-to-r from-slate-600 to-slate-800 pb-32 overflow-hidden">
      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative w-full h-[100px]"
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
            className="mt-6 text-lg inline-flex items-center gap-2 font-semibold tracking-wide underline-offset-4 hover:text-fuchsia-300 hover:underline"
          >
            Start Exploring <ArrowRight size={20} />
          </a>
        </div>
        {/* Right Image */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center relative">
          <div className="relative mt-10 flex items-center justify-center">
            {/* TagTop */}
            <div className="absolute top-2 left-2 bg-slate-800/80 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md border border-violet-300">
              {current.tagTop}
            </div>

            {/* TagBottom */}
            <div className="absolute bottom-2 right-2 bg-violet-600/80 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md border border-slate-200">
              {current.tagBottom}
            </div>

            {/* Circular Image with Gradient Ring */}
            <div className="p-[15px] bg-gradient-to-r from-slate-600 to-slate-800 rounded-full inline-block">
              <img
                src={current.url}
                alt={current.alt}
                className="rounded-full object-containt w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] border-4 border-white shadow-xl transition-opacity duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
