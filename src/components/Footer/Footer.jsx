// AxenCareFooter.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5"; // Importing social media icons
import logo from "../../assets/logos.webp";
const AxenCareFooter = () => {
  return (
    <footer className="bg-[#8CC63E1F] py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Left Section: Logo and Tagline */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col">
          <img src={logo} alt="Axen-Care" className="object-contain w-40" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-md pt-3">
            We believe that healthcare should be accessible, comprehensive, and
            personalized.
          </p>

          {/* Contact Information */}
          <div className="mt-8 text-gray-600 text-sm">
            <div className="flex items-start mb-2">
              <FaLocationDot className="text-[#8CC63E]" />
              <span className="text-[#1EA1A9]">
                &nbsp;&nbsp;201-Manglam Paradise Mall, Plot no 8, Manglam Place,
                Sector 3, Rohini Delhi, 110085
              </span>
            </div>
            <div className="flex items-center mb-2">
              <IoMail className="text-[#8CC63E]" />
              <a
                href="mailto:hello@axencare.in"
                className="hover:underline text-[#1EA1A9]"
              >
                {" "}
                &nbsp;&nbsp;hello@axencare.in
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-[#8CC63E]" />
              <a
                href="tel:011-43658206"
                className="hover:underline text-[#1EA1A9]"
              >
                &nbsp;&nbsp;011-43658206
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/about"
                className="text-gray-600 hover:text-[#61CE70] transition-colors duration-200 font-bold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/premium"
                className="text-gray-600 hover:text-[#61CE70] transition-colors duration-200 font-bold"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-600 hover:text-[#61CE70] transition-colors duration-200 font-bold"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-6">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/privacy"
                className="text-gray-600 hover:text-[#61CE70] transition-colors duration-200 font-bold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/term"
                className="text-gray-600 hover:text-[#61CE70] transition-colors duration-200 font-bold"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="/refund"
                className="text-gray-600 hover:text-[#61CE70] transition-colors duration-200 font-bold"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="/eshipping"
                className="text-gray-600 hover:text-[#61CE70] transition-colors duration-200 font-bold"
              >
                E-Shipping & Delivery Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default AxenCareFooter;
