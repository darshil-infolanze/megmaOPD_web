import { SelfInfo } from "../models/SelfInfoModel.js";
import { Payment } from "../models/PaymentModel.js";
 export const PaymentStatus= async (req, res) => {
  try {
    const form = await SelfInfo.findOne({ paymentLinkId: req.params.paymentLinkId });

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    if (form.paymentStatus === 'paid') {
      return res.json({
        email: form.email,
        name: form.selfName,
        status: form.paymentStatus
      });
    }

    return res.status(202).json({ status: form.paymentStatus || 'pending' });
  } catch (err) {
    console.error('Payment status check error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

//  export const PaymentOrderStatus=async (req, res) => {
//   try {
//     const payment = await Payment.findOne({ razorpay_order_id: req.params.orderId });
//     if (!payment) {
//       return res.status(404).json({ message: "Payment not found" });
//     }

//     return res.json({
//       name: payment.userInfo?.selfName || "User",
//       email: payment.userInfo?.email || "",
//       status: "paid",
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error",error});
//   }
// };

export const PaymentOrderStatus = async (req, res) => {
  const payment = await Payment.findOne({ razorpay_order_id: req.params.orderId });
  if (!payment) return res.status(404).json({ message: "Payment not found" });

  res.json({
    name: payment.userInfo?.selfName || "User",
    email: payment.userInfo?.email || "",
    status: "paid",
  });
};

