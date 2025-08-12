// models/ContactUs.js
import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  chooseYourPlan: {
    type: String,
    enum: ["Magma Premium Care", "Magma Health Shield"], // ✅ only two allowed plans
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

export const ContactUs = mongoose.model("ContactUs", contactUsSchema);
