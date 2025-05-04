import { useState } from "react";

export default function Payroll() {
  const [queries, setQueries] = useState([]);
  const [queryText, setQueryText] = useState("");

  const payrollData = [
    { month: "January", salary: "$3000", bonus: "$200", benefits: "Health, Travel" },
    { month: "February", salary: "$3000", bonus: "$150", benefits: "Health, Internet" },
    { month: "March", salary: "$3100", bonus: "$100", benefits: "Health, Travel" },
  ];

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if (!queryText.trim()) return;
    setQueries([{ text: queryText, date: new Date() }, ...queries]);
    setQueryText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Employee Payroll Dashboard</h1>

      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Payroll History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Month</th>
                <th className="border px-4 py-2">Salary</th>
                <th className="border px-4 py-2">Bonus</th>
                <th className="border px-4 py-2">Benefits</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.month}</td>
                  <td className="border px-4 py-2">{item.salary}</td>
                  <td className="border px-4 py-2">{item.bonus}</td>
                  <td className="border px-4 py-2">{item.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Payroll Queries</h3>
          <form onSubmit={handleQuerySubmit} className="flex flex-col gap-3 mb-4">
            <textarea
              className="w-full p-3 border rounded"
              rows="3"
              placeholder="Type your payroll-related query..."
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Query
            </button>
          </form>

          <ul className="space-y-2">
            {queries.map((q, idx) => (
              <li key={idx} className="border-l-4 border-blue-500 bg-gray-50 p-3 rounded shadow-sm">
                <p className="text-sm text-gray-800">{q.text}</p>
                <span className="text-xs text-gray-500">
                  Submitted on {q.date.toLocaleDateString()} at {q.date.toLocaleTimeString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
