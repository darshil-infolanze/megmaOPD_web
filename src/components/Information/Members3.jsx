import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const Members3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = ["Self Information", "Member 1", "Member 2", "Member 3", "Payment"];
  const stepPaths = ["/self", "/member1", "/member2", "/member3", "/payment"];
  const currentStepIndex = stepPaths.indexOf(location.pathname);

  const formik = useFormik({
    initialValues: {
      name: "",
      relation: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      relation: Yup.string().required("Relation is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Enter a valid 10-digit number")
        .required("Phone is required"),
      dob: Yup.string().required("DOB is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: (values) => {
      console.log("Member 3 Data:", JSON.stringify(values, null, 2));
      localStorage.setItem("member3", JSON.stringify(values));
      navigate("/payment");
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-violet-500 to-slate-600 flex items-center justify-center p-4 font-inter">
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
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${isCompleted ? "bg-emerald-500 text-white border-2 border-emerald-500" : ""}
                    ${isActive ? "bg-white border-2 border-violet-700 text-violet-700" : ""}
                    ${!isCompleted && !isActive ? "bg-slate-200 border border-slate-300 text-slate-400" : ""}
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

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">Member 3</label>
              <input
                type="text"
                name="name"
                placeholder="Member 3 Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-600 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">Relation</label>
              <select
                name="relation"
                value={formik.values.relation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              >
                <option value="">- Select -</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.relation && formik.errors.relation && (
                <p className="text-red-600 text-sm mt-1">{formik.errors.relation}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">Phone/Mobile</label>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-600 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">DOB</label>
              <input
                type="date"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              />
              {formik.touched.dob && formik.errors.dob && (
                <p className="text-red-600 text-sm mt-1">{formik.errors.dob}</p>
              )}
            </div>
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">Gender</label>
              <select
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="peer w-full h-11 px-3 pt-5 pb-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent focus:ring-offset-violet-800"
              >
                <option value="">- Select -</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-red-600 text-sm mt-1">{formik.errors.gender}</p>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate("/member2")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Members3;
