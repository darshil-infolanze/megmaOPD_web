import { AlertTriangle } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const PaymentFailure = () => {
  const [params] = useSearchParams();
  const txnId = params.get("phonepe_txn_id");

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-red-50 via-white to-red-100">
      <div className="w-full max-w-xl p-8 text-center bg-white shadow-lg rounded-2xl">
        <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
        <h1 className="mb-2 text-3xl font-bold text-red-600">Payment Failed</h1>
        <p className="mb-6 text-gray-700">
          Sorry, your payment could not be processed.
          {txnId && (
            <>
              <br />
              <span className="font-semibold text-red-600">
                Transaction ID: {txnId}
              </span>
            </>
          )}
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 font-medium text-white transition bg-red-600 rounded-lg hover:bg-red-700"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure; 