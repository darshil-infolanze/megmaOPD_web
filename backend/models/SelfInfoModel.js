import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
  name: { type: String, required: false },
  relation: { type: String },
  phone: { type: Number, required: false },
  email: { type: String, required: false },
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
  paymentLinkRefId: { type: String },
  paymentMode: {
    type: String,
    enum: ['razorpay', 'phonepe', 'other'],
    default: 'razorpay'
  },
  submittedBy: {
    type: String,
    enum: ['user', 'agent'],
    required: true
  },
  members: [memberSchema],
  createdAt: { type: Date, default: Date.now },
});

// Pre-save hook to validate first member & clean empty members
selfInfoSchema.pre("save", function (next) {
  // Remove empty optional members
  this.members = this.members.filter(m =>
    m.name || m.phone || m.email
  );

  // Ensure first member has required fields
  if (!this.members.length ||
      !this.members[0].name ||
      !this.members[0].phone ||
      !this.members[0].email) {
    return next(new Error("First member must have name, phone, and email."));
  }

  next();

});

export const SelfInfo = mongoose.model("SelfInfo", selfInfoSchema);
