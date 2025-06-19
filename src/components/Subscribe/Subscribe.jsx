import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthPlanCards = () => {
  const navigate = useNavigate();

  const handleGetStarted = (plan) => {
    if (plan === "premium") {
      navigate("/premium");
    } else if (plan === "shield") {
      navigate("/AxenHealthShield");
    }
  };

  const boxShadowStyle = {
    boxShadow: "0 8px 30px rgba(148, 163, 184, 0.4)", // slate shadow
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Card 1: Magma Premium Care */}

        <div
          style={boxShadowStyle}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-t-8 border-t-slate-500 p-8 flex flex-col items-center text-center h-full"
        >
          <h3 className="text-2xl font-bold text-violet-800 mb-4">
            Magma Premium care
          </h3>
          <p className="text-4xl font-extrabold text-gray-900 mb-6">
            ₹ 29,999
            <span className="text-base font-normal text-gray-600 ml-2">
              (incl. GST)
            </span>
          </p>

          <ul className="text-gray-700 text-left space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Unlimited Doctor Teleconsultations
                </strong>{" "}
                – Talk to specialists anytime, including pediatrics, gynecology,
                and dermatology.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Annual Comprehensive Health Check-up
                </strong>{" "}
                – One full-body check-up per year for each adult covered.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Dedicated Wellness Manager
                </strong>{" "}
                – Personalized one-on-one concierge support for all your health
                needs.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Mental Wellness Support
                </strong>{" "}
                – 2 therapy sessions + access to a mental health helpline for
                continuous care.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">Eye & Dental Care</strong> – 1
                eye test + 1 dental consultation per family member annually.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Up to 40% Discount on Diagnostics
                </strong>{" "}
                – Plus, save up to 25% on medicines.
              </span>
            </li>
          </ul>

          <button
            onClick={() => handleGetStarted("premium")}
            className="mt-auto bg-violet-600 hover:bg-violet-700 text-white w-full rounded font-bold py-3 px-8 transition-colors duration-200 shadow-md underline"
          >
            Get Started
          </button>
        </div>

        {/* Card 2: Axen Health Shield (with Popular Ribbon) */}

        <div
          style={boxShadowStyle}
          className="relative bg-white rounded-xl shadow-lg overflow-hidden border-t-8 border-t-violet-500 p-8 flex flex-col items-center text-center h-full"
        >
          {/* Popular Ribbon */}
          <div className="absolute top-0 right-0 bg-violet-500 text-white text-xs font-bold uppercase py-1 px-4 transform rotate-45 translate-x-1/3 -translate-y-1/2 origin-top-right">
            Popular
          </div>

          <h3 className="text-2xl font-bold text-violet-800 mb-4">
            Magma Health Shield
          </h3>
          <p className="text-4xl font-extrabold text-gray-900 mb-6">
            ₹ 49,999
            <span className="text-base font-normal text-gray-600 ml-2">
              (incl. GST)
            </span>
          </p>

          <ul className="text-gray-700 text-left space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Unlimited Teleconsultations
                </strong>{" "}
                – Access all specialties, including mental health, physical
                health, and second opinions.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  2 Full-Body Health Check-ups
                </strong>{" "}
                – Get two comprehensive health check-ups per year for each
                adult.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Dedicated Personal Health Manager
                </strong>{" "}
                – Available via WhatsApp or call for ongoing support.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  4 Mental Wellness Therapy Sessions
                </strong>{" "}
                – Plus continuous mindfulness tracking to support mental health.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">Specialist Benefits</strong> –
                Includes eye, dental, and skin consultations, plus 3
                personalized diet consultations per year.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-slate-500 mr-2 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-gray-800">
                  Up to 40% Diagnostics Discount
                </strong>{" "}
                – Save on lab tests and up to 25% on branded medicines.
              </span>
            </li>
          </ul>

          <button
            onClick={() => handleGetStarted("shield")}
            className="mt-auto bg-violet-600 hover:bg-violet-700 w-full text-white font-bold py-3 px-8 rounded underline transition-colors duration-200 shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthPlanCards;
