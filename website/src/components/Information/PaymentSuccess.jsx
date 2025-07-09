

// import { useLocation } from "react-router-dom";
// import { CheckCircle } from "lucide-react";

// const PaymentSuccess = () => {
//   const { state } = useLocation();
//   const { plan, payment } = state || {};

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-purple-50 via-white to-purple-100">
//       <div className="w-full max-w-xl p-8 text-center bg-white shadow-lg rounded-2xl">
//         <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
//         <h1 className="mb-2 text-3xl font-bold text-green-600">Payment Successful!</h1>
//         <p className="mb-6 text-gray-700">
//           Thank you for purchasing <span className="font-semibold text-purple-600">{plan?.name}</span>.
//         </p>

//         <div className="p-4 text-left border border-gray-200 shadow-inner bg-gray-50 rounded-xl">
//           <h2 className="mb-2 text-lg font-semibold text-gray-800">Payment Details:</h2>
//           <div className="space-y-2 text-sm text-gray-700">
//             <div>
//               <strong>Payment ID:</strong> {payment?.razorpay_payment_id}
//             </div>
//             <div>
//               <strong>Order ID:</strong> {payment?.razorpay_order_id}
//             </div>
//             {/* <div>
//               <strong>Signature:</strong>
//               <div className="p-2 mt-1 overflow-x-auto text-xs text-gray-600 bg-gray-100 rounded">
//                 {payment?.razorpay_signature}
//               </div>
//             </div> */}
//           </div>
//         </div>

//         <div className="mt-8">
//           <a
//             href="/"
//             className="inline-block px-6 py-3 font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
//           >
//             Go to Homepage
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;


import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import axios from "axios";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const location = useLocation();

  const paymentLinkId = params.get("razorpay_payment_link_id");
  const paymentId = params.get("razorpay_payment_id");

  const { state } = location || {};
  const { plan, payment } = state || {};

  const [status, setStatus] = useState(paymentLinkId ? "Verifying payment..." : "success");
  const [error, setError] = useState("");
  const [paymentData, setPaymentData] = useState(null);
  console.log('check',paymentData);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!paymentLinkId) return;

      try {
        const { data } = await axios.get(
          // `http://localhost:4000/api/payment-status/${paymentLinkId}`
          `${import.meta.env.VITE_SERVER_URL}/api/payment-status/${paymentLinkId}`

        );
        setPaymentData(data);
        setStatus("success");
      } catch (err) {
        console.error("Payment verification error:", err.response?.data || err.message);
        setError("Could not verify payment. Please contact support.");
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [paymentLinkId]);

  if (status === "Verifying payment...") {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-gray-600">
        Verifying payment...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-red-600">
        <AlertTriangle className="w-12 h-12 mb-4" />
        <h1 className="text-2xl font-bold">{error}</h1>
      </div>
    );
  }

  const isAgentFlow = !!paymentLinkId;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-purple-50 via-white to-purple-100">
      <div className="w-full max-w-xl p-8 text-center bg-white shadow-lg rounded-2xl">
        <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
        <h1 className="mb-2 text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="mb-6 text-gray-700">
          Thank you{" "}
          {isAgentFlow ? (
            <span className="font-semibold text-purple-600">
              {paymentData?.name || "User"}
            </span>
          ) : (
            <>
              for purchasing{" "}
              <span className="font-semibold text-purple-600">
                {plan?.name || "Plan"}
              </span>
            </>
          )}
          .
        </p>

        <div className="p-4 text-left border border-gray-200 shadow-inner bg-gray-50 rounded-xl">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">Payment Details</h2>
          <div className="space-y-2 text-sm text-gray-700">
            {isAgentFlow ? (
              <>
                <div>
                  <strong>Email:</strong> {paymentData?.email || "N/A"}
                </div>
                <div>
                  <strong>Payment ID:</strong> {paymentId}
                </div>
                <div>
                  <strong>Payment Link ID:</strong> {paymentLinkId}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  <span className="font-medium text-green-600 capitalize">
                    {paymentData?.status || "Success"}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <strong>Payment ID:</strong> {payment?.razorpay_payment_id}
                </div>
                <div>
                  <strong>Order ID:</strong> {payment?.razorpay_order_id}
                </div>
                {/* You can show signature if needed */}
                {/* <div>
                  <strong>Signature:</strong> {payment?.razorpay_signature}
                </div> */}
              </>
            )}
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
