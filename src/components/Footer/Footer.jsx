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
    <footer className="relative bg-slate-900 text-white py-10 px-5">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-4 mb-3">
            <img src={logo} alt="Logo" className="w-14 sm:w-16" />
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                Magma
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-violet-600">
                OPD
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-300 max-w-xs">
            Trusted healthcare solutions tailored for your well-being. 24/7
            access to medical support and consultation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-violet-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-violet-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/premium"
                className="hover:text-violet-400 transition-colors"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-violet-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policies / Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              { label: "Privacy Policy", path: "privacy" },
              { label: "Terms & Conditions", path: "term" },
              { label: "Refund Policy", path: "refund" },
              { label: "E-Shipping & Delivery", path: "eshipping" },
            ].map(({ label, path }) => (
              <li key={path}>
                <a
                  href={`/${path}`}
                  className="hover:text-violet-400 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <FaLocationDot className="text-violet-400 mt-1" />
              <span className="ml-2">
                201-Manglam Paradise Mall, Manglam Place, Sector 3, Rohini,
                Delhi, 110085
              </span>
            </div>
            <div className="flex items-center">
              <IoMail className="text-violet-400" />
              <a
                href="mailto:hello@megmaopd.in"
                className="ml-2 hover:text-violet-400 transition-colors"
              >
                hello@megmaopd.in
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-violet-400" />
              <a
                href="tel:011-43658206"
                className="ml-2 hover:text-violet-400 transition-colors"
              >
                011-43658206
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-1 mt-10 mb-6 bg-gradient-to-r from-slate-600 via-slate-700 to-violet-700"></div>

      {/* Bottom Text & Social Icons */}
      <div className="text-center text-sm text-gray-300 space-y-4">
        <p>Copyright  &copy; {new Date().getFullYear()} Magma OPD. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
