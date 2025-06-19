import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import logo from "../../assets/logo.png";

const AxenCareFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-200 to-violet-200 text-slate-800 py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col">
          <img src={logo} alt="Axen-Care" className="object-contain w-20" />
          <div className="flex items-baseline space-x-1 mt-2">
            <span className="text-4xl font-bold text-slate-800">Magma</span>
            <span className="text-4xl font-bold text-violet-600">OPD</span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed max-w-md pt-3">
            We believe that healthcare should be accessible, comprehensive, and
            personalized.
          </p>

          <div className="mt-8 text-slate-600 text-sm space-y-2">
            <div className="flex items-start">
              <FaLocationDot className="text-violet-600 mt-1" />
              <span className="ml-2">
                201-Manglam Paradise Mall, Plot no 8, Manglam Place, Sector 3,
                Rohini Delhi, 110085
              </span>
            </div>
            <div className="flex items-center">
              <IoMail className="text-violet-600" />
              <a
                href="mailto:hello@megmaopd.in"
                className="ml-2 hover:underline text-violet-700 font-medium"
              >
                hello@megmaopd.in
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-violet-600" />
              <a
                href="tel:011-43658206"
                className="ml-2 hover:underline text-violet-700 font-medium"
              >
                011-43658206
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/about"
                className="text-slate-700 hover:text-violet-700 font-semibold transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/premium"
                className="text-slate-700 hover:text-violet-700 font-semibold transition-colors"
              >
                plans
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-slate-700 hover:text-violet-700 font-semibold transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-3 mt-6">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white  hover:bg-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white  hover:bg-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-red-600 text-white  hover:bg-red-700"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Privacy Policy", path: "privacy" },
              { label: "Terms & Conditions", path: "term" },
              { label: "Refund Policy", path: "refund" },
              { label: "E-Shipping & Delivery", path: "eshipping" },
            ].map(({ label, path }) => (
              <li key={path}>
                <a
                  href={`/${path}`}
                  className="text-slate-700 hover:text-violet-700 font-semibold transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default AxenCareFooter;
