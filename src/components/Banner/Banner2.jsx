// src/components/FAQSection.jsx
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"; // Using Heroicons for the plus/minus icons
import faq from "../../assets/faq.avif";
const faqData = [
  {
    question: "What is the coverage included in Magma OPD plans?",
    answer:
      "Each plan offers a range of benefits such as discounts on diagnostic tests, free health check-ups, eye and dental benefits, mental wellness support, and emergency room coverage. The extent of the coverage depends on the selected plan.",
  },
  {
    question: "How do I choose the best plan for me?",
    answer:
      "Choosing the best plan depends on your individual healthcare needs, budget, and desired coverage. We recommend reviewing the detailed plan descriptions on our website or contacting our support team for personalized assistance.",
  },
  {
    question: "Are mental wellness services covered?",
    answer:
      "Yes, many of our Magma OPD plans include coverage for mental wellness services, including therapy sessions, counseling, and psychiatric consultations. Please check your specific plan details for more information.",
  },
  {
    question: "Do the plans include discounts on medicines?",
    answer:
      "Absolutely! Several Magma OPD plans offer discounts on prescribed medicines at our network pharmacies. This is designed to help make your healthcare more affordable.",
  },
  {
    question: "What is the process to enroll in a plan?",
    answer:
      "Enrolling in an Magma OPD plan is simple. You can visit our website, select your desired plan, fill out the online application form, and complete the payment process. Our team will then reach out to confirm your enrollment.",
  },
  {
    question: "Are there any age restrictions for the plans?",
    answer:
      "Magma OPD plans are designed to cater to a wide range of age groups. While some plans may have specific age-related features, most are available to individuals and families of all ages. Please refer to individual plan details for any restrictions.",
  },
  {
    question: "Can I switch between plans after enrolling?",
    answer:
      "Yes, in most cases, you can switch between Magma OPD plans. There might be specific terms and conditions, such as a waiting period or a small administrative fee, associated with plan changes. Contact our customer service for guidance on switching plans.",
  },
];

const FAQSection = () => {
  // State to manage which FAQ item is open. Initialize with 0 to have the first one open by default.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // If clicked item is already open, close it; otherwise, open it.
  };

  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Section for Image */}
        <div className="relative flex flex-col items-center justify-center min-h-[300px] lg:min-h-[500px] xl:min-h-[600px] p-4">
          {/* Background text as seen in the image */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-200 opacity-70 whitespace-nowrap z-0 select-none">
            Frequently <br /> Ask Question
          </h2>

          {/* This div is the placeholder for the image. */}
          {/* You can add an <img> tag here directly if you have the image, e.g.: */}
          {
            <img
              src={faq}
              alt="FAQ illustration"
              className="relative max-w-full h-auto object-contain"
            />
          }
          {/* For now, it's left empty as requested, with a min-height to reserve space */}
          {/* If you want to put the placeholder image from the provided image: */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* You would place your image here */}
            {/* <img src="/path/to/your/image.png" alt="People discussing healthcare" className="max-w-full h-auto" /> */}
          </div>
        </div>

        {/* Right Section for FAQ content */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              FAQ's
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-violet-600 italic leading-tight mt-2">
              How we can support your healthcare journey
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  <span className="text-left text-base font-semibold text-slate-600 hover:text-violet-500">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <MinusIcon className="h-5 w-5 text-slate-600 hover:text-violet-500 flex-shrink-0" />
                  ) : (
                    <PlusIcon className="h-5 w-5 text-slate-600 hover:text-violet-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-5 text-slate-700 bg-white border-t border-gray-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
