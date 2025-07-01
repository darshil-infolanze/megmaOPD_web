import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/features/businessSlice";

function Users() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.business);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const total = user?.total || 0;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(getUser({ page, limit }));
  }, [dispatch, page, limit]);

  // user.users is the array from backend
  const users = user && Array.isArray(user.users) ? user.users : [];

  return (
    <div className="bg-[#f9fafb] p-4 md:p-6 min-h-screen">
      <div className="flex items-center justify-between mb-6 bg-white shadow-xl rounded-lg p-3 px-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
          <p className="text-sm text-gray-500">Manage platform users and their details.</p>
        </div>
      </div>
      <div className="bg-white shadow-xl rounded-lg p-3 px-5">
        <div className="overflow-x-auto bg-white shadow rounded-md mt-5">
          {loading ? (
            <div className="py-10 text-center text-gray-500">Loading users...</div>
          ) : error ? (
            <div className="py-10 text-center text-red-500">{error}</div>
          ) : (
            <>
            <table className="min-w-full bg-white border rounded shadow text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Submitted By</th>
                  <th className="p-2 border">Payment Status</th>
                  <th className="p-2 border">Plan</th>
                  <th className="p-2 border">Payment ID</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Created At</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td className="p-2 border">{user.selfName}</td>
                      <td className="p-2 border">{user.email}</td>
                      <td className="p-2 border">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.submittedBy === 'agent'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {user.submittedBy}
                        </span>
                      </td>
                      <td className="p-2 border">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.paymentStatus === 'paid'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {user.paymentStatus}
                        </span>
                      </td>
                      <td className="p-2 border">{user.plan}</td>
                      <td className="p-2 border text-xs">{user.paymentLinkId || user.razorpayPaymentId || '-'}</td>
                      <td className="p-2 border">{user.amountPaid}</td>
                      <td className="p-2 border">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-6 text-center text-gray-400">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;