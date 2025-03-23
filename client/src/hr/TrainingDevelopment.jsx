import React, { useState, useEffect } from "react";

const TrainingDevelopment = () => {
  // State to store training programs
  const [trainings, setTrainings] = useState([]);

  // State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    trainer: "",
    date: "",
    duration: "",
    description: "",
  });

  // Fetch training programs when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/api/trainings")
      .then((res) => res.json())
      .then((data) => setTrainings(data))
      .catch((error) => console.error("Error fetching trainings:", error));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send new training program to backend
    const res = await fetch("http://localhost:4000/api/trainings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Update UI by adding new training program
      const newTraining = await res.json();
      setTrainings([...trainings, newTraining]);

      // Reset form fields
      setFormData({ title: "", trainer: "", date: "", duration: "", description: "" });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Training & Development</h2>

      {/* Training Program Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input className="border p-2 w-full" type="text" name="title" placeholder="Training Title" value={formData.title} onChange={handleChange} required />
        <input className="border p-2 w-full" type="text" name="trainer" placeholder="Trainer Name" value={formData.trainer} onChange={handleChange} required />
        <input className="border p-2 w-full" type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input className="border p-2 w-full" type="text" name="duration" placeholder="Duration (e.g. 3 hours, 2 days)" value={formData.duration} onChange={handleChange} required />
        <textarea className="border p-2 w-full" name="description" placeholder="Training Description" value={formData.description} onChange={handleChange} required></textarea>
        <button className="bg-blue-500 text-white p-2 rounded w-full" type="submit">Add Training</button>
      </form>

      {/* List of Training Programs */}
      <h3 className="text-lg font-bold mb-2">Upcoming Trainings</h3>
      <ul>
        {trainings.map((training) => (
          <li key={training._id} className="border p-3 mb-2">
            <h4 className="font-bold">{training.title}</h4>
            <p>Trainer: {training.trainer}</p>
            <p>Date: {new Date(training.date).toLocaleDateString()}</p>
            <p>Duration: {training.duration}</p>
            <p>{training.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingDevelopment;
