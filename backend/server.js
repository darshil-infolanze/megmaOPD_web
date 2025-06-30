import Razorpay from "razorpay";
import { app } from "./app.js";
// import dotenv from "dotenv";
// import cors from 'cors'
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS present:", !!process.env.EMAIL_PASS);

// dotenv.config({ path: './config/config.env' });
dotenv.config({ path: path.resolve('./config/config.env') });
// dotenv.config();

export const instance=new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET,
})
mongoose.connect(process.env.MONGODB_URL, {
    dbName: "artwork"
}).then(() => console.log('database connected '))
    .catch((err) => console.error("mongodb error", err));
app.listen(process.env.PORT,()=>
    console.log(`server is running on port${process.env.PORT}`)
)

