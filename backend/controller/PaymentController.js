import { Payment } from "../models/PaymentModel.js";
import { instance } from "../server.js"
import { SelfInfo } from "../models/SelfInfoModel.js";
import crypto from 'crypto'
// import fs from 'fs';
// import path from 'path';
import { sendInvoiceEmail } from '../utils/email.js';
import { generateInvoiceHtml } from '../utils/invoiceHtml.js';
import puppeteer from 'puppeteer';

// import { generateInvoicePDF } from '../utils/invoice.js';


export const checkout = async (req, res) => {
  const option = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`

  };
  const order = await instance.orders.create(option);
  res.status(200).json({
    success: true,
    order,
    message: "order create succesfully"

  })
}
export const PaymentVerification = async (req, res) => {
  try {
    const { response, plan, userInfo, amountPaid } = req.body;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

    // Step 1: Signature verification
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.log("❌ Signature mismatch");
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    // Invoice generation is now handled by the webhook.
    // The code below is kept for record-keeping but won't send an email.

    // Step 2: Save payment record
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      plan,
      userInfo,
      amountPaid,
    });

    console.log("✅ Payment record stored in database.");
    res.status(200).json({ success: true, message: "Payment verified successfully" });

  } catch (err) {
    res.status(500).json({ success: false, message: "Server error",err });
  }
};


export const handleRazorpayWebhook = async (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers["x-razorpay-signature"];

  const digest = crypto
    .createHmac("sha256", secret)
    .update(req.body)
    .digest("hex");

  if (digest !== signature) {

    return res.status(400).json({ message: "Invalid signature" });
  }

  // If the signature is valid, parse the body to get the event object
  const event = JSON.parse(req.body.toString());

  console.log("🔔 Webhook Event:", event.event);

  if (event.event === "payment_link.paid" || event.event === "order.paid") {
    let form;
    try {
      if (event.event === "payment_link.paid") {
        const refId = event.payload.payment_link.entity.reference_id;
        console.log("[Webhook] payment_link.paid for refId:", refId);
        form = await SelfInfo.findById(refId);
      } else { // This handles 'order.paid'
        const orderId = event.payload.payment.entity.order_id;
        console.log("[Webhook] order.paid for order_id:", orderId);
        form = await SelfInfo.findOne({ razorpayOrderId: orderId });
      }

      if (form) {
        if (form.paymentStatus !== 'paid') {
          form.paymentStatus = "paid";
          await form.save();
          console.log("✅ Payment status updated for ID:", form._id);

          // --- Record Payment for dashboard stats ---
          if (event.event === "payment_link.paid") {
            await Payment.create({
              razorpay_order_id: event.payload.payment_link.entity.order_id || "",
              razorpay_payment_id: event.payload.payment_link.entity.payment_id || "",
              razorpay_signature: "", // Not available in webhook
              plan: {
                name: form.plan,
                price: form.amountPaid,
              },
              userInfo: {
                name: form.selfName,
                email: form.email,
                contact: form.phone,
                selfName: form.selfName,
              },
              amountPaid: form.amountPaid,
            });
          }

          // --- Generate and Send Invoice on Successful Payment ---
          console.log("✅ Payment successful. Generating invoice...");
          try {
            const invoiceData = {
              name: form.selfName,
              email: form.email,
              address: form.address,
              amount: form.amountPaid,
              plan: form.plan,
              invoiceNo: `INV-${form._id.toString().slice(-6)}`,
              date: new Date().toLocaleDateString("en-IN"),
            };
            const html = generateInvoiceHtml(invoiceData);
            const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
            const page = await browser.newPage();
            await page.setContent(html, { waitUntil: 'networkidle0' });
            const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
            await browser.close();

            await sendInvoiceEmail(form.email, pdfBuffer);
            console.log(`✅ Invoice sent to ${form.email}`);

            // Add this after form.paymentStatus = "paid"; and await form.save();
            await Payment.create({
              razorpay_order_id: event.payload.payment_link.entity.order_id || "",
              razorpay_payment_id: event.payload.payment_link.entity.payment_id || "",
              razorpay_signature: "", // Not available in webhook, can leave blank or add if you store it elsewhere
              plan: {
                name: form.plan,
                price: form.amountPaid,
              },
              userInfo: {
                name: form.selfName,
                email: form.email,
                contact: form.phone,
                selfName: form.selfName,
              },
              amountPaid: form.amountPaid,
            });
          } catch (invoiceError) {
            console.error("❌ Error generating or sending invoice:", invoiceError);
          }
        } else {
          console.log("ℹ️ Payment status was already 'paid'. Skipping invoice.", form._id);
        }
      } else {
        console.log("❌ No form found for this event.");
      }
    } catch (err) {
      console.error("❌ Error processing webhook event:", err);
    }
  } else {
    console.log("[Webhook] Event not handled:", event.event);
  }

  // console.log("Webhook payload:", JSON.stringify(event, null, 2));
  // console.log("Looking for SelfInfo with refId:", refId);

  res.status(200).json({ success: true });
};