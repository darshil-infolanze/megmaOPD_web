import React from "react";
// import AgentForm from "../components/agent/AgentForm";
import AgentSubmissionsTable from "../components/AgentSubmissionsTable";
import SelfInformation from "../components/agent/SelfInformation";


const Agent = () => {
  return (
    <div className="bg-[#f9fafb] p-4 md:p-6 min-h-screen">
      <div className="mb-6 bg-white shadow-xl rounded-lg p-3 px-5">
        <h2 className="text-2xl font-bold text-gray-800">Agent Management</h2>
        <p className="text-sm text-gray-500">
          This page will be used for agent management in the future.
        </p>
      </div>
      {/* <AgentForm /> */}
      <SelfInformation/>
      <AgentSubmissionsTable />
    </div>
  );
};

export default Agent;
