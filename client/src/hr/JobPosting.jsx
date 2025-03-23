import React, { useState, useEffect } from "react";
import axios from "axios";

const JobPosting = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    jobType: "Full-Time",
    description: "",
    requirements: "",
    salaryRange: "",
  });

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/jobs");
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = { ...formData, requirements: formData.requirements.split(",") };

    try {
      const res = await axios.post("http://localhost:4000/api/jobs", newJob);
      if (res.status === 201) {
        setJobs((prevJobs) => [...prevJobs, res.data]); // Update job list
        setFormData({
          title: "",
          department: "",
          location: "",
          jobType: "Full-Time",
          description: "",
          requirements: "",
          salaryRange: "",
        });
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Job Posting</h2>

      {/* Job Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border p-2 w-full rounded" type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
        <input className="border p-2 w-full rounded" type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
        <input className="border p-2 w-full rounded" type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <select className="border p-2 w-full rounded" name="jobType" value={formData.jobType} onChange={handleChange}>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Contract</option>
        </select>
        <textarea className="border p-2 w-full rounded" name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required />
        <input className="border p-2 w-full rounded" type="text" name="requirements" placeholder="Requirements (comma-separated)" value={formData.requirements} onChange={handleChange} />
        <input className="border p-2 w-full rounded" type="text" name="salaryRange" placeholder="Salary Range" value={formData.salaryRange} onChange={handleChange} />

        <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition">Post Job</button>
      </form>

      {/* Job Listings */}
      <h3 className="text-lg font-bold mt-6 mb-2">Job Listings</h3>
      <ul className="space-y-2">
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs posted yet.</p>
        ) : (
          jobs.map((job) => (
            <li key={job._id} className="border p-4 rounded shadow-sm">
              <h4 className="font-bold">{job.title} ({job.jobType})</h4>
              <p className="text-gray-600">{job.department} - {job.location}</p>
              <p className="text-gray-800 font-semibold">{job.salaryRange}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobPosting;
