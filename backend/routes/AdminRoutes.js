// routes/admin.js
import express from "express";
import { adminLogin } from "../controller/AdminAuthController.js";
import { getAllUsers, getDashboardStats, getAgentSubmissions } from "../controller/AdminController.js";
import { isAdmin } from "../middleware/auth.js";
import { agentSubmit } from '../controller/AgentController.js';
const router = express.Router();

router.post("/login", adminLogin); // login
router.get("/dashboard", isAdmin, getDashboardStats); // protected
router.get("/users", isAdmin, getAllUsers);           // protected
router.get("/stats", isAdmin, getDashboardStats);
router.get("/agent-submissions", isAdmin, getAgentSubmissions);
// router.get("/payments", isAdmin, getAllPayments);     // protected
router.post("/submit-agent",agentSubmit ); 
export default router;