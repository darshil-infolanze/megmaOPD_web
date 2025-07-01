// import plans from "razorpay/dist/types/plans";

export function generateInvoiceHtml({
  name = '',
  email = '',
  address = '',
  amount = 0,
  plan = '',
  invoiceNo = '',
  date = '',
}) {
const baseAmount = amount / 1.18;
  const gst = amount - baseAmount;
  const total = amount;
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Invoice</title>
    <style>
      body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #f7f7f7; margin: 0; padding: 0; }
      .invoice-box {
        max-width: 700px;
        margin: 40px auto;
        padding: 30px 40px;
        border: 1.5px solid #eee;
        background: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.08);
        border-radius: 10px;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 1.6rem;
        color: #6c2eb7;
      }
      .header p {
        margin: 2px 0;
        font-size: 1rem;
        color: #333;
      }
      .info-table {
        width: 100%;
        margin-bottom: 30px;
      }
      .info-table td {
        padding: 4px 0;
        font-size: 1rem;
      }
      .bill-to {
        font-weight: bold;
        color: #6c2eb7;
      }
      .invoice-details {
        text-align: right;
      }
      .items-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      .items-table th, .items-table td {
        border: 1px solid #eee;
        padding: 10px;
        text-align: left;
      }
      .items-table th {
        background: #f3eaff;
        color: #6c2eb7;
        font-weight: bold;
      }
      .summary-table {
        width: 100%;
        margin-top: 10px;
        font-size: 1rem;
      }
      .summary-table td {
        padding: 6px 0;
      }
      .summary-table .label {
        text-align: right;
        color: #333;
      }
      .summary-table .value {
        text-align: right;
        font-weight: bold;
        color: #6c2eb7;
      }
      .footer {
        text-align: center;
        margin-top: 40px;
        color: #888;
        font-size: 1rem;
      }
    </style>
  </head>
  <body>
    <div class="invoice-box">
      <div class="header">
         <h1>Magma OPD Smart Health</h1>
        <p>Basement, 5B-16, Tilak Nagar, New Delhi 110018</p>
        <p>Email: support@magmaopd.in | Phone: 8851766923</p>
      </div>
      <table class="info-table">
        <tr>
          <td class="bill-to">Bill To:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td></td>
          <td>${address}</td>
        </tr>
        <tr>
          <td></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td class="invoice-details" colspan="2">
            <strong>Invoice #:</strong> ${invoiceNo}<br>
            <strong>Date:</strong> ${date}
          </td>
        </tr>
      </table>
      <table class="items-table">
        <tr>
          <th>Description</th>
          <th>Qty</th>
          <th>Price</th>
          <th>GST (18%)</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>${plan}</td>
          <td>1</td>
          <td>₹${baseAmount.toFixed(2)}</td>
          <td>₹${gst.toFixed(2)}</td>
          <td>₹${total.toFixed(2)}</td>
        </tr>
      </table>
    <div style="margin-top: 20px; font-size: 1rem; border-top: 2px solid #eee; padding-top: 20px; display: flex; flex-direction: column; gap: 10px;">
  <div style="display: flex; justify-content: flex-end; gap: 10px;">
    <div style="color: #555; text-align: end;">Subtotal:</div>
    <div style="font-weight: bold; color: #6c2eb7; text-align: end;">₹${baseAmount.toFixed(2)}</div>
  </div>
  <div style="display: flex; justify-content: flex-end; gap: 10px;">
    <div style="color: #555; text-align: end;">GST (18%):</div>
    <div style="font-weight: bold; color: #6c2eb7; text-align: end;">₹${gst.toFixed(2)}</div>
  </div>
  <div style="display: flex; justify-content: flex-end; gap: 10px; font-size: 1.1rem;">
    <div style="color: #555; text-align: end;">Total:</div>
    <div style="font-weight: bold; color: #6c2eb7; text-align: end;">₹${total.toFixed(2)}</div>
  </div>
</div>


      <div class="footer">
        Thank you for your business!
      </div>
    </div>
  </body>
  </html>
  `;
}