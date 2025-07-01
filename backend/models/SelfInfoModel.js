import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relation: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String },
}, { _id: false });



const selfInfoSchema = new mongoose.Schema({
  selfName: { type: String, required: true },
  fatherHusbandName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: String },
  gender: { type: String },
  country: { type: String },
  panCard: { type: String },
  address: { type: String },
  plan: { type: String },
  amountPaid: { type: Number },
  razorpayPaymentId: { type: String },
  razorpayOrderId: { type: String },
  razorpaySignature: { type: String },
  paymentStatus: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  paymentLinkId: { type: String },  // For Razorpay Payment Link tracking
  paymentLinkUrl: { type: String },
  submittedBy: {
    type: String,
    enum: ['user', 'agent'],
    required: true
  },
  members: [memberSchema],
  createdAt: { type: Date, default: Date.now },
});

export const SelfInfo = mongoose.model("SelfInfo", selfInfoSchema);
