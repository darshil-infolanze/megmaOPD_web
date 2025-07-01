// seedAdmin.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Admin } from './models/AdminModel.js';

dotenv.config({ path: './config/config.env' });

mongoose.connect(process.env.MONGODB_URL, {
  dbName: 'artwork',
}).then(async () => {
  const existing = await Admin.findOne({ email: "admin@example.com" });
  if (existing) {
    console.log("Admin already exists");
    process.exit(0);
  }

  const admin = new Admin({
    email: "admin@gmail.com",
    password: "Admin1234",
  });

  await admin.save();
  console.log("Admin created!");
  process.exit(0);
}).catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});
