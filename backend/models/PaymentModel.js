import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: false,
  },
  razorpay_payment_id: {
    type: String,
    required: false,
  },
  razorpay_signature: {
    type: String,
    required: false,
  },
  plan: {
    name: String,
    price: Number,
  },
  userInfo: {
    name: String,
    email: String,
    contact: String,
    selfName:String,
  },
  phonepe_txn_id: {
    type: String,
    required: false,
  },
  paymentMode: {
    type: String,
    enum: ["razorpay", "phonepe"],
    required: true,
  },

  amountPaid: Number,
  receiptSent: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const Payment = mongoose.model("Payment", PaymentSchema);
