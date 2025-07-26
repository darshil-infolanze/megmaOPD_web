import express from 'express'
import { checkout, PaymentVerification,newpayment,checkstatus, getPhonePePaymentStatus } from '../controller/PaymentController.js';

// import { isAdmin } from "../middleware/auth.js";
const router=express.Router();
router.route('/checkout').post(checkout);
router.route('/paymentverification').post(PaymentVerification);
router.route('/payment').post(newpayment);
router.route('/phonepe-payment-status/:txnId').get(getPhonePePaymentStatus);
router.route('/status/').get(checkstatus);
export default router;
