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
// export const sendPaymentLinkEmail = async (to, paymentLink) => {
//   const mailOptions = {
//     from: `"Magma HealthOPD" <${process.env.EMAIL_USER}>`,
//     to,
//     subject: 'Complete Your Payment - Magma Health',
//     html: `
//       <h2>Thank you for registering!</h2>
//       <p>Please click the link below to complete your payment:</p>
//       <a href="${paymentLink}" target="_blank">${paymentLink}</a>
//       <p>If you have any questions, contact us at support@magmaopd.in</p>
//     `,
//   };

//   await transporter.sendMail(mailOptions);
// };
export const sendPaymentLinkEmail = async (to, paymentLink,name) => {
  const mailOptions = {
    from: `"Magma HealthOPD" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Complete Your Payment - Magma Health',
    html: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Link - Registration Successful</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .success-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 32px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e5e5;
        }
        
        .celebration-emoji {
            font-size: 32px;
        }
        
        .success-title {
            font-size: 24px;
            font-weight: 600;
            color: #4ade80;
            margin: 0;
        }
        
        .greeting {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 24px;
            color: #1f2937;
        }
        
        .content-text {
            font-size: 15px;
            margin-bottom: 24px;
            color: #374151;
        }
        
        .payment-section {
            margin: 24px 0;
        }
        
        .payment-label {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 8px;
        }
        
        .payment-link {
            display: inline-block;
            color: #3b82f6;
            text-decoration: none;
            background-color: #eff6ff;
            padding: 12px 16px;
            border-radius: 6px;
            border: 1px solid #dbeafe;
            word-break: break-all;
            transition: background-color 0.2s;
        }
        
        .payment-link:hover {
            background-color: #dbeafe;
        }
        
        .services-text {
            margin: 24px 0;
            color: #374151;
        }
        
        .support-text {
            margin: 24px 0;
            color: #374151;
        }
        
        .signature {
            margin-top: 32px;
            padding-top: 20px;
            border-top: 1px solid #e5e5e5;
        }
        
        .signature-line {
            margin: 4px 0;
            color: #1f2937;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e5e5;
            text-align: center;
            font-size: 13px;
            color: #6b7280;
        }
        
        @media (max-width: 640px) {
            body {
                padding: 10px;
            }
            
            .email-container {
                padding: 24px;
            }
            
            .success-title {
                font-size: 20px;
            }
            
            .payment-link {
                padding: 10px 12px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="success-header">
            <span class="celebration-emoji">🎉</span>
            <h1 class="success-title">Registration Successful</h1>
        </div>
        
        <div class="greeting">
            Dear ${name || "Customer"},
        </div>
        
        <div class="content-text">
            Please click on the link given below to make payment.
        </div>
        
        <div class="payment-section">
            <div class="payment-label">Your Payment Link:</div>
            <a href="${paymentLink}" target="_blank" class="payment-link">
                ${paymentLink}
            </a>
        </div>
        
        <div class="services-text">
            After successful payment you will be able to avail featured services of Magma Opd.
        </div>
        
        <div class="support-text">
            If you have any questions or need assistance, feel free to contact our support team.
        </div>
        
        <div class="support-text">
            If you have any questions, contact us at <a href="mailto:support@magmaopd.in">support@magmaopd.in</a>
        </div>
        
        <div class="signature">
            <div class="signature-line">Best regards,</div>
            <div class="signature-line"><strong>Team Magma Opd</strong></div>
        </div>
        
        <div class="footer">
            © 2025 Magma Opd All rights reserved.
        </div>
    </div>
</body>
</html>
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
