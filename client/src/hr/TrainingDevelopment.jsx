import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrainingDevelopment = () => {
  const navigate = useNavigate();
  const [trainings, setTrainings] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    trainer: "",
    date: "",
    duration: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  const mockTrainings = [
    {
      _id: "1",
      title: "Leadership Workshop",
      trainer: "John Doe",
      date: "2025-06-20",
      duration: "2 days",
      description: "Learn advanced leadership skills.",
    },
    {
      _id: "2",
      title: "Technical Training",
      trainer: "Jane Smith",
      date: "2025-07-10",
      duration: "3 hours",
      description: "Introduction to new software tools.",
    },
  ];

  
  /*useEffect(() => {
    const fetchTrainings = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:4000/api/trainings");
        if (!res.ok) throw new Error("Failed to fetch trainings");
        const data = await res.json();
        setTrainings(data);
      } catch (error) {
        console.error("Error fetching trainings:", error);
        setApiError("Failed to load trainings. Using mock data.");
        setTrainings(mockTrainings);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrainings();
  }, []);*/

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    setApiError("");
    setSuccessMessage("");
  };

 
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.trainer.trim()) newErrors.trainer = "Trainer name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.duration.trim()) newErrors.duration = "Duration is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");

    // Client-side validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

   /* setIsLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/trainings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to add training");
      const newTraining = await res.json();
      setTrainings([...trainings, newTraining]);
      setFormData({ title: "", trainer: "", date: "", duration: "", description: "" });
      setSuccessMessage("Training added successfully!");
    } catch (error) {
      console.error("Error adding training:", error);
      setApiError("Failed to add training. Please try again.");
    } finally {
      setIsLoading(false);
    }*/
  };

  return (
    <div className="p-8 space-y-6 font-poppins">
      <h2 className="text-3xl font-bold text-gray-800">Training & Development</h2>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Training Program</h3>
        {apiError && (
          <p className="text-red-500 text-sm mb-4">{apiError}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
              Training Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Leadership Workshop"
              className={`w-full p-4 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="trainer" className="block text-lg font-semibold text-gray-700 mb-2">
              Trainer Name
            </label>
            <input
              type="text"
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
              placeholder="e.g., Lakshay Puhal"
              className={`w-full p-4 border ${
                errors.trainer ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.trainer && <p className="text-red-500 text-sm mt-1">{errors.trainer}</p>}
          </div>
          <div>
            <label htmlFor="date" className="block text-lg font-semibold text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full p-4 border ${
                errors.date ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="duration" className="block text-lg font-semibold text-gray-700 mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 3 hours, 2 days"
              className={`w-full p-4 border ${
                errors.duration ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the training program"
              rows="4"
              className={`w-full p-4 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400`}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Adding..." : "Add Training"}
          </button>
        </form>
      </div>

      {/* Training List Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Trainings</h3>
        {isLoading ? (
          <p className="text-gray-600">Loading trainings...</p>
        ) : trainings.length === 0 ? (
          <p className="text-gray-600">No trainings available.</p>
        ) : (
          <ul className="space-y-4">
            {trainings.map((training) => (
              <li
                key={training._id}
                className="p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300"
              >
                <h4 className="text-lg font-medium text-gray-800">{training.title}</h4>
                <p className="text-gray-600">Trainer: {training.trainer}</p>
                <p className="text-gray-600">Date: {new Date(training.date).toLocaleDateString()}</p>
                <p className="text-gray-600">Duration: {training.duration}</p>
                <p className="text-gray-600">{training.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Back to Dashboard Button */}
     
    </div>
  );
};

export default TrainingDevelopment;