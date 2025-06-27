import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const [selected, setSelected] = useState("razorpay");
  const navigate = useNavigate();

  const storedPlan = JSON.parse(localStorage.getItem("selectedPlan")) || {
    name: "",
    price: 0,
  };

  // const sgst = Math.round(storedPlan.price * 0.09);
  // const cgst = Math.round(storedPlan.price * 0.09);
  // const total = storedPlan.price + sgst + cgst;

  const handlePayment = () => {
    console.log("Payment method:", selected);
    console.log("Selected Plan:", storedPlan.name);
    // console.log("Total Amount:", total);
    alert("Proceeding to payment gateway...");
    navigate("/success");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Pay for order</h1>

      {/* Order Summary */}
      <div className="border border-gray-300 rounded-lg mb-6 overflow-hidden">
        <table className="w-full text-left text-sm" border={2}>
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border-r border-gray-300">Product</th>
              <th className="p-4 border-r border-gray-300">Qty</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-4 border-t border-gray-300">{storedPlan.name}</td>
              <td className="p-4 border-t border-gray-300">× 1</td>
              <td className="p-4 border-t border-gray-300">
                ₹{storedPlan.price.toLocaleString()}
              </td>
            </tr>
            <tr className="bg-gray-50 font-semibold">
              <td className="p-4 border-t border-gray-300" colSpan="2">
                Total:
              </td>
              <td className="p-4 border-t border-gray-300">
                ₹{storedPlan.price.toLocaleString()}
              </td>
            </tr>
            <tr className="bg-white font-semibold">
              {/* <td className="p-4 border-t border-gray-300" colSpan="2">
                Total:
              </td> */}
              {/* <td className="p-4 border-t border-gray-300">
                ₹{total.toLocaleString()}
                <span className="block text-sm text-gray-500">
                 <small> (includes ₹{sgst} SGST 9%, ₹{cgst} CGST 9%)</small>
                </span>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment Options */}
      <div className="bg-gray-100 rounded-lg p-6 space-y-6">
        {[ 
          {
            id: "razorpay",
            label: "Credit Card/Debit Card/NetBanking",
            img: "https://cdn.razorpay.com/static/assets/logo/rzp_payment_icon.svg",
            note: "Pay securely by Credit or Debit card or Internet Banking through Razorpay."
          },
          {
            id: "cashfree",
            label: "Cashfree Payments",
            img: "https://cashfreelogo.cashfree.com/cashfreepayments/logopng1x/Cashfree_Payments_Logo.png",
            note: "Pay securely via Card/Net Banking/Wallet via Cashfree."
          },
          {
            id: "phonepe",
            label: "PhonePe Payment Solutions",
            img: "https://imgstatic.phonepe.com/images/online-merchant-assets/plugins/woocommerce/2529/405/payment_gateway_logo.png",
            note: "All UPI apps, Debit and Credit Cards, and NetBanking accepted | Powered by PhonePe"
          }
        ].map((method) => (
          <label
            key={method.id}
            className={`flex items-start space-x-3 p-4 rounded  transition-all cursor-pointer ${
              selected === method.id
                ? "bg-purple-100 border-purple-400"
                : "border-gray-300 hover:bg-purple-50"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="mt-1 accent-purple-600"
            />
            <div className="flex flex-col w-full">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-800">{method.label}</span>
                <img src={method.img} alt={method.label} className="h-6" />
              </div>
              {selected === method.id && (
                <div className="relative mt-2 p-3 text-sm text-slate-700 bg-gray-200 rounded shadow">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-gray-200 rotate-45 transform shadow-sm"></div>
                  {method.note}
                </div>
              )}
            </div>
          </label>
        ))}

        {/* Privacy Policy Info */}
        <p className="text-sm text-gray-600">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described in our{" "}
          <a href="#" className="text-purple-600 underline">privacy policy</a>.
        </p>

        {/* Pay Button */}
        <div className="flex justify-end">
          <button
            onClick={handlePayment}
            className="bg-[#9b51e0] hover:bg-purple-700 text-white px-6 py-3 rounded font-semibold text-lg"
          >
            Pay for order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
