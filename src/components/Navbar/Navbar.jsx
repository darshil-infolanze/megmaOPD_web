import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
// Navbar component for the application, featuring a logo, navigation, and a call-to-action button.
const Navbar = () => {
  // State to manage the visibility of the mobile navigation menu.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage the visibility of the plans dropdown
  const [isPlansOpen, setIsPlansOpen] = useState(false);

  // Function to toggle the mobile menu's open/close state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the plans dropdown
  const togglePlans = () => {
    setIsPlansOpen(!isPlansOpen);
  };

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add form validation here if needed
    // For now, we'll just assume it's valid

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      plan: "",
    });

    // Clear errors
    setErrors({});

    // Close the modal
    setShowModal(false);

    // Optionally: show success message
    alert("Form submitted successfully!");

  

  };

  return (
    // Main header container:
    // - Padded horizontally and vertically.
    // - White background with a subtle shadow at the bottom.
    // - Uses flexbox to align items.
    // - Responsive: on small screens, items might stack or align differently.
    <header className="bg-white p-4 shadow-sm font-sans relative z-10">
      <nav className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Axen-care" className="w-40 object-contain" />
          </Link>
        </div>

        {/* Mobile menu toggle button (hamburger icon) */}
        {/* Visible only on small screens, hidden on medium and larger. */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-400 hover:text-white hover:bg-teal-500"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links and Call-to-Action Button */}
        {/* Hidden on small screens by default, shown if menu is open.
            Always visible and aligned right on medium and larger screens. */}
        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm text-center md:flex-grow">
            {/* Navigation Links */}
            <Link
              to="/"
              className="block font-bold mt-4 md:inline-block md:mt-0 text-[#198d94]  mr-4 p-2 rounded-md transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block font-bold mt-4 md:inline-block md:mt-0 text-[#198d94]  mr-4 p-2 rounded-md transition duration-300"
            >
              About Us
            </Link>
            {/* Plans Dropdown */}

            <div className="relative inline-block">
              <button
                onClick={togglePlans}
                className="mt-4 font-bold text-[#198d94] mr-4 px-3 py-2 rounded-md transition duration-300 flex items-center gap-1"
              >
                <span>Plans</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isPlansOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  isPlansOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-1">
                  <Link
                    to="/premium"
                    className="block px-4 py-2 text-sm text-[#198d94] hover:bg-gray-100"
                  >
                    Axen Premium Care
                  </Link>
                  <hr />
                  <Link
                    to="/axenhealthshield"
                    className="block px-4 py-2 text-sm text-[#198d94] hover:bg-gray-100"
                  >
                    Axen Health Shield
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="block font-bold mt-4 md:inline-block md:mt-0 text-[#198d94]  mr-4 p-2 rounded-md transition duration-300"
            >
              Contact us
            </Link>
          </div>
          {/* Call-to-Action Button */}

          <div className="p-6">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#1EA1A9] text-white font-medium rounded-lg text-sm px-6 py-4 hover:bg-[#198d94] focus:ring-4 focus:ring-blue-300"
            >
              Request a Call Back
            </button>

            {showModal && (
              <div className="fixed inset-0 !z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative w-full z-50 max-w-md bg-white rounded-lg shadow dark:bg-gray-800">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-1 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        required
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        required
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        required
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Choose Your Plan
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        required
                      >
                        <option value="">Select Plan</option>
                        <option value="shield">Axen Health Shield</option>
                        <option value="premium">Axen Health Premium</option>
                      </select>
                      {errors.plan && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.plan}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1EA1A9] text-white px-4 py-2.5 rounded-lg hover:bg-[#198d94] text-sm font-medium"
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
