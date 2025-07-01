// controller/AdminAuthController.js
import jwt from "jsonwebtoken";
import { Admin } from "../models/AdminModel.js";

const generateToken = (admin) => {
  return jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ success: false, message: "Invalid credentials" });

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

  const token = generateToken(admin);

  res.json({ success: true, token, admin: { email: admin.email } });
};
