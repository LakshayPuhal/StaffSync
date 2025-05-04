import React, { useState } from "react";

function Announcements() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Company Picnic", content: "Join us on June 10!", date: "2025-05-01" },
    { id: 2, title: "New Policy Update", content: "Updated leave policy effective May 15.", date: "2025-04-28" },
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
    if (!formData.content.trim()) newErrors.content = "Content is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setAnnouncements([
      ...announcements,
      {
        id: announcements.length + 1,
        title: formData.title,
        content: formData.content,
        date: new Date().toISOString().split("T")[0],
      },
    ]);
    console.log("Announcement Posted:", formData);
    setFormData({ title: "", content: "" });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800">📢 Announcements</h3>
      {/* Post Announcement Form */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Post New Announcement</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Company Event"
              className={`w-full p-4 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="content" className="block text-lg font-semibold text-gray-700 mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Enter announcement details"
              rows="4"
              className={`w-full p-4 border ${
                errors.content ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
          >
            Post Announcement
          </button>
        </form>
      </div>
      {/* Announcement List */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Announcements</h4>
        <ul className="space-y-4">
          {announcements.map((ann) => (
            <li
              key={ann.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              <h5 className="text-lg font-medium text-gray-800">{ann.title}</h5>
              <p className="text-gray-600">{ann.content}</p>
              <p className="text-gray-600 text-sm mt-1">Posted on {ann.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Announcements;