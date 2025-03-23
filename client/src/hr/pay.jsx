import React, { useEffect, useState } from "react";
import axios from "axios";

const PayrollPage = () => {
  const [payrolls, setPayrolls] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/payroll")
      .then((response) => setPayrolls(response.data))
      .catch((error) => console.error("Error fetching payrolls:", error));
  }, []);

  const downloadPayslip = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/payroll/payslip/${id}`);
      alert("Payslip generated successfully! Check the server folder.");
    } catch (error) {
      console.error("Error downloading payslip:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Payroll & Payslips</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Employee</th>
            <th className="p-2 border">Net Salary</th>
            <th className="p-2 border">Payment Date</th>
            <th className="p-2 border">Payslip</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map((pay) => (
            <tr key={pay._id} className="border">
              <td className="p-2 border">{pay.employeeName}</td>
              <td className="p-2 border">${pay.netSalary}</td>
              <td className="p-2 border">{new Date(pay.paymentDate).toLocaleDateString()}</td>
              <td className="p-2 border">
                <button
                  onClick={() => downloadPayslip(pay._id)}
                  className="px-2 py-1 bg-blue-500 text-white"
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollPage;
