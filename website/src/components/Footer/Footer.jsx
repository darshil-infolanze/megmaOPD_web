import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import logo from "../../assets/logo.png";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button after 200px scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
   <footer className="relative bg-slate-900 text-white py-10 px-4 sm:px-6">
  {/* Top Grid Section */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
    {/* Logo & About */}
    <div>
      <div className="flex items-center space-x-3 mb-4">
        <img src={logo} alt="Logo" className="w-12 sm:w-14" />
        <div className="flex items-baseline space-x-1">
          <span className="text-xl sm:text-2xl font-bold text-white">Magma</span>
          <span className="text-xl sm:text-2xl font-bold text-violet-600">OPD</span>
        </div>
      </div>
      <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
        Trusted healthcare solutions tailored for your well-being. 24/7 access to medical support and consultation.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-base sm:text-lg font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        {["Home", "About Us", "Plans", "Contact"].map((label, idx) => (
          <li key={idx}>
            <a href={`/${label.toLowerCase().replace(" ", "")}`} className="hover:text-violet-400 transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Policies / Services */}
    <div>
      <h4 className="text-base sm:text-lg font-semibold mb-3">Our Services</h4>
      <ul className="space-y-2 text-sm text-slate-300">
        {[
          { label: "Privacy Policy", path: "privacy" },
          { label: "Terms & Conditions", path: "term" },
          { label: "Refund Policy", path: "refund" },
          { label: "E-Shipping & Delivery", path: "eshipping" },
        ].map(({ label, path }) => (
          <li key={path}>
            <a href={`/${path}`} className="hover:text-violet-400 transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-base sm:text-lg font-semibold mb-3">Contact Us</h4>
      <div className="space-y-3 text-sm leading-relaxed">
        <div className="flex items-start gap-2">
          <FaLocationDot className="text-violet-400 mt-1" />
          <span>Basement, 5B-16, Tilak Nagar, New Delhi 110018</span>
        </div>
        <div className="flex items-center gap-2">
          <IoMail className="text-violet-400" />
          <a href="mailto:support@magmaopd.in" className="hover:text-violet-400">
            support@magmaopd.in
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-violet-400" />
          <a href="tel:8851766923" className="hover:text-violet-400">
            8851766923
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="w-full h-[1px] mt-10 mb-6 bg-gray-600"></div>

  {/* Bottom bar */}
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
    {/* Social Icons */}
    <div className="flex justify-center sm:justify-start gap-6 text-lg text-white">
      {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
        <a
          key={idx}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400 transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>

    {/* Copyright */}
    <p className="text-center sm:text-right w-full sm:w-auto">
      &copy; {new Date().getFullYear()}{" "}
      <a href="/about" className="text-white hover:text-violet-400 underline transition-colors">
        Magma OPD
      </a>
      . All rights reserved.
    </p>
  </div>

  {/* Scroll to Top Button */}
  {showScroll && (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  )}
</footer>

  );
};

export default Footer;
