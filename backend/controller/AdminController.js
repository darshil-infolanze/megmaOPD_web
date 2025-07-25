// controller/AdminController.js
import { SelfInfo } from "../models/SelfInfoModel.js";
import { Payment } from "../models/PaymentModel.js";

// 🟩 GET /admin/users
export const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const total = await SelfInfo.countDocuments();
    const users = await SelfInfo.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    res.status(200).json({ success: true, users, total, page, limit });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAgentSubmissions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const total = await SelfInfo.countDocuments({ submittedBy: "agent" });
    const submissions = await SelfInfo.find({ submittedBy: "agent" })
      .sort({ createdAt: -1 })
      .select("selfName email plan amountPaid paymentStatus createdAt")
      .skip(skip)
      .limit(limit);
    res.status(200).json({ submissions, total, page, limit });
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
      .populate("userInfo")
      .select("amountPaid paymentMode userInfo");

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
