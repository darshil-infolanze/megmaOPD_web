// controller/AdminController.js
import { SelfInfo } from "../models/SelfInfoModel.js";
import { Payment } from "../models/PaymentModel.js";

// 🟩 GET /admin/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await SelfInfo.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAgentSubmissions = async (req, res) => {
  try {
    const submissions = await SelfInfo.find({ submittedBy: "agent" })
      .sort({ createdAt: -1 }) // Show latest first
      .select("selfName email plan amountPaid paymentStatus createdAt");

    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching agent submissions:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// 🟩 GET /admin/dashboard
export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await SelfInfo.countDocuments();
    const latestUsers = await SelfInfo.find().sort({ createdAt: -1 }).limit(5);
    const latestPayments = await Payment.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("userInfo");

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        latestUsers,
        latestPayments,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
