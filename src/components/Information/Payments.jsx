import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const steps = [
  "Self Information",
  "Member 1",
  "Member 2",
  "Member 3",
  "Payment",
];

const Payments = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [formData, setFormData] = useState({});


  // Fetch and combine data from localStorage
  useEffect(() => {
    const self = JSON.parse(localStorage.getItem("selfInfo") || "{}");
    const member1 = JSON.parse(localStorage.getItem("member1") || "{}");
    const member2 = JSON.parse(localStorage.getItem("member2") || "{}");
    const member3 = JSON.parse(localStorage.getItem("member3") || "{}");
    window.scrollTo({ top: 0, behavior: "smooth" });
    const combined = {
      selfInfo: self,
      members: [member1, member2, member3],
    };

    setFormData(combined);
  }, []);

  const handleSubmit = () => {
    console.log("Final Submission Data:", formData);
    navigate("/submit", { state: formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-violet-500 to-slate-600 flex items-center justify-center p-4 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full mx-auto my-8">

        {/* Stepper */}
        <div className="flex justify-between items-center mb-8 sm:mb-10 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -z-10 mx-4"></div>
          {steps.map((step, index) => {
            const isCompleted = index < steps.length - 1;
            const isActive = index === steps.length - 1;

            return (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${isCompleted ? "bg-emerald-500 text-white border-2 border-emerald-500" : ""}
                  ${isActive ? "bg-white border-2 border-violet-700 text-violet-700" : ""}
                  ${!isCompleted && !isActive ? "bg-slate-200 text-slate-500 border border-slate-300" : ""}
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

        {/* Terms Text */}
        <div className="text-gray-700 text-sm mb-4">
          <p>
            Magma OPD shall not be held responsible for any payments made outside
            of our official website or authorized payment gateways. Customers
            are advised to ensure that all payments for health plans or services
            are made directly through our secure platform. The company will not
            be liable for any loss or dispute arising from transactions made
            through third parties or unauthorized agents.
          </p>
        </div>

        {/* Checkbox */}
        <label className="inline-flex items-start gap-2 mt-4 text-sm text-gray-800">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1"
          />
          <span>
            I have read and agree to the{" "}
            <a
              href="/term"
              className="text-red-500 font-medium underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-red-500 font-medium underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800 w-full sm:w-auto"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            disabled={!agree}
            className={`px-5 py-2 rounded-md text-white transition duration-200 w-full sm:w-auto ${
              agree
                ? "bg-violet-600 hover:bg-violet-700"
                : "bg-slate-400 cursor-not-allowed"
            }`}
          >
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
