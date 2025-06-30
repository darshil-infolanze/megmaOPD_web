
import { instance } from "../server.js"
import { SelfInfo } from '../models/SelfInfoModel.js';
import { sendPaymentLinkEmail } from '../utils/email.js';


export const agentSubmit = async (req, res) => {
    try {
        const {
            selfName,
            fatherHusbandName,
            email,
            phone,
            dob,
            gender,
            country,
            panCard,
            address,
            plan,
            amountPaid,
            // members = [],
        } = req.body;

        // Step 1: Save user info with pending payment
        const newForm = await SelfInfo.create({
            selfName,
            fatherHusbandName,
            email,
            phone,
            dob,
            gender,
            country,
            panCard,
            address,
            plan,
            submittedBy: 'agent',
            amountPaid,
            paymentStatus: 'pending'
        });

        // Step 2: Create Razorpay Payment Link
        const paymentLink = await instance.paymentLink.create({
            amount: amountPaid * 100, // in paise
            currency: 'INR',
            accept_partial: false,
            customer: {
                name: selfName,
                contact: phone,
                email: email
            },
            notify: {
                sms: true,
                email: true
            },
            reference_id: newForm._id.toString(),
            description: `Payment for ${plan}`,
            // callback_url: `https://d886-2401-4900-8fc4-6f1e-d9b8-bcf4-8f9c-e528.ngrok-free.app/payment-success`,
            callback_url: `http://localhost:5173/payment-success?ref_id=${newForm._id}`,
            // callback_url: `http://localhost:5173/payment-success`,
            callback_method: 'get'
        });

        // Step 3: Save payment link in DB
        newForm.paymentLinkId = paymentLink.id;
        newForm.paymentLinkUrl = paymentLink.short_url;
        await newForm.save();
        await sendPaymentLinkEmail(email, paymentLink.short_url);

        // Step 4: Send response with link
        res.status(200).json({
            message: 'Form submitted and payment link created',
            paymentLink: paymentLink.short_url
        });
    } catch (error) {
        console.error('Error in agent form submit:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
