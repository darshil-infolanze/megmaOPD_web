import { Payment } from "../models/PaymentModel.js";
import { instance } from "../server.js"
import { SelfInfo } from "../models/SelfInfoModel.js";
import crypto from 'crypto'
// import fs from 'fs';
// import path from 'path';
import { sendInvoiceEmail } from '../utils/email.js';
import { generateInvoiceHtml } from '../utils/invoiceHtml.js';
import puppeteer from 'puppeteer';
import { request } from "http";
import { response } from "express";
import { error } from "console";

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
    res.status(500).json({ success: false, message: "Server error", err });
  }
};


export const handleRazorpayWebhook = async (req, res) => {
  console.log("[Webhook] Incoming request headers:", req.headers);
  console.log("[Webhook] Incoming request body:", req.body);
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers["x-razorpay-signature"];

  let digest;
  try {
    digest = crypto
      .createHmac("sha256", secret)
      .update(req.body)
      .digest("hex");
    console.log("[Webhook] Calculated digest:", digest);
  } catch (err) {
    console.error("[Webhook] Error calculating digest:", err);
    return res.status(500).json({ message: "Digest calculation error" });
  }

  if (digest !== signature) {
    console.error("[Webhook] Invalid signature!", { digest, signature });
    return res.status(400).json({ message: "Invalid signature" });
  }

  let event;
  try {
    event = JSON.parse(req.body.toString());
    console.log("[Webhook] Parsed event:", event);
  } catch (err) {
    console.error("[Webhook] Error parsing event body:", err);
    return res.status(400).json({ message: "Invalid event body" });
  }

  console.log("🔔 Webhook Event:", event.event);

  if (event.event === "payment_link.paid" || event.event === "order.paid") {
    let form;
    try {
      if (event.event === "payment_link.paid") {
        const refId = event.payload.payment_link.entity.reference_id;
        console.log("[Webhook] payment_link.paid for refId:", refId);
        form = await SelfInfo.findOne({ paymentLinkRefId: refId });
        console.log("[Webhook] SelfInfo found:", form);
      } else { // This handles 'order.paid'
        const orderId = event.payload.payment.entity.order_id;
        console.log("[Webhook] order.paid for order_id:", orderId);
        form = await SelfInfo.findOne({ razorpayOrderId: orderId });
        console.log("[Webhook] SelfInfo found:", form);
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
        console.error("❌ No form found for this event.");
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
const MERCHANT_KEY = "96434309-7796-489d-8924-ab56988a6076"
const MERCHANT_ID = "PGTESTPAYUAT86"
const MERCHANT_BASE_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
 const MERCHANT_STATUS_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay/status"

const redirectUrl = "http:localhost:4000/api/status"
const successUrl = "http:localhost:5173/payment-success"
const failureUrl = "http:localhost:5173/payment-failure"
export const newpayment = async (req, res) => {
  try {
    const { merchantTransactionId, amount, MUID, name, number } = req.body;
    // const merchantTransactionId = req.body.merchantTransactionId;
    const data = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      amount: req.body.amount * 100, // in paise
      merchantUserId: req.body.MUID,
      name: req.body.name,
      redirectUrl: `${redirectUrl}/?id=${merchantTransactionId}`,
      redirectMode: 'POST',
      mobileNumber: req.body.number,
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };
    const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')
    const keyIndex = 1;
    const string = payload + '/pg/v1/pay' + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;

    // const prod_Url= "https://api.phonepe.com/apis/hermes/pg/v1/pay"
    const options = {
      method: "POST",
      url: MERCHANT_BASE_URL,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: {
        request: paylaod

      }
    }
    const response = await axios.request(option);
    console.log(response.data.data.instrumentResponse.redirectInfo.url)
    res.status(200).json({ msg: "OK", url: response.data.data.instrumentResponse.redirectInfo.url })

  }
  catch (error) {
    console.log("error in payment", error)
    res.status(500).json({ error: 'Failed to initiate payment' })
  }
}

export const checkstatus = async (req, res) => {
  const merchantTransactionId = res.req.body.merchantTransactionId;
  // const merchantId = res.req.body.merchantId;
  const keyIndex = 1;
  const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + MERCHANT_KEY;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  const checksum = sha256 + '###' + keyIndex;
  const options = {
    method: "GET",
    url:`${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': checksum,
      'X-MERCHANT-ID': MERCHANT_ID
    },
  }
  axios.request(options).then(async (response) => {
    if (response.data.success === true) {
      const url = "http:localhost:5173/payment-success"
      return res.redirect(url);

    }
    else {
      const url = "http:localhost:5173/payment-failure"
      return res.redirect(url);
    }
  })
    .catch((error) => {
      console.log(error);
    })
}



