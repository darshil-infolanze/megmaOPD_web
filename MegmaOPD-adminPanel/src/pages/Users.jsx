import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/features/businessSlice";

function Users() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.business);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const total = user?.total || 0;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(getUser({ page, limit }));
  }, [dispatch, page, limit]);

  // user.users is the array from backend
  const users = user && Array.isArray(user.users) ? user.users : [];

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
    <div className="bg-[#f9fafb] p-4 md:p-6 min-h-screen">
      <div className="flex items-center justify-between mb-6 bg-white shadow-xl rounded-lg p-4 px-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
          <p className="text-sm text-gray-500">
            Manage platform users and their details.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg p-5 overflow-x-auto">
        {loading ? (
          <div className="py-10 text-center text-gray-500">
            Loading users...
          </div>
        ) : error ? (
          <div className="py-10 text-center text-red-500">{error}</div>
        ) : (
          <>
            <table className="min-w-full text-sm text-left border border-gray-200">
               <thead className="bg-gray-100 text-xs font-semibold text-gray-700 uppercase">
                <tr>
                  <th className="p-2 border">No</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Submitted By</th>
                  <th className="p-2 border">Payment Status</th>
                  <th className="p-2 border">Plan</th>
                  <th className="p-2 border">Payment ID</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Payment Mode</th>
                  <th className="p-2 border">Created At</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <td className="p-2 border">
                        {(page - 1) * limit + index + 1}
                      </td>
                      <td className="p-2 border">{user.selfName}</td>
                      <td className="p-2 border">{user.email}</td>
                      <td className="p-2 border">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.submittedBy === "agent"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {user.submittedBy}
                        </span>
                      </td>
                      <td className="p-2 border">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.paymentStatus === "paid"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {user.paymentStatus}
                        </span>
                      </td>
                      <td className="p-2 border">{user.plan}</td>
                      <td className="p-2 border text-xs">
                        {user.paymentLinkId || user.razorpayPaymentId || "-"}
                      </td>
                      <td className="p-2 border">{user.amountPaid}</td>
                      <td className="p-2 border">
                        {user.paymentMode ? (
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              user.paymentMode === "razorpay"
                                ? "bg-blue-100 text-blue-700"
                                : user.paymentMode === "phonepe"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {user.paymentMode}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="p-2 border">
                        {user.createdAt
                          ? new Date(user.createdAt).toLocaleDateString()
                          : "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-6 text-center text-gray-400">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

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
                {/* <label className="text-sm text-gray-600">Per page:</label> */}
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
          </>
        )}
      </div>
    </div>
  );
}

export default Users;
