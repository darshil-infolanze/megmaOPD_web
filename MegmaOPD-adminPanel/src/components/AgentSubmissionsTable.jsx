import React, { useEffect, useState } from "react";
import axiosConfig from "../redux/axiosConfig";
import { toast } from "react-toastify";

const AgentSubmissionsTable = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchSubmissions = async (pageNum = page) => {
    setLoading(true);
    try {
      const { data } = await axiosConfig.get(`/agent-submissions?page=${pageNum}&limit=${limit}`);
      setSubmissions(data.submissions);
      setTotal(data.total);
      setPage(data.page);
    } catch (error) {
      toast.error("Failed to fetch submissions.");
      console.error("Error fetching agent submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Regenerate payment link handler
  const handleRegenerateLink = async (id) => {
    try {
      const { data } = await axiosConfig.post(`/regenerate-payment-link/${id}`);
      toast.success("Payment link regenerated and sent to user!");
      fetchSubmissions();
    } catch (error) {
      toast.error("Failed to regenerate payment link.");
      console.error("Error regenerating payment link:", error);
    }
  };

  useEffect(() => {
    fetchSubmissions(page);
    // eslint-disable-next-line
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-4 mt-6 bg-white rounded-lg shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recent Submissions</h2>
        <button
          onClick={() => fetchSubmissions(page)}
          className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-purple-400"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Plan</th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="py-4 text-center">Loading...</td>
                
              </tr>
            ) : submissions.length > 0 ? (
              submissions.map((sub) => (
                <tr key={sub._id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{sub.selfName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{sub.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{sub.plan}</td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        sub.paymentStatus === 'paid'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {sub.paymentStatus}
                    </span>
                    {sub.paymentStatus === 'pending' && (
                      <button
                        className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
                        onClick={() => handleRegenerateLink(sub._id)}
                      >
                        Regenerate Payment Link
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(sub.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center">No submissions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <div>
          <button
            className="px-3 py-1 mr-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSubmissionsTable;