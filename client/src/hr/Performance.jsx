import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ProductivityDashboard = () => {
  const [productivityData, setProductivityData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/productivity")
      .then((res) => res.json())
      .then((data) => setProductivityData(data));
  }, []);

  const barChartData = {
    labels: productivityData.map((d) => d.employeeName),
    datasets: [
      {
        label: "Tasks Completed",
        data: productivityData.map((d) => d.tasksCompleted),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Hours Worked",
        data: productivityData.map((d) => d.hoursWorked),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Performance Score",
        data: productivityData.map((d) => d.performanceScore),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Productivity Metrics</h2>
      <div className="w-full md:w-3/4 mx-auto">
        <Bar data={barChartData} />
      </div>
    </div>
  );
};

export default ProductivityDashboard;
