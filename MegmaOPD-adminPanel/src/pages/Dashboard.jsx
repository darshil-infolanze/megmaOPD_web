import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../redux/features/businessSlice";
import { FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboard, loading, error } = useSelector((state) => state.business);

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  const stats = dashboard && dashboard.stats ? dashboard.stats : {};

  return (
    <div className="bg-[#f9fafb] p-4 md:p-6 min-h-screen">
      <div className="mb-6 bg-white shadow-xl rounded-lg p-3 px-5">
        <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
        <p className="text-sm text-gray-500">Overview of platform statistics.</p>
      </div>
      <div className="bg-white shadow-xl rounded-lg p-3 px-5">
        {loading ? (
          <div className="py-10 text-center text-gray-500">Loading dashboard...</div>
        ) : error ? (
          <div className="py-10 text-center text-red-500">{error}</div>
        ) : dashboard && dashboard.stats ? (
          <>
            {/* Total Users Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center bg-gradient-to-r from-violet-500 to-violet-700 text-white rounded-xl shadow p-6">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                  <FaUsers className="text-3xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.totalUsers}</div>
                  <div className="text-sm font-medium mt-1">Total Users</div>
                </div>
              </div>
            </div>
            {/* Details Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Latest Users</h3>
                <ul className="bg-white rounded shadow p-4">
                  {stats.latestUsers && stats.latestUsers.length > 0 ? (
                    stats.latestUsers.map((user, idx) => (
                      <li key={user._id || idx} className="border-b last:border-b-0 py-2">
                        <span className="font-semibold text-violet-700">{user.selfName}</span>
                        <span className="ml-2 text-gray-500 text-xs">{user.phone}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400">No recent users.</li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Latest Payments</h3>
                <ul className="bg-white rounded shadow p-4">
                  {stats.latestPayments && stats.latestPayments.length > 0 ? (
                    stats.latestPayments.map((payment, idx) => (
                      <li key={payment._id || idx} className="border-b last:border-b-0 py-2">
                        <span className="font-semibold text-green-700">₹{payment.amountPaid}</span>
                        {/* <span className="ml-2 text-gray-500 text-xs">{payment.userInfo?.selfName || payment.userInfo?.name || "Unknown User"}</span> */}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400">No recent payments.</li>
                  )}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="py-10 text-center text-gray-400">No dashboard data found.</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;