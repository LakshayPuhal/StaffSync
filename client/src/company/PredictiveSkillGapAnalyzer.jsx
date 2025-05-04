import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PredictiveSkillGapAnalyzer = () => {
 
  const skillGapData = {
    labels: ['AI/ML', 'Data Analysis', 'Cybersecurity', 'Cloud Computing'],
    datasets: [
      {
        label: 'Current Proficiency',
        data: [60, 70, 50, 65],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Required Proficiency',
        data: [90, 85, 80, 90],
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  };

  
  const recommendations = [
    { skill: 'AI/ML', action: 'Enroll in advanced AI certification program' },
    { skill: 'Data Analysis', action: 'Conduct in-house Power BI workshops' },
    { skill: 'Cybersecurity', action: 'Partner with external training provider' },
    { skill: 'Cloud Computing', action: 'Implement AWS training bootcamp' },
  ];

 
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Predictive Skill Gap Analyzer</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Skill Gap Analysis</h2>
          <div className="h-64">
            <Bar
              data={skillGapData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, max: 100 } },
              }}
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Upskilling Recommendations</h2>
          <select
            className="border rounded p-2 mb-4 w-full"
            onChange={(e) => setSelectedSkill(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select Skill</option>
            {recommendations.map((rec) => (
              <option key={rec.skill} value={rec.skill}>{rec.skill}</option>
            ))}
          </select>
          {selectedSkill && (
            <p className="text-gray-600">
              <span className="font-semibold">{selectedSkill}:</span>{' '}
              {recommendations.find((rec) => rec.skill === selectedSkill)?.action}
            </p>
          )}
        </div>
      </div>
      <p className="mt-6 text-gray-600">
        Forecasts skill shortages and recommends upskilling strategies based on industry trends.
      </p>
    </div>
  );
};

export default PredictiveSkillGapAnalyzer;