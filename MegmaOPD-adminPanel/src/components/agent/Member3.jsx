import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";
import axiosConfig from "../../redux/axiosConfig";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateMembers3 } from "../../redux/features/formSlice";

const Member3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [paymentLink, setPaymentLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const agentData = useSelector((state) => state.form?.member3 || {});

  // Load full formData on mount
  useEffect(() => {
    const self = JSON.parse(localStorage.getItem("selfInfo") || "{}");
    const member1 = JSON.parse(localStorage.getItem("member1") || "{}");
    const member2 = JSON.parse(localStorage.getItem("member2") || "{}");
    const member3 = JSON.parse(localStorage.getItem("member3") || "{}");

    // Sync Redux if it's empty
    if (!agentData || Object.keys(agentData).length === 0) {
      dispatch(updateMembers3(member3));
    }

    const combined = {
      ...self,
      members: [member1, member2, member3],
      plan: self.plan,
      // amountPaid: self.amountPaid,
      amountPaid: 1,
    };
    setFormData(combined);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  const steps = ["Self Information", "Member 1", "Member 2", "Member 3"];
  const stepPaths = ["/self", "/member1", "/member2", "/member3"];
  const currentStepIndex = stepPaths.indexOf(location.pathname);

  const formik = useFormik({
    initialValues: {
      name: agentData.name || "",
      relation: agentData.relation || "",
      email: agentData.email || "",
      phone: agentData.phone || "",
      dob: agentData.dob || "",
      gender: agentData.gender || "",
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
    onSubmit: async (values) => {
      dispatch(updateMembers3(values));
      localStorage.setItem("member3", JSON.stringify(values));
      setLoading(true);

      try {
        const { data } = await axiosConfig.post("/submit-agent", formData);
        if (data.paymentLink) {
          setPaymentLink(data.paymentLink);
        } else {
          alert("Something went wrong generating the link.");
        }
      } catch (err) {
        console.error(err);
        alert("Error submitting the form.");
      } finally {
        setLoading(false);
      }
    },
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-100 via-violet-500 to-slate-600 font-inter">
      <div className="w-full max-w-4xl p-6 mx-auto my-8 bg-white shadow-2xl rounded-3xl sm:p-8 lg:p-10">
        {/* Stepper */}
        <div className="overflow-x-auto">
          <div className="relative flex items-center justify-between mb-8 sm:mb-10">
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
              <label className="block mb-1 font-medium text-md text-violet-800">
                Member 3
              </label>
              <input
                type="text"
                name="name"
                placeholder="Member 3 Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg h-11 text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-md text-violet-800">
                Relation
              </label>
              <select
                name="relation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.relation}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg h-11 text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              >
                <option value="">- Select -</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.relation && formik.errors.relation && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.relation}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block mb-1 font-medium text-md text-violet-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg h-11 text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium text-md text-violet-800">
                Phone/Mobile
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg h-11 text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block font-medium text-md text-violet-800">
                DOB
              </label>
              <input
                type="date"
                name="dob"
                max={today}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg h-11 text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              {formik.touched.dob && formik.errors.dob && (
                <p className="mt-1 text-sm text-red-600">{formik.errors.dob}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-md text-violet-800">
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
                    className="border-gray-300 text-violet-600 focus:ring-violet-500"
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
                    className="border-gray-300 text-violet-600 focus:ring-violet-500"
                  />
                  <span className="ml-2 text-sm text-violet-800">Female</span>
                </label>
              </div>
              {formik.touched.gender && formik.errors.gender && (
                <p className="mt-1 text-xs text-red-500">
                  {formik.errors.gender}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => {
                dispatch(updateMembers3(formik.values));
                localStorage.setItem("member3", JSON.stringify(formik.values));
                navigate("/member2");
              }}
              className="px-6 py-2 font-bold text-white transition transform bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-purple-600 rounded w-60 hover:bg-purple-700"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Payment Link"}
            </button>
          </div>
        </form>

        {paymentLink && (
          <div className="p-4 mt-6 text-green-800 bg-green-100 border rounded">
            <p className="mb-1 font-medium">
              Send this payment link to the user:
            </p>
            <a
              href={paymentLink}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {paymentLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Member3;
