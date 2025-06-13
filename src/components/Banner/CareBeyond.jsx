import React from "react";
import b1 from "../../assets/b1.webp"
const CareBeyondCoverage = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative">
        {/* Text Section */}
        <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
          {/* Background Text */}
          <div className=" absolute -top-12 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 text-[40px] sm:text-[60px] md:text-[72px] font-extrabold italic text-[#8CC63E30] leading-tight z-0 opacity-90">
            <div>Care Beyond</div>
            <div>Coverage</div>
          </div>

          {/* Foreground Text */}
          <div className="relative z-10 mt-8 text-center ">
            <h2 className="text-[#1EA1A9] text-2xl sm:text-3xl font-bold leading-tight">
              <span className="d-block">
                {" "}
                Coverage That Covers <br /> You.
              </span>
            </h2>

            <h3 className="mt-4 text-[#8bc34a] text-2xl sm:text-3xl font-bold italic leading-snug">
              real stories.
              <br />
              real protection.
            </h3>

            <p className="text-start">
              We believe that healthcare should be accessible, comprehensive,
              and personalized. Our mission is to transform the healthcare
              experience by offering tailored insurance plans that prioritize
              your well-being.
            </p>

            <ul className="list-none space-y-3 text-base sm:text-lg text-[#333] mt-6 text-left">
              <li className="before:content-['»'] before:mr-2 font-medium ">
                Discounts on Diagnostic Tests & Medicines
              </li>
              <li className="before:content-['»'] before:mr-2 font-medium ">
                Free Comprehensive Health Check-Up
              </li>
              <li className="before:content-['»'] before:mr-2 font-medium ">
                Eye & Dental Benefits
              </li>
              <li className="before:content-['»'] before:mr-2 font-medium ">
                Mental Wellness Benefits
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={b1}
            alt="Family protection"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CareBeyondCoverage;
