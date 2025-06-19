import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const SelfInformations = () => {
  const steps = [
    "Self Information",
    "Member 1",
    "Member 2",
    "Member 3",
    "Payment",
  ];
  const stepPaths = ["/self", "/member1", "/member2", "/member3", "/payment"];
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const currentStepIndex = stepPaths.indexOf(location.pathname);

  const formik = useFormik({
    initialValues: {
      selfName: "",
      fatherHusbandName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      panCard: "",
      aadharCard: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
      country: "india",
    },
    validationSchema: Yup.object({
      selfName: Yup.string().required("This field is required"),
      fatherHusbandName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      phone: Yup.string().required("This field is required"),
      dob: Yup.string().required("This field is required"),
      gender: Yup.string().required("This field is required"),
      panCard: Yup.string().required("This field is required"),
      aadharCard: Yup.string()
        .matches(
          /^[0-9]{12}$/,
          "Kindly enter a valid 12-digit Aadhar Card Number"
        )
        .required("This field is required"),
      address1: Yup.string().required("This field is required"),
      address2: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      pincode: Yup.string().required("This field is required"),
      country: Yup.string().required("This field is required"),
    }),

    onSubmit: async (values) => {
      console.log("Self Info Submitted:", JSON.stringify(values, null, 2));
      localStorage.setItem("Self Info", JSON.stringify(values));
      navigate("/member1");
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-violet-500 to-slate-600 flex items-center justify-center p-4 font-inter ">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full mx-auto my-8">
        {/* Stepper */}
        <div className="flex justify-between items-center mb-8 sm:mb-10 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 mx-4"></div>
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isActive = index === currentStepIndex;

            return (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
            ${
              isCompleted
                ? "bg-emerald-500 text-white border-2 border-emerald-500"
                : ""
            }
            ${
              isActive
                ? "bg-white border-2 border-violet-700 text-violet-700"
                : ""
            }
            ${
              !isCompleted && !isActive
                ? "bg-slate-200 border border-slate-300 text-slate-400"
                : ""
            }
          `}
                >
                  {isCompleted ? <FaCheck size={16} /> : index + 1}
                </div>
                <span
                  className={`mt-2 text-center text-xs sm:text-sm whitespace-nowrap
            ${isCompleted ? "text-emerald-600 font-medium" : ""}
            ${isActive ? "text-violet-800 font-semibold" : ""}
            ${!isCompleted && !isActive ? "text-slate-500" : ""}
          `}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Start */}
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Self Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="selfName"
                onChange={formik.handleChange}
                value={formik.values.selfName}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.selfName && formik.errors.selfName && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.selfName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Father/Husband Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fatherHusbandName"
                onChange={formik.handleChange}
                value={formik.values.fatherHusbandName}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.fatherHusbandName &&
                formik.errors.fatherHusbandName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.fatherHusbandName}
                  </p>
                )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.phone}
                </p>
              )}
            </div>
          </div>
          {/* Date of Birth / Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date of Birth */}
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date-picker"
                name="dob"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.dob}
                className="peer w-full h-11 px-3 pt-5 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.dob && formik.errors.dob && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.dob}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-6 mt-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                    className="text-violet-600 focus:ring-violet-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-violet-800">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                    className="text-violet-600 focus:ring-violet-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-violet-800">Female</span>
                </label>
              </div>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.gender}
                </p>
              )}
            </div>
          </div>
          {/* PAN and Aadhar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                PAN Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="panCard"
                onChange={formik.handleChange}
                value={formik.values.panCard}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.panCard && formik.errors.panCard && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.panCard}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Aadhar Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="aadharCard"
                onChange={formik.handleChange}
                value={formik.values.aadharCard}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.aadharCard && formik.errors.aadharCard && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.aadharCard}
                </p>
              )}
            </div>
          </div>

          {/* Address Lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address1"
                onChange={formik.handleChange}
                value={formik.values.address1}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.address1 && formik.errors.address1 && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.address1}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                name="address2"
                onChange={formik.handleChange}
                value={formik.values.address2}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.address1 && formik.errors.address2 && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.address2}
                </p>
              )}
            </div>
          </div>

          {/* City and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.city}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.state && formik.errors.state && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.state}
                </p>
              )}
            </div>
          </div>

          {/* Pincode and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                onChange={formik.handleChange}
                value={formik.values.pincode}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.pincode && formik.errors.pincode && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.pincode}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.country}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelfInformations;
