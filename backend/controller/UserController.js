// import { SelfInfo } from "../models/SelfInfoModel.js";
// import { Member } from "../models/MemberModel.js";

import { SelfInfo } from "../models/SelfInfoModel.js";
// import { Member } from "../models/MemberModel.js";
import { generateInvoiceHtml } from "../utils/invoiceHtml.js";
import puppeteer from "puppeteer";
import fs from 'fs';
import { sendInvoiceEmail } from '../utils/email.js';
import path from 'path';
export const submitUserInfo = async (req, res) => {
    try {

        const {
            selfInfo = {},
            plan,
            amountPaid,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;
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
            members = [],
        } = selfInfo;

        const address = `${address1 || ""}, ${address2 || ""}, ${city || ""}, ${state || ""} - ${pincode || ""}, ${country || ""}`.trim();

        const self = await SelfInfo.create({
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
            submittedBy: 'user',
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            paymentStatus: 'paid',
            members,

        });
// --- Generate Invoice PDF ---
        const invoiceData = {
            name: selfName,
            email,
            address,
            amount: amountPaid,
            plan,
            invoiceNo: `INV-${self._id.toString().slice(-6)}`,
            date: new Date().toLocaleDateString(),
        };
        const html = generateInvoiceHtml(invoiceData);
        // const browser = await puppeteer.launch();
        const browser = await puppeteer.launch({
  headless: true,
  executablePath: puppeteer.executablePath(),
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
        await browser.close();
        // Ensure invoices directory exists
        const invoiceDir = path.join( process.cwd(), 'megmaOPD_web', 'server', 'invoices');
        if (!fs.existsSync(invoiceDir)) {
            fs.mkdirSync(invoiceDir, { recursive: true });
        }
        fs.writeFileSync(path.join(invoiceDir,` ${invoiceData.invoiceNo}.pdf`), pdfBuffer);
        // --- Send Invoice Email ---
        try {
            await sendInvoiceEmail(email, pdfBuffer);
        } catch (emailErr) {
            console.error('Failed to send invoice email:', emailErr);
            // Optionally, you can notify the user in the response
        }
        // --- End Invoice PDF & Email ---

        res.status(201).json({ success: true, self });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, error });
    }
};

//         const memberDocs = await Promise.all(
//             members.map((member) =>
//                 Member.create({ ...member, selfInfoId: self._id })
//             )
//         );

//         self.members = memberDocs.map((m) => m._id);
//         await self.save();
//         const populatedSelf = await SelfInfo.findById(self._id).populate({
//             path: "members",
//             model: "Member",
//         });

//         res.status(201).json({ success: true, self: populatedSelf });
//     } catch (error) {
//         console.error("submit-info error:", error);
//         res.status(500).json({ success: false, message: error.message, error });
//     }
// };
