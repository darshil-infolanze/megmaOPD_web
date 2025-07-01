import express from 'express'
import { agentSubmit, regeneratePaymentLink } from '../controller/AgentController.js';

const router = express.Router();
router.post("/submit-agent", agentSubmit);
router.post("/regenerate-payment-link/:id", regeneratePaymentLink);
export default router;