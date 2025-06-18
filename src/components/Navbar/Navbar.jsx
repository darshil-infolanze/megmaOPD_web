import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState({
    name: false,
    email: false,
    phone: false,
    plan: false,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePlans = () => setIsPlansOpen(!isPlansOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    let isValid = false;
    if (name === "name") isValid = nameRegex.test(value.trim());
    if (name === "email") isValid = emailRegex.test(value.trim());
    if (name === "phone") isValid = phoneRegex.test(value.trim());
    if (name === "plan") isValid = value !== "";

    setValid((prev) => ({ ...prev, [name]: isValid }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(formData.name.trim()))
      newErrors.name = "Enter a valid name (2–30 characters)";
    if (!emailRegex.test(formData.email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!phoneRegex.test(formData.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit Indian number";
    if (!formData.plan) newErrors.plan = "Please select a plan";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Clear form, close modal
    setFormData({ name: "", email: "", phone: "", plan: "" });
    setErrors({});
    setValid({ name: false, email: false, phone: false, plan: false });
    setShowModal(false);
    // alert("Form submitted successfully!");
  };

  return (
    <header className="bg-white p-4 shadow-sm font-sans relative z-10">
      <nav className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Axen-care" className="w-52 h-auto" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-400 hover:bg-teal-500 hover:text-white"
          >
            <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="text-sm text-center md:flex-grow">
            <Link to="/" className="block font-bold text-lg mt-4 md:inline-block md:mt-0 text-[#198d94] mr-4 p-2">
              Home
            </Link>
            <Link to="/about" className="block font-bold text-lg mt-4 md:inline-block md:mt-0 text-[#198d94] mr-4 p-2">
              About Us
            </Link>

            {/* Plans Dropdown */}
            <div className="relative inline-block">
              <button
                onClick={togglePlans}
                className="mt-4 font-bold text-[#198d94] mr-4 px-3 py-2 flex items-center gap-1"
              >
                <span className="text-lg">Plans</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isPlansOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all ${
                  isPlansOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-1">
                  <Link to="/premium" className="block px-4 py-2 text-[#198d94] font-semibold hover:bg-gray-100">
                    Axen Premium Care
                  </Link>
                  <hr />
                  <Link to="/axenhealthshield" className="block px-4 py-2 text-[#198d94] font-semibold hover:bg-gray-100">
                    Axen Health Shield
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="block font-bold text-lg mt-4 md:inline-block md:mt-0 text-[#198d94] mr-4 p-2">
              Contact us
            </Link>
          </div>

          {/* Call Back Button */}
          <div className="p-6">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#1EA1A9] text-white text-md font-medium rounded-lg px-6 py-4 hover:bg-[#198d94]"
            >
              Request a Call Back
            </button>

            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
                  >
                    ✕
                  </button>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2.5 border rounded-lg text-sm"
                        placeholder="Enter your name"
                      />
                      {valid.name && <span className="absolute top-9 right-3 text-green-600 font-bold">✓</span>}
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2.5 border rounded-lg text-sm"
                        placeholder="you@example.com"
                      />
                      {valid.email && <span className="absolute top-9 right-3 text-green-600 font-bold">✓</span>}
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2.5 border rounded-lg text-sm"
                        placeholder="+91 1234567890"
                      />
                      {valid.phone && <span className="absolute top-9 right-3 text-green-600 font-bold">✓</span>}
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    {/* Plan */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">Select Plan</label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full p-2.5 border rounded-lg text-sm"
                      >
                        <option value="">Select Plan</option>
                        <option value="shield">Axen Health Shield</option>
                        <option value="premium">Axen Health Premium</option>
                      </select>
                      {valid.plan && <span className="absolute top-9 right-3 text-green-600 font-bold">✓</span>}
                      {errors.plan && <p className="text-red-500 text-sm">{errors.plan}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1EA1A9] text-white py-2.5 rounded-lg hover:bg-[#198d94] text-sm font-medium"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;