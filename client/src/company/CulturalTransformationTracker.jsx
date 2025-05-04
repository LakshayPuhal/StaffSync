import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const CulturalTransformationTracker = () => {
  
  const cultureImpactData = {
    labels: ['Collaboration', 'Innovation', 'Inclusivity', 'Agility'],
    datasets: [
      {
        label: 'Cultural Impact',
        data: [30, 25, 20, 25],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
        borderColor: ['#388E3C', '#1976D2', '#FFA000', '#D32F2F'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Cultural Transformation Impact Tracker</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Cultural Initiative Distribution</h2>
          <div className="h-64">
            <Doughnut
              data={cultureImpactData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Key Metrics</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Productivity Increase:</span> +15% due to collaboration initiatives
            </li>
            <li>
              <span className="font-semibold">Innovation Index:</span> 80/100, up 10 points
            </li>
            <li>
              <span className="font-semibold">Employee Satisfaction:</span> 85% positive feedback
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-gray-600">
        Tracks the impact of cultural transformation initiatives on organizational outcomes.
      </p>
    </div>
  );
};

export default CulturalTransformationTracker;