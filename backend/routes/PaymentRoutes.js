import express from 'express'
import { checkout, PaymentVerification } from '../controller/PaymentController.js';

// import { isAdmin } from "../middleware/auth.js";
const router=express.Router();
router.route('/checkout').post(checkout);
router.route('/paymentverification').post(PaymentVerification)

export default router;