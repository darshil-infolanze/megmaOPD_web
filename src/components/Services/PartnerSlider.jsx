import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const logos = [
  {
    id: 1,
    name: "Orange HealthLabs",
    image: "https://axencare.in/wp-content/uploads/2025/05/1.png",
  },
  {
    id: 2,
    name: "Redcliffe Labs",
    image: "https://axencare.in/wp-content/uploads/2025/05/2.png",
  },
  {
    id: 3,
    name: "Healthians",
    image: "https://axencare.in/wp-content/uploads/2025/05/3.png",
  },
  {
    id: 4,
    name: "Skinnsi",
    image: "https://axencare.in/wp-content/uploads/2025/05/4.png",
  },
];

const PartnerSlider = () => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Adjust visible items based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleItems(4);
      else if (width >= 768) setVisibleItems(3);
      else if (width >= 480) setVisibleItems(2);
      else setVisibleItems(2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(logos.length / visibleItems);

  const scrollToSlide = (index) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const itemWidth = container.scrollWidth / logos.length;
    container.scrollTo({
      left: itemWidth * visibleItems * index,
      behavior: "smooth",
    });
  };

  const goToNext = () => {
    const next = (currentSlide + 1) % totalSlides;
    setCurrentSlide(next);
    scrollToSlide(next);
  };

  const goToPrev = () => {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prev);
    scrollToSlide(prev);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, visibleItems]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-center">
      <p className="text-xl font-semibold text-violet-600">In Association With</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-400 italic mb-10">
        most trusted experts
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div
          ref={containerRef}
          className="flex overflow-hidden transition-all duration-500"
        >
          {logos.map((logo) => (
            <div
              key={logo.id} // ✅ This fixes the warning
              className="flex-shrink-0 flex items-center justify-center px-4 py-3"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div className="bg-white border border-black rounded-xl shadow-md p-4 flex items-center justify-center h-[100px] w-[180px]">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default PartnerSlider;
