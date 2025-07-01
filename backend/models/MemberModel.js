import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relation: { type: String }, // e.g. Spouse, Child, etc.
  age: { type: Number },
  gender: { type: String },
  selfInfoId: { type: mongoose.Schema.Types.ObjectId, ref: "SelfInfo" }, // optional back ref
  createdAt: { type: Date, default: Date.now },
});

export const Member = mongoose.model("Member", memberSchema);
