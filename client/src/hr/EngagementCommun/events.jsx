import React, { useState } from "react";

function Events() {
  const [formData, setFormData] = useState({ title: "", date: "", description: "" });
  const [events, setEvents] = useState([
    { id: 1, title: "Team Building Retreat", date: "2025-06-15", description: "Outdoor activities and workshops." },
    { id: 2, title: "Annual Gala", date: "2025-12-10", description: "Celebrate our achievements!" },
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
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setEvents([
      ...events,
      {
        id: events.length + 1,
        title: formData.title,
        date: formData.date,
        description: formData.description,
      },
    ]);
    console.log("Event Created:", formData);
    setFormData({ title: "", date: "", description: "" });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800">🎉 Events</h3>
      {/* Create Event Form */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Create New Event</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Team Building"
              className={`w-full p-4 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="date" className="block text-lg font-semibold text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
              className={`w-full p-4 border ${
                errors.date ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the event"
              rows="4"
              className={`w-full p-4 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
          >
            Create Event
          </button>
        </form>
      </div>
      {/* Event List */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h4>
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              <h5 className="text-lg font-medium text-gray-800">{event.title}</h5>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Events;