import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/logo.png"; // Adjust as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      plan: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]{2,30}$/, "Enter a valid name (2–30 characters)")
        .required("Name is required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
      phone: Yup.string()
        // .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian number")
        .matches(/^\d{10}$/, "Enter a valid 10-digit phone number")
        .required("Phone number is required"),
      plan: Yup.string().required("Please select a plan"),
    }),
    onSubmit: (values, { resetForm }) => {
      const hasError = Object.values(formik.errors).length > 0;
        if (hasError) {
        setErrorMsg('Please fix the errors before submitting.')
        return;
      }

      console.log("Form Data", values);
      resetForm();
      setErrorMsg("");
      setMsg("Thank you! Your message has been submitted successfully.");
      setTimeout(() => {
    setShowModal(false);
    setMsg("");
  }, 5000);
    },
  });

  return (
    <header className="bg-white shadow-sm font-sans relative z-10">
      <nav className="container mx-auto flex items-center justify-evenly flex-wrap">
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Magma-OPD" className="w-20 h-auto" />
            <div className="flex items-baseline space-x-1">
              <span className="text-4xl font-bold text-slate-800">Magma</span>
              <span className="text-4xl font-bold text-violet-800">OPD</span>
            </div>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-4 text-slate-600 border border-slate-400 p-2 rounded hover:bg-slate-700 hover:text-white transition"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>

        {/* Main Menu */}
        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm text-center md:flex-grow">
            <Link
              to="/"
              className="block font-bold text-lg mt-4 md:inline-block md:mt-0 text-slate-500 hover:text-violet-700 mr-4 p-2 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block font-bold text-lg mt-4 md:inline-block md:mt-0 text-slate-500 hover:text-violet-700 mr-4 p-2 transition-colors duration-300"
            >
              About Us
            </Link>

            {/* Plans Dropdown */}
            <div className="relative inline-block group">
              <button className="mt-4 font-bold text-slate-600 hover:text-violet-600 mr-4 px-3 py-2 flex items-center gap-1 transition-colors duration-300">
                <span className="text-lg">Plans</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link
                    to="/magmapremiumcare"
                    className="block px-4 py-2 text-slate-500 hover:text-violet-500 font-semibold hover:bg-gray-100"
                  >
                    Magma Premium Care
                  </Link>
                  <hr className="w-full border-t border-gray-300 " />
                  <Link
                    to="/magmahealthshield"
                    className="block px-4 py-2 text-slate-500 hover:text-violet-500 font-semibold hover:bg-gray-100"
                  >
                    Magma Health Shield
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="block font-bold text-lg mt-4 md:inline-block md:mt-0 text-slate-500 hover:text-violet-700 mr-4 p-2 transition-colors duration-300"
            >
              Contact us
            </Link>
          </div>

          {/* Callback Button */}
          <div className="p-6 flex justify-center items-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-violet-700 to-slate-800 text-white text-md font-medium rounded-lg px-4 py-3 hover:from-violet-600 hover:to-slate-700 transition-all duration-200"
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

                  <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    {/* Name */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                        placeholder="you@example.com"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                        placeholder="+91 1234567890"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Plan */}
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium">
                        Select Plan
                      </label>
                      <select
                        name="plan"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.plan}
                        className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                      >
                        <option value="">Select Plan</option>
                        <option value="shield">Magma Health Shield</option>
                        <option value="premium"> Magma Premium Care</option>
                      </select>
                      {formik.touched.plan && formik.errors.plan && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.plan}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-violet-600 text-white font-bold py-2 rounded-md hover:bg-violet-700 transition"
                    >
                      Submit
                    </button>
                    {errorMsg && (
              <div className="mt-4 border border-yellow-400 text-yellow-800 bg-yellow-100 px-4 py-2 rounded text-sm">
                {errorMsg}
              </div>
            )}
                  </form>
                  {msg && (
            <div className="mt-4 border border-green-400 text-green-800 bg-green-100 px-4 py-2 rounded text-sm">
              {msg}
            </div>
          )}
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
