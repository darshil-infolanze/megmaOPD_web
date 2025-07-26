import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateMember3 } from "../../redux/formSlice";

const Members3 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = [
    "Self Information",
    "Member 1",
    "Member 2",
    "Member 3",
    "Payment",
  ];
  const stepPaths = ["/self", "/member1", "/member2", "/member3", "/payment"];
  const currentStepIndex = stepPaths.indexOf(location.pathname);
  const dispatch = useDispatch()
  const selfData = useSelector((state)=> state.form?.member3||{})

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     relation: "",
  //     email: "",
  //     phone: "",
  //     dob: "",
  //     gender: "",
  //   },
  const formik = useFormik({
        initialValues: {
          name: selfData.name || "",
          relation: selfData.relation || "",
          email: selfData.email || "",
          phone: selfData.phone || "",
          dob: selfData.dob || "",
          gender: selfData.gender || "",
        },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      relation: Yup.string().required("Relation is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit number")
        .required("Phone is required"),
      dob: Yup.date()
        .max(new Date(), "Future dates are not allowed")
        .required("Date of birth is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      dispatch(updateMember3(values))
      console.log("Member 3 Data:", JSON.stringify(values, null, 2));
      localStorage.setItem("member3", JSON.stringify(values));
      navigate("/payment");
    },
  });

  const today = new Date().toISOString().split("T")[0]; // 👈 for max DOB

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-violet-500 to-slate-600 flex items-center justify-center p-4 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full mx-auto my-8">
        {/* Stepper */}
         <div className="overflow-x-auto">
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
               </div>
        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Member 3
              </label>
              <input
                type="text"
                name="name"
                placeholder="Member 3 Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Relation
              </label>
              <select
                name="relation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.relation}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              >
                <option value="">- Select -</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.relation && formik.errors.relation && (
                <p className="text-red-600 text-sm mt-1">
                  {formik.errors.relation}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-md font-medium text-violet-800 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="block text-md font-medium text-violet-800">
                Phone/Mobile
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {formik.errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-md font-medium text-violet-800">
                DOB
              </label>
              <input
                type="date"
                name="dob"
                max={today} // ❗ Restrict future dates
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.dob && formik.errors.dob && (
                <p className="text-red-600 text-sm mt-1">{formik.errors.dob}</p>
              )}
            </div>
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
                    onBlur={formik.handleBlur}
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
                    onBlur={formik.handleBlur}
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
