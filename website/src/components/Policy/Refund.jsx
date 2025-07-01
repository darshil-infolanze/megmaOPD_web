import React from "react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Headings outside the box */}

        <h1 className="text-center text-[#0f172a ] font-semibold text-xl mb-2">
          Refund Policy
        </h1>
        <h2 className="text-center text-[#8b5cf6] font-extrabold text-5xl mb-6">
          TERMS & CONDITIONS
        </h2>

        {/* Bordered Content Box */}
        <div className="border border-[#8b5cf6] p-8 rounded-md space-y-4 text-slate-700">
          <p>
            At Magma OPD, we are committed to delivering quality Healthcare and
            wellness services entirely through digital platforms. Given the
            nature of our offerings—where access is instant, personalized, or
            dependent on regulatory approvals—our refund and cancellation policy
            is carefully framed to balance consumer rights with operational
            realities.
          </p>
          <p>
            Please read the following policy to understand how cancellations,
            refunds, and rescheduling requests are handled.
          </p>
          <h2 className="text-lg font-semibold text-black mb-2">
            Refund for Misrepresentation
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <strong>Eligibility:</strong> Customers are eligible for a refund
              of 90% of the paid amount if a request is raised within 15 days of
              the payment date.
            </li>
            <li>
              <strong>Conditions:</strong> This policy applies in cases where
              services or products were misrepresented during the sales process.
            </li>
            <li>
              <strong>Deductions:</strong> The remaining 10% will be retained as
              administrative and processing fees.
            </li>
          </ul>
          <h2 className="text-lg font-semibold text-black mb-2">
            Refund for Non-Delivery of Services
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <strong>Eligibility:</strong> If the promised services are not
              delivered by Magma OPD within the stipulated time, you are
              eligible for a refund.
            </li>
            <li>
              <strong>Conditions:</strong> In this case, 90% of the amount paid
              will be refunded, with the remaining 10% deducted as service and
              plan charges.
            </li>
          </ul>
          <h2 className="text-lg font-semibold text-black mb-2">
            General Terms and Conditions
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <strong>Processing Time:</strong> Refunds will be processed only
              after the claim has been reviewed and verified.
            </li>
            <li>
              <strong>Documentation:</strong> Customers must provide proof of
              payment and relevant documentation supporting their refund claim.
            </li>
            <li>
              <strong>Processing Time:</strong> The refund process may take up
              to 5–7 business days after approval and will be credited to the
              original payment method within that period.
            </li>
            <li>
              <strong>Refund Method:</strong> Approved refunds will be credited
              back to the original source account (e.g., bank account,
              credit/debit card, or payment wallet).
            </li>
            <li>
              <strong>Non-Refundable Fees:</strong> Any transaction or
              processing fees incurred may not be refundable.
            </li>
          </ul>
          <h3 className="text-md font-semibold text-black mb-2">
            Non-Refundable Conditions
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Utilized Services:</strong> Refunds will not be granted
              for services already rendered or utilized.
            </li>
            <li>
              <strong>Customized Services:</strong> Customized or one-time
              services are also non-refundable, except in cases of
              non-performance by Magma OPD.
            </li>
            <li>
              <strong>Completed Services:</strong> Fees for consultations, lab
              tests, or diagnostics that are completed.
            </li>
            <li>
              <strong>Timeframe:</strong> No refunds will be entertained under
              any circumstances after 15 days from the date of purchase or
              service booking.
            </li>
          </ul>
          <h2 className="text-lg font-semibold text-black mb-2">
            Refund Process
          </h2>
          <p>
            To request a refund, send an email to{" "}
            <strong>support Magma OPD.in</strong> with the following:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Your<strong> full name</strong>
            </li>
            <li>
              <strong>Order number</strong>
            </li>
            <li>
              <strong>Email and phone number</strong> used for the purchase
            </li>
            <li>
              <strong>Reason</strong>for refund request and any supporting
              evidence
            </li>
          </ul>
          Our team will respond within<strong> 2 business days </strong>
          <p>
            Once approved, refunds are processed within{" "}
            <strong> 15 business days </strong> to the original payment method.
          </p>
          <h3 className="text-md font-semibold text-black mb-2">
            No Cash Refunds or Transfers
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              All refunds are credited only to the{" "}
              <strong>original payment source</strong>
              (bank, UPI, card, wallet).
            </li>
            <li>
              We do <strong>not</strong> issue cash refunds, cheques, or
              third-party transfers under any circumstances.
            </li>
          </ul>
          <strong>Dispute Resolution & Governing Law</strong>
          <p>
            At Magma OPD, we value transparency and customer satisfaction. In
            the unlikely event of a dispute arising from any transaction,
            product, or service:
          </p>
          <h3 className="text-md font-semibold text-black mb-2">
            Step 1: Internal Resolution
          </h3>
          <p>
            Customers are encouraged to first reach out to our Grievance
            Redressal Team by writing to us at support Magma OPD.in with the
            subject line: “Dispute Resolution – [Order ID]”. <br />
            We aim to resolve all complaints within 10 business days of receipt.
          </p>
          <h3 className="text-md font-semibold text-black mb-2">
            Step 2: Escalation
          </h3>
          <p>
            If the issue remains unresolved after Step 1, the customer may
            escalate the matter by sending a formal written complaint to the
            Magma OPD Compliance Officer at hello Magma OPD.in. We shall attempt
            a good-faith resolution through mediation within 15 business days.
          </p>
          <h3 className="text-md font-semibold text-black mb-2">
            Step 3: Legal Recourse
          </h3>
          <p>
            If a resolution is still not reached, the matter shall be subject to
            legal proceedings:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Governing Law: This policy and all transactions undertaken through
              Magma OPD shall be governed by and construed in accordance with
              the laws of India.
            </li>
            <li>
              Jurisdiction: Subject to the foregoing, all disputes, claims, or
              proceedings shall be subject to the exclusive jurisdiction of the
              competent courts at New Delhi, India.
            </li>
          </ul>
          <strong>Customer Support</strong>
          <p>
            For any assistance regarding any refund, rescheduling, or
            policy-related query, please reach out to our support team:
          </p>
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
          <h3 className="text-md font-semibold text-black mb-2">
            Policy Amendments
          </h3>
          <p>
            {" "}
            Magma OPD reserves the right to amend this policy at any time.
            Updated versions will be posted on our website with the “Last
            Updated” date. Your continued use of our services constitutes
            acceptance of the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;
