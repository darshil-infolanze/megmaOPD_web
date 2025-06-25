import React from "react";

const Eshipping = () => {
  const data = [
    { type: "Health e-Policies", time: "24–48 hours" },
    { type: "Wellness Plan Access", time: "Within 24 hours" },
    { type: "Teleconsultation Confirmations", time: "Within 12 hours" },
    { type: "Health Reports/Assessments", time: "1–2 business days" },
    { type: "Subscription Logins or App Links", time: "Within 12 hours" },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}

        <h1 className="text-center text-[#0f172a ] font-semibold text-xl mb-2">
          Magma OPD
        </h1>
        <h2 className="text-center text-[#8b5cf6] font-extrabold text-5xl mb-6">
          E-Shipping & Delivery Policy
        </h2>

        {/* Bordered Content Box */}
        <div className="border border-[#8b5cf6] p-8 rounded-md space-y-4 text-slate-700">
          <p>
            Welcome to <strong>Magma OPD</strong> – your digital-first partner
            in personalized Healthcare and wellness solutions. As a 100% online
            platform, all of our services and products are delivered
            electronically. This policy sets forth the terms and conditions
            under which digital deliveries are fulfilled, timeframes you can
            expect, and actions you may take if any issues arise.
          </p>

          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Overview</strong>
              <p>
                MagmaOPD provides all its products and services — including but
                not limited to Healthcare policies, teleconsultations, wellness
                subscriptions, and digital toolkits —{" "}
                <strong>exclusively through digital delivery</strong>. We do not
                deliver any physical goods.
              </p>
              <p>
                By purchasing any product or service on our platform, you agree
                to the terms outlined in this policy.
              </p>
            </li>

            <li>
              <strong>Digital Product Delivery</strong>
              <p>
                The following are considered “digital products” under this
                policy:
              </p>
            </li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Health policy documents and soft copies of certificates</li>
              <li>Personalized wellness plans and digital health reports</li>
              <li>
                Access credentials to third-party or in-house wellness platforms
              </li>
              <li>
                Telemedicine appointment confirmations and consultation links
              </li>
              <li>
                E-books, audio guides, or videos provided as part of health
                programs
              </li>
              <li>
                Any other non-tangible digital product delivered via electronic
                means
              </li>
            </ul>

            <li>
              <strong>Delivery Timelines</strong>
              <p>
                We are committed to timely digital delivery. Estimated delivery
                timelines from the moment of{" "}
                <strong>
                  successful payment and completion of any required
                  verifications (e.g., KYC)
                </strong>{" "}
                are:
              </p>
              <div className="overflow-x-auto p-4">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-left text-slate-700">
                      <th className="px-4 py-2 font-semibold border border-gray-300">
                        Product/Service Type
                      </th>
                      <th className="px-4 py-2 font-semibold border border-gray-300">
                        Delivery Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-2 border border-gray-300 text-gray-800">
                          {item.type}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-slate-700">
                          {item.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Note:</strong> Business days exclude Sundays and public
                holidays. In cases where regulatory checks or third-party
                approval is required, timelines may vary.
              </p>
            </li>

            <li>
              <strong>Method of Delivery</strong>
              <p>
                Digital products and communications will be sent through one or
                more of the following:
              </p>
            </li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Registered <strong>email address</strong>
              </li>
              <li>
                <strong>SMS or WhatsApp</strong> to the provided mobile number
              </li>
              <li>
                User dashboard within the Magma OPD portal (if applicable)
              </li>
              <li>
                In-app notification, where access is provided through a mobile
                application
              </li>
            </ul>
            <p>
              It is the customer’s responsibility to ensure the accuracy of
              contact details at the time of placing the order.
            </p>

            <li>
              <strong>Order Confirmation & Status Updates</strong>
              <p>Upon successful order placement and payment:</p>
            </li>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>
                An <strong>Order Confirmation Email</strong> will be sent
                immediately.
              </li>
              <li>
                A <strong>Delivery Confirmation Email/SMS</strong> will follow
                once the digital product has been dispatched.
              </li>
              <li>
                In case of delay, status updates will be proactively shared or
                can be requested by contacting our support team at{" "}
                <strong>support@magmaopd.in</strong>.
              </li>
            </ol>

            <li>
              <strong>Incomplete or Failed Digital Delivery</strong>
              <p>
                If you do not receive your digital product within the timeline
                promised:
              </p>
            </li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Please first check your spam/junk folder.</li>
              <li>
                If it is still not received, notify our support team by writing
                to <strong>support@magmaopd.in</strong> with your:
                <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1">
                  <li>Full Name</li>
                  <li>Registered Mobile Number</li>
                  <li>Order Number or Transaction ID</li>
                </ul>
              </li>
            </ul>
            <p>
              Our team will verify the order and re-issue the digital product at
              no additional cost within <strong>24 business hours</strong> of
              receipt of your complaint.
            </p>

            <li>
              <strong>Errors in Contact Information</strong>
              <p>
                If delivery fails due to incorrect or outdated email/mobile
                details provided by the user:
              </p>
            </li>
            <ul className="list-disc list-inside text-slate-700  space-y-1">
              <li>
                Magma OPD shall not be held responsible for non-delivery or
                unauthorized access to your documents.
              </li>
              <li>
                Upon request and verification, we may re-deliver to the correct
                address once corrected details are provided.
              </li>
              <li>
                Such re-delivery may take up to{" "}
                <strong>1 additional business day</strong>.
              </li>
            </ul>
            <li>
              <strong>No Physical Delivery or Courier</strong>
              <p>
                Magma OPD is a 100% digital platform. We do not provide physical
                copies of any product. Customers requiring a hard copy of policy
                documents must print the soft copy at their own discretion and
                cost. Our digital copies are valid for all official and legal
                purposes unless otherwise specified by a regulatory authority.
              </p>
            </li>
            <li>
              <strong>Force Majeure</strong>
              <p>
                We shall not be held liable for delays or non-delivery arising
                from circumstances beyond our control, including but not limited
                to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Internet outages</li>
                <li>Server failures</li>
                <li>Regulatory restrictions</li>
                <li>Natural disasters</li>
                <li>Cyberattacks or system compromises</li>
              </ul>
            </li>
            <li>
              <strong>Refunds Due to Delivery Issues</strong>
              <p>Refunds or credits will be offered only if:</p>
            </li>
            <ul className="list-disc text-slate-700 list-inside space-y-1">
              <li>
                The digital product is not delivered within{" "}
                <strong>15 business days</strong> of order/payment,
              </li>
              <li>
                And all reasonable attempts by the user and Magma OPD to resolve
                the issue have failed.
              </li>
              <li>
                Approved refunds will be credited back to the original payment
                method within 15 business days.
              </li>
              <li>Transaction or processing fees may not be refundable</li>
              <p>
                All refund requests will be governed by our [Cancellation &
                Refund Policy].
              </p>
            </ul>
            <li>
              <strong>Customer Support</strong>
              <p>
                For any assistance regarding your order, delivery status, or
                access to digital services, please reach out to our support
                team:
              </p>
            </li>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Email :</strong>support@magmaopd.in
              </li>
              <li>
                <strong>Phone:</strong> 8851766923
              </li>
              <li>
                <strong>Support Hours:</strong> Mon – Sat, 10:00 am to 6:00 pm
              </li>
              <li>
                   <strong>Website</strong>www.magmaopd.in
              </li>
              <p>We’re here to help you every step of the way.</p>
            </ul>
            <li>
              <strong>Updates to This Policy</strong>
              <p>
                Magma OPD reserves the right to update this policy at any time
                without prior notice. Any changes will be posted on this page
                with an updated “Last Updated” date. We encourage you to review
                this policy periodically.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Eshipping;
