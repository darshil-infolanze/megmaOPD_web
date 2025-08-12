import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobileNo: "",
      plan: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please fill out this field."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please fill out this field."),
      mobileNo: Yup.string()
        .matches(/^\d{10}$/, "Enter a valid 10-digit number")
        .required("Please fill out this field."),
      plan: Yup.string().required("Please fill out this field."),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setErrorMsg("");
        setMsg("");

        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/contact`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              mobileNo: values.mobileNo, // match backend field name
              chooseYourPlan: values.plan,
            }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          setErrorMsg(data.message || "Something went wrong!");
          return;
        }

        setMsg("Thank you! Your message has been submitted successfully.");
        resetForm();
      } catch (error) {
        console.error(error);
        setErrorMsg("Server error. Please try again later.");
      }
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2  p-8 rounded-md ">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Contact Us</h1>
          <p className="text-slate-600 mb-6">
            We'd love to hear from you! Whether you have questions about our
            plans, need assistance, or want more information about our services,
            our team is here to help.
          </p>

          <div className="flex items-start mb-4 text-slate-700">
            <FaLocationDot className="text-violet-600 mt-1 mr-2" />
            <p>
              <span className="text-fuchsia-600 font-bold block">
                Basement, 5B-16, Tilak Nagar New Delhi 110018
              </span>
            </p>
          </div>

          <div className="flex items-center mb-3 text-slate-700">
            <IoMail className="text-violet-600 mr-2" />
            <a
              href="mailto:support@magmaopd.in"
              className="text-fuchsia-600 hover:underline"
            >
              support@magmaopd.in
            </a>
          </div>

          <div className="flex items-center text-slate-700">
            <FaPhone className="text-violet-600 mr-2" />
            <a
              href="tel:8851766923"
              className="text-fuchsia-600 hover:underline"
            >
              8851766923
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2  p-8 rounded-md ">
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Mobile No.
              </label>
              <input
                type="text"
                name="mobileNo"
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobileNo && formik.errors.mobileNo && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.mobileNo}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Choose Your Plan
              </label>
              <select
                name="plan"
                value={formik.values.plan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              >
                <option value="">Select a Package</option>
                <option value="Magma Premium Care">Magma Premium Care</option>
                <option value="Magma Health Shield">Magma Health Shield</option>
              </select>
              {formik.touched.plan && formik.errors.plan && (
                <p className="text-red-500 text-sm mt-1">
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

      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6875277668655!2d77.08406657528936!3d28.63912577566109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d052015491755%3A0xa59ac50c2af42186!2sBasement%2C%205B%2C%2016%2C%20Block%20F%2C%20Tilak%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1750844856004!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
          title="Basement, 5B"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
