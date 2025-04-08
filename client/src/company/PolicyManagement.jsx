import React, { useState } from "react";

const samplePolicies = [
  {
    id: 1,
    title: "Remote Work Policy",
    version: "1.2",
    acknowledgedBy: ["Alice", "Bob"],
    mandatory: true,
  },
  {
    id: 2,
    title: "Security Guidelines",
    version: "2.0",
    acknowledgedBy: ["Charlie"],
    mandatory: true,
  },
  {
    id: 3,
    title: "HR Policy",
    version: "1.0",
    acknowledgedBy: [],
    mandatory: false,
  },
];

const PolicyManagement = () => {
  const [policies, setPolicies] = useState(samplePolicies);

  const acknowledgePolicy = (id) => {
    setPolicies((prev) =>
      prev.map((policy) =>
        policy.id === id
          ? {
              ...policy,
              acknowledgedBy: [...policy.acknowledgedBy, "You"],
            }
          : policy
      )
    );
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">📄 Policy Management</h2>

      <div className="grid gap-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="border border-gray-300 rounded-xl p-5 shadow-sm bg-white"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">{policy.title}</h3>
              <span className="text-sm text-gray-600">Version: {policy.version}</span>
            </div>

            <p className="mb-2">
              <strong>Acknowledged by:</strong>{" "}
              {policy.acknowledgedBy.length > 0
                ? policy.acknowledgedBy.join(", ")
                : "No one yet"}
            </p>

            <p className="mb-4 text-sm text-gray-600">
              Mandatory Read:{" "}
              <span className={policy.mandatory ? "text-green-600" : "text-gray-400"}>
                {policy.mandatory ? "Yes" : "No"}
              </span>
            </p>

            <div className="flex gap-3">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg shadow-md transition"
                onClick={() => acknowledgePolicy(policy.id)}
              >
                Acknowledge
              </button>

              <button
                className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded-lg"
                onClick={() => alert("Downloading policy...")}
              >
                View/Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyManagement;
