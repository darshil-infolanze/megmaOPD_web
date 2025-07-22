import express from 'express'
import { checkout, PaymentVerification,newpayment,checkstatus} from '../controller/PaymentController.js';

// import { isAdmin } from "../middleware/auth.js";
const router=express.Router();
router.route('/checkout').post(checkout);
router.route('/paymentverification').post(PaymentVerification);
router.route('/payment').post(newpayment);
router.route('/status').get(checkstatus);
export default router;
