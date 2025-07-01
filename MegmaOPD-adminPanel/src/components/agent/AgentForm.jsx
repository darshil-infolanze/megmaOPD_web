import React, { useState } from "react";
import axiosConfig from "../../redux/axiosConfig";

const AgentForm = () => {
  const [formData, setFormData] = useState({
    selfName: "",
    fatherHusbandName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    country: "India",
    panCard: "",
    address: "",
    plan: "",
    amountPaid: "",
  });

  const [paymentLink, setPaymentLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axiosConfig.post("/submit-agent", formData);
      if (data.paymentLink) {
        setPaymentLink(data.paymentLink);
      } else {
        alert("Something went wrong generating the link.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white rounded shadow">
      <h2 className="mb-6 text-2xl font-bold">Agent User Submission</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <input
          name="selfName"
          placeholder="Full Name"
          value={formData.selfName}
          onChange={handleChange}
          required
          className="input border p-2 rounded"
        />
        <input
          name="fatherHusbandName"
          placeholder="Father/Husband Name"
          value={formData.fatherHusbandName}
          onChange={handleChange}
          required
          className="input border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input border p-2 rounded"
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          className="input border p-2 rounded"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="input border p-2 rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="input border p-2 rounded"
        />
        <input
          name="panCard"
          placeholder="PAN Card"
          value={formData.panCard}
          onChange={handleChange}
          className="input border p-2 rounded"
        />
        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="input border p-2 rounded"
        />
        <select
          name="plan"
          value={formData.plan}
          onChange={(e) => {
            const plan = e.target.value;
            let amount = 0;
            switch (plan) {
              case "Magma Premium Care":
                amount = 29999;
                break;
              case "Magma Health Shield":
                amount = 49999;
                break;
              default:
                amount = 0;
            }
            setFormData((prev) => ({
              ...prev,
              plan: plan,
              amountPaid: amount,
            }));
          }}
          className="input border p-2 rounded"
          required
        >
          <option value="">Select Plan</option>
          <option value="Magma Premium Care">Magma Premium Care</option>
          <option value="Magma Health Shield">Magma Health Shield</option>
        </select>
        <input
          type="number"
          name="amountPaid"
          placeholder="Amount Paid"
          value={formData.amountPaid}
          readOnly
          className="input border p-2 rounded bg-gray-100"
        />
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Payment Link"}
          </button>
        </div>
      </form>
      {paymentLink && (
        <div className="p-4 mt-6 text-green-800 bg-green-100 border rounded">
          <p className="mb-1 font-medium">
            Send this payment link to the user:
          </p>
          <a
            href={paymentLink}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {paymentLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default AgentForm;