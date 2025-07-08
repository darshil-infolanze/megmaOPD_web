import React, { useEffect, useState } from "react";
import axiosConfig from "../redux/axiosConfig";
import { toast } from "react-toastify";

const AgentSubmissionsTable = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchSubmissions = async (pageNum = page) => {
    setLoading(true);
    try {
      const { data } = await axiosConfig.get(
        `/agent-submissions?page=${pageNum}&limit=${limit}`
      );
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
      console.log(data);
    } catch (error) {
      toast.error("Failed to regenerate payment link.");
      console.error("Error regenerating payment link:", error);
    }
  };

  useEffect(() => {
    fetchSubmissions(page);
    // eslint-disable-next-line
  }, [page,limit]);

  const totalPages = Math.ceil(total / limit);

  const getPageNumbers = () => {
    const maxButtons = 5;
    let start = Math.max(1, page - Math.floor(maxButtons / 2));
    let end = start + maxButtons - 1;

    // adjust start if end is past totalPages
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

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
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-600 uppercase">
                No
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Plan
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Status
              </th>
              
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : submissions.length > 0 ? (
              submissions.map((sub, index) => (
                <tr key={sub._id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {(page - 1) * limit + index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {sub.selfName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {sub.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {sub.plan}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        sub.paymentStatus === "paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {sub.paymentStatus}
                    </span>
                    {sub.paymentStatus === "pending" && (
                      <button
                        className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
                        onClick={() => handleRegenerateLink(sub._id)}
                      >
                        Regenerate Payment Link
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center">
                  No submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row justify-end items-center mt-4 gap-3">
        {/* Pagination buttons */}
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 disabled:opacity-50"
          >
            &laquo;
          </button>

          {getPageNumbers().map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded font-medium ${
                p === page
                  ? "bg-violet-600 text-white"
                  : "bg-slate-100 text-gray-800 hover:bg-slate-200"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 disabled:opacity-50"
          >
            &raquo;
          </button>
        </div>

        {/* Per-page dropdown */}
        <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 focus:border-violet-500 focus:ring-violet-500 rounded p-1 text-sm outline-none"
            value={limit}
            onChange={(e) => {
              setPage(1);
              setLimit(Number(e.target.value));
            }}
          >
            <option value={10}>10Page</option>
            <option value={15}>15Page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AgentSubmissionsTable;
