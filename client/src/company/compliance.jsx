import { useState } from "react";
import { FilePlus, Bell, CheckCircle2, XCircle } from "lucide-react";

const sampleComplianceData = [
  { id: 1, title: "NDA Agreement", status: "completed", expiry: "2025-01-01" },
  { id: 2, title: "Code of Conduct Training", status: "pending" },
  { id: 3, title: "Data Protection Policy", status: "completed", expiry: "2024-11-30" },
  { id: 4, title: "Cert. of Employment", status: "pending" },
];

function ComplianceManagement() {
  const [complianceList, setComplianceList] = useState(sampleComplianceData);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Compliance Management</h1>

      <div className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Compliance Checks</h2>
        <div className="space-y-4">
          {complianceList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <FilePlus className="text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    Status: {item.status === "completed" ? (
                      <span className="text-green-600 font-semibold">Completed</span>
                    ) : (
                      <span className="text-yellow-500 font-semibold">Pending</span>
                    )}
                  </p>
                  {item.expiry && (
                    <p className="text-sm text-gray-500">Expires on: {item.expiry}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {item.status === "pending" && (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Upload
                  </button>
                )}
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm flex items-center gap-1">
                  <Bell className="w-4 h-4" /> Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-2">Compliance Risk Score</h2>
        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 text-white text-sm flex items-center justify-center" style={{ width: "75%" }}>
            75% Compliant
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplianceManagement;
