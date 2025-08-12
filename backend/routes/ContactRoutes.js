// routes/contactUsRoutes.js
import express from "express";
import { createContactUs } from "../controller/ContactController.js";

const router = express.Router();

router.post("/contact", createContactUs);

export default router;
