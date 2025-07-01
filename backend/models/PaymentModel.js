import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    // required: true, // Made optional for payment link webhook
  },
  razorpay_signature: {
    type: String,
    // required: true, // Made optional for payment link webhook
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

  amountPaid: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const Payment = mongoose.model("Payment", PaymentSchema);
