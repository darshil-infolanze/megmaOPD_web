import express from 'express';
import {config} from 'dotenv'
import PaymentRoute from './routes/PaymentRoutes.js';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
import AdminRoutes from './routes/AdminRoutes.js';
import paymentStatusRoutes from './routes/paymentStatus.js';
import { handleRazorpayWebhook } from './controller/PaymentController.js';

config({path:'./config/config.env' })
export const app=express(); 
app.use(cors());

// Razorpay Webhook - MUST be before express.json()
app.post("/api/webhook", express.raw({ type: "application/json" }), handleRazorpayWebhook);

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Server is running ✅');
});


app.use('/api',PaymentRoute);
app.use("/api/admin", AdminRoutes);
app.use("/api/user", userRoutes);
// app.use('/api/agent', agentSubmit);
app.use('/api', paymentStatusRoutes);
app.get('/api/getkey',(req,res)=>
{
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY,
    })
})
