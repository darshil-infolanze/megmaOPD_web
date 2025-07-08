import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';


// dotenv.config({ path: './config/config.env' });
dotenv.config({ path: path.resolve('./config/config.env') });

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS,
  },
});

// ✅ 1. Send payment link email
export const sendPaymentLinkEmail = async (to, paymentLink) => {
  const mailOptions = {
    from: `"Magma HealthOPD" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Complete Your Payment - Magma Health',
    html: `
      <h2>Thank you for registering!</h2>
      <p>Please click the link below to complete your payment:</p>
      <a href="${paymentLink}" target="_blank">${paymentLink}</a>
      <p>If you have any questions, contact us at support@magmaopd.in</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// ✅ 2. Send invoice email with PDF attachment
export const sendInvoiceEmail = async (to, pdfBuffer) => {
  const mailOptions = {
    from: `"Magma HealthOPD" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Payment Receipt - Magma Health',
    text: 'Thank you for your payment. Please find your invoice attached.',
    attachments: [
      {
        filename: 'invoice.pdf',
        content: pdfBuffer,
        contentType: 'application/pdf',
      },
    ],
  };

  await transporter.sendMail(mailOptions);
};
