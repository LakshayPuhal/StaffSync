import React, { useState } from "react";

function Discussions() {
  const [formData, setFormData] = useState({ topic: "", message: "" });
  const [discussions, setDiscussions] = useState([
    { id: 1, topic: "Flexible Work Hours", message: "Should we introduce flexible hours?", created: "2025-05-01" },
    { id: 2, topic: "Office Layout", message: "Ideas for improving our workspace?", created: "2025-04-29" },
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
    if (!formData.topic.trim()) newErrors.topic = "Topic is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setDiscussions([
      ...discussions,
      {
        id: discussions.length + 1,
        topic: formData.topic,
        message: formData.message,
        created: new Date().toISOString().split("T")[0],
      },
    ]);
    console.log("Discussion Started:", formData);
    setFormData({ topic: "", message: "" });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800">💬 Discussions</h3>
      {/* Start Discussion Form */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Start New Discussion</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-lg font-semibold text-gray-700 mb-2">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              value={formData.topic}
              onChange={handleInputChange}
              placeholder="e.g., Workplace Improvements"
              className={`w-full p-4 border ${
                errors.topic ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
              Initial Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Start the discussion..."
              rows="4"
              className={`w-full p-4 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
          >
            Start Discussion
          </button>
        </form>
      </div>
      {/* Discussion List */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Active Discussions</h4>
        <ul className="space-y-4">
          {discussions.map((discussion) => (
            <li
              key={discussion.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              <h5 className="text-lg font-medium text-gray-800">{discussion.topic}</h5>
              <p className="text-gray-600">{discussion.message}</p>
              <p className="text-gray-600 text-sm mt-1">Started on {discussion.created}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Discussions;