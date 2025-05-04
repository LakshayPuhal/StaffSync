import React, { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({ title: "", question: "" });
  const [surveys, setSurveys] = useState([
    { id: 1, title: "Employee Satisfaction", question: "How satisfied are you?", created: "2025-04-25" },
    { id: 2, title: "Workplace Feedback", question: "What can we improve?", created: "2025-04-20" },
  ]);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.question.trim()) newErrors.question = "Question is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSurveys([
      ...surveys,
      {
        id: surveys.length + 1,
        title: formData.title,
        question: formData.question,
        created: new Date().toISOString().split("T")[0],
      },
    ]);
    console.log("Survey Created:", formData);
    setFormData({ title: "", question: "" });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800">📝 Feedback & Surveys</h3>
      {/* Create Survey Form */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Create New Survey</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
              Survey Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Employee Feedback"
              className={`w-full p-4 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="question" className="block text-lg font-semibold text-gray-700 mb-2">
              Sample Question
            </label>
            <input
              type="text"
              id="question"
              value={formData.question}
              onChange={handleInputChange}
              placeholder="e.g., How satisfied are you?"
              className={`w-full p-4 border ${
                errors.question ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.question && <p className="text-red-500 text-sm mt-1">{errors.question}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
          >
            Create Survey
          </button>
        </form>
      </div>
      {/* Survey List */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Existing Surveys</h4>
        <ul className="space-y-4">
          {surveys.map((survey) => (
            <li
              key={survey.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              <h5 className="text-lg font-medium text-gray-800">{survey.title}</h5>
              <p className="text-gray-600">{survey.question}</p>
              <p className="text-gray-600 text-sm mt-1">Created on {survey.created}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Feedback;