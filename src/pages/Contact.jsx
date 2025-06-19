import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      plan: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please fill out this field."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please fill out this field."),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Enter a valid 10-digit number")
        .required("Please fill out this field."),
      plan: Yup.string().required("Please fill out this field."),
    }),
    onSubmit: (values, { resetForm }) => {
      const hasError = Object.values(formik.errors).length > 0;
      if (hasError) {
        setErrorMsg(
          "One or more fields have an error. Please check and try again."
        );
        return;
      }
      console.log("Submitted:", values);
      resetForm();
      setErrorMsg("");
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
                201-Manglam Paradise Mall, Plot no 8, Manglam Place,
                <br />
                Sector 3, Rohini Delhi, 110085
              </span>
            </p>
          </div>

          <div className="flex items-center mb-3 text-slate-700">
            <IoMail className="text-violet-600 mr-2" />
            <a
              href="mailto:hello@axencare.in"
              className="text-fuchsia-600 hover:underline"
            >
              hello@magmaopd.in
            </a>
          </div>

          <div className="flex items-center text-slate-700">
            <FaPhone className="text-violet-600 mr-2" />
            <a
              href="tel:011-43658206"
              className="text-fuchsia-600 hover:underline"
            >
              011-43658206
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
                className="w-full border border-gray-400 rounded-md px-3 py-2"
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
                className="w-full border border-gray-400 rounded-md px-3 py-2"
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
                name="mobile"
                className="w-full border border-gray-400 rounded-md px-3 py-2"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.mobile}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Choose Your Plan
              </label>
              <select
                name="plan"
                className="w-full border border-gray-400 rounded-md px-3 py-2 bg-white"
                value={formik.values.plan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select a Package</option>
                <option value="premium">Axen Premium Care</option>
                <option value="shield">Axen Health Shield</option>
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
        </div>
      </div>

      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.720589706074!2d77.11202057529162!3d28.69800367562906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e4b7aa4e19%3A0x9dd22017492dcc53!2sManglam%20Paradise%20Mall!5e0!3m2!1sen!2sin!4v1750317807847!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
          title="Manglam Paradise Mall"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
