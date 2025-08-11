import React, { useState } from "react";
// import AgentForm from "../components/agent/AgentForm";
import AgentSubmissionsTable from "../components/AgentSubmissionsTable";
import SelfInfrormation from "../components/agent/SelfInformation"

const Agent = () => {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className="bg-[#f9fafb] p-4 md:p-6 min-h-screen">
      <div className="mb-6 bg-white shadow-xl rounded-lg p-3 px-5 flex items-center justify-between flex-wrap gap-4">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">Agent Management</h2>
          <p className="text-sm text-gray-500">
            This page will be used for agent management in the future.
          </p>
        </div>
        <button
          onClick={()=>setShowForm(!showForm)}
          className="mt-4 md:mt-0 bg-violet-600 text-white font-semibold px-4 py-2 rounded hover:bg-violet-700 transition duration-200"
        >
          {showForm ? "New Submission" : "View Submission"}
        </button>
      </div>
      {/* toggle between self information and agent submissiontable */}
      {showForm ? <AgentSubmissionsTable /> : <SelfInfrormation />}
      {/* <AgentForm /> */}
      {/* <SelfInformation/> */}
      {/* <AgentSubmissionsTable /> */}
    </div>
  );
};

export default Agent;
