// import { instance } from "../server.js"
// import { SelfInfo } from '../models/SelfInfoModel.js';
// import { sendPaymentLinkEmail } from '../utils/email.js';


// export const agentSubmit = async (req, res) => {
//     try {
//         const {
//             selfName,
//             fatherHusbandName,
//             email,
//             phone,
//             dob,
//             gender,
//             country,
//             panCard,
//             address,
//             plan,
//             amountPaid,
//             // members = [],
//         } = req.body;

//         // Step 1: Save user info with pending payment
//         const newForm = await SelfInfo.create({
//             selfName,
//             fatherHusbandName,
//             email,
//             phone,
//             dob,
//             gender,
//             country,
//             panCard,
//             address,
//             plan,
//             submittedBy: 'agent',
//             amountPaid,
//             paymentStatus: 'pending'
//         });

//         // Step 2: Create Razorpay Payment Link
//         const paymentLink = await instance.paymentLink.create({
//             amount: amountPaid * 100, // in paise
//             currency: 'INR',
//             accept_partial: false,
//             customer: {
//                 name: selfName,
//                 contact: phone,
//                 email: email
//             },
//             notify: {
//                 sms: true,
//                 email: true
//             },
//             reference_id: newForm._id.toString(),
//             description: `Payment for ${plan}`,
//             // callback_url: `https://d886-2401-4900-8fc4-6f1e-d9b8-bcf4-8f9c-e528.ngrok-free.app/payment-success`,
//             callback_url: `http://localhost:5173/payment-success?ref_id=${newForm._id}`,
//             // callback_url: `http://localhost:5173/payment-success`,
//             callback_method: 'get'
//         });

//         // Step 3: Save payment link in DB
//         newForm.paymentLinkId = paymentLink.id;
//         newForm.paymentLinkUrl = paymentLink.short_url;
//         await newForm.save();
//         await sendPaymentLinkEmail(email, paymentLink.short_url);

//         // Step 4: Send response with link
//         res.status(200).json({
//             message: 'Form submitted and payment link created',
//             paymentLink: paymentLink.short_url
//         });
//     } catch (error) {
//         console.error('Error in agent form submit:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

import { instance } from "../server.js"
import { SelfInfo } from '../models/SelfInfoModel.js';
import { sendPaymentLinkEmail } from '../utils/email.js';

export const agentSubmit = async (req, res) => {
    // console.log("AGENT SUBMIT BODY:", JSON.stringify(req.body, null, 2));
    try {
        const {
            selfName,
            fatherHusbandName,
            email,
            phone,
            dob,
            gender,
            panCard,
            aadharCard,
            address1,
            address2,
            city,
            state,
            pincode,
            country,
            plan,
            amountPaid,
            members = [],
        } = req.body;

        const address = `${address1 || ""}, ${address2 || ""}, ${city || ""}, ${state || ""} - ${pincode || ""}, ${country || ""}`.trim();

        const newForm = await SelfInfo.create({
            selfName,
            fatherHusbandName,
            email,
            phone,
            gender,
            panCard,
            country,
            aadharCard,
            dob,
            address,
            plan,
            amountPaid,
            submittedBy: 'agent',
            paymentStatus: 'pending',
            members,
        });
        // Step 2: Create Razorpay Payment Link
        const paymentLink = await instance.paymentLink.create({
            amount: amountPaid * 100, // in paise
            currency: 'INR',
            accept_partial: false,
            customer: {
                name: selfName,
                contact: String(phone), 
                email: email
            },
            notify: {
                sms: true,
                email: true
            },
            reference_id: newForm._id.toString(),
            description: `Payment for ${plan}`,
            callback_url: `http://localhost:5173/payment-success?ref_id=${newForm._id}`,
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
    
}

