import express from "express";
import { submitUserInfo } from "../controller/UserController.js";

const router = express.Router();

router.post("/submitinfo", submitUserInfo);

export default router;
