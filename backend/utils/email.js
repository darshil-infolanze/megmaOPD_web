import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';


// dotenv.config({ path: './config/config.env' });
dotenv.config({ path: path.resolve('./config/config.env') });
console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);


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

// ✅ 3. Send Contact Us confirmation to user
export const sendContactConfirmationEmail = async (to, name) => {
  const mailOptions = {
    from: `"Magma HealthOPD" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'We have received your enquiry - Magma Health',
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for contacting Magma HealthOPD. We have received your details and our team will contact you shortly.</p>
      <p>If you have any urgent queries, please call us at <a href="tel:8851766923">8851766923</a> or email us at <a href="mailto:preventivepulsehealth@gmail.com">preventivepulsehealth@gmail.com</a>.</p>
      <br/>
      <p>Best Regards,<br/>Magma HealthOPD Team</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// ✅ 4. Send Contact Us details to admin
export const sendContactDetailsToAdmin = async (name, email, mobileNo, plan) => {
  const mailOptions = {
    from: `"Magma HealthOPD" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Set in config.env
    subject: 'New Contact Us Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile No:</strong> ${mobileNo}</p>
      <p><strong>Plan:</strong> ${plan}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
