// controllers/contactUsController.js
import { ContactUs } from "../models/ContactModel.js";
import { sendContactConfirmationEmail, sendContactDetailsToAdmin } from "../utils/email.js";

export const createContactUs = async (req, res) => {
    try {
        const { name, email, mobileNo, chooseYourPlan } = req.body;

        // Extra validation to avoid No recipients defined
        if (!name || !email || !mobileNo || !chooseYourPlan) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        // Create record
        const contact = await ContactUs.create({
            name,
            email,
            mobileNo,
            chooseYourPlan
        });

        // Send confirmation to user
        await sendContactConfirmationEmail(email, name);

        // Send details to admin
        await sendContactDetailsToAdmin(name, email, mobileNo, chooseYourPlan);

        res.status(201).json({
            message: "Contact request submitted successfully",
            data: contact
        });
    } catch (error) {
        console.error("Error in Contact Us API:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

