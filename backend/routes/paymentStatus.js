
import express from 'express';
import { PaymentOrderStatus, PaymentStatus } from '../controller/PaymentStatusController.js';

const router = express.Router();
router.get('/payment-status/:paymentLinkId',PaymentStatus );
router.get("/order-status/:orderId",PaymentOrderStatus);
export default router;