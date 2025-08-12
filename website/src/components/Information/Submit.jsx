import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadRazorpayScript } from "../utils/loadRazorpay";
// import { userInfo } from "os";

const Submit = () => {
  const [selected, setSelected] = useState("razorpay");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const storedPlan = JSON.parse(localStorage.getItem("selectedPlan")) || {
    name: "",
    price: 0,
  };

  // const sgst = Math.round(storedPlan.price * 0.09);
  // const cgst = Math.round(storedPlan.price * 0.09);
  const total = storedPlan.price;
  // const total= 100;

  const handlePayment = async () => {
    if (selected === "razorpay") {
      const res = await loadRazorpayScript();
      const { key } = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/getkey`).then(
        (res) => res.json()
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      try {
        const orderRes = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/checkout`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: total }),
        });

        const orderData = await orderRes.json();
        console.log("Order created:", orderData);

        const options = {
          key,
          amount: orderData.order.amount,
          currency: "INR",
          name: "My Store",
          description: `Plan: ${storedPlan.name}`,
          order_id: orderData.order.id,
          handler: async function (response) {
            setLoading(true);
            console.log("Payment Success:", response);
            const userInfo = JSON.parse(localStorage.getItem("Self Info"));
            console.log("checking", userInfo);

            try {
              const verifyRes = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/api/paymentverification`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    response,
                    plan: storedPlan,
                    userInfo: {
                      selfName: userInfo.selfName,
                      email: userInfo.email,
                      address: userInfo.address,
                    },
                    amountPaid: total,
                  }),
                }
              );

              const verifyData = await verifyRes.json();

              if (!verifyData.success) {
                alert("Payment verification failed!");
                setLoading(false);
                return;
              }
              const selfInfo = JSON.parse(localStorage.getItem("Self Info"));
              const members = [];

              for (let i = 1; i <= 3; i++) {
                const memberData = localStorage.getItem(`member${i}`);
                if (memberData) {
                  members.push(JSON.parse(memberData));
                }
              }

              const backendRes = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/api/user/submitinfo`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    selfInfo: { ...selfInfo, members },
                    plan: storedPlan.name,
                    amountPaid: total,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                  }),
                }
              );
              const backendData = await backendRes.json();

              console.log(backendData);
              if (!backendData.success) {
                alert("Failed to save user data.");
                setLoading(false);
                return;
              }

              navigate("/payment-success", {
                state: {
                  payment: response,
                  plan: storedPlan,
                  selfData: backendData.self,
                },
              });
              localStorage.clear();
            } catch (err) {
              console.error("Verification error:", err);
              alert("Something went wrong during verification.");
              setLoading(false);
            }
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9876543210",
          },
          theme: {
            color: "#9b51e0",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        console.error("Payment Error:", error);
        alert("Something went wrong during payment!");
      }
    } else if (selected === "phonepe") {
      setLoading(true);
      try {
        const userInfo = JSON.parse(localStorage.getItem("Self Info"));
        const merchantTransactionId = "txn_" + Date.now();
        const MUID = userInfo?.email || ("user_" + Date.now());
        // Save txnId in sessionStorage (just in case PhonePe strips query param)
        sessionStorage.setItem("phonepe_txn_id", merchantTransactionId);

        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            merchantTransactionId,
            amount: total,
            MUID,
            name: userInfo?.selfName,
            number: userInfo?.phone,
            email: userInfo?.email,
            planName: storedPlan.name,
          }),
        });
        const data = await res.json();
        setLoading(false);
        if (data.url) {
          window.location.href = data.url; // Redirect to PhonePe payment page
          console.log("data", data);
          console.log("data.url", data.url);
        } else {
          alert("Failed to initiate PhonePe payment");
        }
      } catch (err) {
        setLoading(false);
        alert("Failed to initiate PhonePe payment");
        console.error(err);
      }
    } else {
      alert("Please select a valid payment method.");
    }
  };

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Pay for order</h1>
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75">
          <div className="w-20 h-20 border-8 border-t-8 rounded-full border-t-purple-500 border-gray-300 animate-spin"></div>
          <p className="mt-5 text-xl font-semibold text-white">
            Processing your payment, please wait...
          </p>
        </div>
      )}
      {/* Order Summary */}
      <div className="mb-6 overflow-hidden border border-gray-300 rounded-lg">
        <table className="w-full text-sm text-left" border={2}>
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border-r border-gray-300">Product</th>
              <th className="p-4 border-r border-gray-300">Qty</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-4 border-t border-gray-300">
                {storedPlan.name}
              </td>
              <td className="p-4 border-t border-gray-300">× 1</td>
              <td className="p-4 border-t border-gray-300">
                ₹{storedPlan.price.toLocaleString()}
              </td>
            </tr>
            {/* <tr className="font-semibold bg-gray-50">
              <td className="p-4 border-t border-gray-300" colSpan="2">
                Subtotal:
              </td>
              <td className="p-4 border-t border-gray-300">
                ₹{storedPlan.price.toLocaleString()}
              </td>
            </tr> */}
            <tr className="font-semibold bg-white">
              <td className="p-4 border-t border-gray-300" colSpan="2">
                Total:
              </td>
              <td className="p-4 border-t border-gray-300">
                ₹{total.toLocaleString()}
                {/* <span className="block text-sm text-gray-500">
                  {/* <small>
                    {" "}
                    {/* (includes ₹{sgst} SGST 9%, ₹{cgst} CGST 9%) 
                  </small> 
                </span> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment Options */}
      {/* <div className="p-6 space-y-6 bg-gray-100 rounded-lg">
        {[
          {
            id: "razorpay",
            label: "Credit Card/Debit Card/NetBanking",
            img: "https://cdn.razorpay.com/static/assets/logo/rzp_payment_icon.svg",
            note: "Pay securely by Credit or Debit card or Internet Banking through Razorpay.",
          },
          {
            id: "cashfree",
            label: "Cashfree Payments",
            img: "https://cashfreelogo.cashfree.com/cashfreepayments/logopng1x/Cashfree_Payments_Logo.png",
            note: "Pay securely via Card/Net Banking/Wallet via Cashfree.",
          },
          {
            id: "phonepe",
            label: "PhonePe Payment Solutions",
            img: "https://imgstatic.phonepe.com/images/online-merchant-assets/plugins/woocommerce/2529/405/payment_gateway_logo.png",
            note: "All UPI apps, Debit and Credit Cards, and NetBanking accepted | Powered by PhonePe",
          },
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
                <span className="font-medium text-gray-800">
                  {method.label}
                </span>
                <img src={method.img} alt={method.label} className="h-6" />
              </div>
              {selected === method.id && (
                <div className="relative p-3 mt-2 text-sm text-gray-700 bg-gray-200 rounded shadow">
                  <div className="absolute w-4 h-4 transform rotate-45 bg-gray-200 shadow-sm -top-2 left-6"></div>
                  {method.note}
                </div>
              )}
            </div>
          </label>
        ))} */}

      {/* Payment Options */}
      <div className="p-6 space-y-6 bg-gray-100 rounded-lg">
        {[
          {
            id: "razorpay",
            label: "Credit Card/Debit Card/NetBanking",
            img: "https://cdn.razorpay.com/static/assets/logo/rzp_payment_icon.svg",
            note: "Pay securely by Credit or Debit card or Internet Banking through Razorpay.",
          },
          // {
          //   id: "phonepe",
          //   label: "PhonePe Payment Solutions",
          //   img: "https://imgstatic.phonepe.com/images/online-merchant-assets/plugins/woocommerce/2529/405/payment_gateway_logo.png",
          //   note: "All UPI apps, Debit and Credit Cards, and NetBanking accepted | Powered by PhonePe",
          //   upcoming: true,
          // },
        ].map((method) => (
          <label
            key={method.id}
            className={`flex items-start space-x-3 p-4 rounded  transition-all cursor-pointer ${selected === method.id
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
                <span className="font-medium text-gray-800">
                  {method.label}
                </span>
                <img src={method.img} alt={method.label} className="h-6" />
              </div>
              {selected === method.id && (
                <div className="relative p-3 mt-2 text-sm text-gray-700 bg-gray-200 rounded shadow">
                  <div className="absolute w-4 h-4 transform rotate-45 bg-gray-200 shadow-sm -top-2 left-6"></div>
                  {method.note}
                </div>
              )}
            </div>
          </label>
        ))}
        {/* Privacy Policy Info */}
        <p className="text-sm text-gray-600">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <a href="#" className="text-purple-600 underline">
            privacy policy
          </a>
          .
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
