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
        const initialReferenceId = `${newForm._id.toString()}_${Date.now()}`;
        const paymentLink = await instance.paymentLink.create({
            amount: amountPaid * 100, // in paise
            currency: 'INR',
            accept_partial: false,
            customer: {
                name: selfName,
                contact: String(phone), // Ensure phone is a string
                email: email
            },
            notify: {
                sms: true,
                email: true
            },
            reference_id: initialReferenceId,
            description: `Payment for ${plan}`,
            // callback_url: `http://localhost:5173/payment-success?ref_id=${newForm._id}`,
            callback_url: `http://admin.magmaopd.in/payment-success?ref_id=${newForm._id}`,
            callback_method: 'get'
        });

        // Step 3: Save payment link in DB
        newForm.paymentLinkId = paymentLink.id;
        newForm.paymentLinkUrl = paymentLink.short_url;
        newForm.paymentLinkRefId = initialReferenceId;
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

export const regeneratePaymentLink = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await SelfInfo.findById(id);
    if (!form) return res.status(404).json({ message: "User not found" });

    // Create new payment link
    const newReferenceId = `${form._id.toString()}_${Date.now()}`;
    const paymentLink = await instance.paymentLink.create({
      amount: form.amountPaid * 100,
      currency: 'INR',
      accept_partial: false,
      customer: {
        name: form.selfName,
        contact: String(form.phone),
        email: form.email
      },
      notify: {
        sms: true,
        email: true
      },
      reference_id: newReferenceId,
      description: `Payment for ${form.plan}`,
      // callback_url: `http://localhost:5173/payment-success?ref_id=${form._id}`,
      callback_url: `http://admin.magmaopd.in/payment-success?ref_id=${form._id}`,
      callback_method: 'get'
    });

    // Update SelfInfo with new payment link and reference id
    form.paymentLinkId = paymentLink.id;
    form.paymentLinkUrl = paymentLink.short_url;
    form.paymentLinkRefId = newReferenceId;
    await form.save();

    // Optionally, email the new link
    await sendPaymentLinkEmail(form.email, paymentLink.short_url);

    res.status(200).json({
      message: "Payment link regenerated",
      paymentLink: paymentLink.short_url
    });
  } catch (error) {
    console.error("Error regenerating payment link:", error);
    res.status(500).json({ message: "Server error" });
  }
};

