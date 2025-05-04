import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const StakeholderAlignmentMatrix = () => {

  const alignmentData = {
    labels: ['Revenue Growth', 'Employee Retention', 'Innovation', 'Customer Satisfaction', 'Operational Efficiency'],
    datasets: [
      {
        label: 'HR Strategy Alignment',
        data: [85, 90, 70, 80, 75],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
      },
      {
        label: 'C-Suite Priorities',
        data: [90, 80, 85, 75, 70],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Stakeholder Alignment Matrix</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">HR Strategy vs. C-Suite Priorities</h2>
        <div className="h-96">
          <Radar
            data={alignmentData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: { r: { beginAtZero: true, max: 100 } },
            }}
          />
        </div>
        <p className="mt-4 text-gray-600">
          This matrix compares HR initiatives with executive priorities to ensure strategic alignment.
        </p>
      </div>
    </div>
  );
};

export default StakeholderAlignmentMatrix;