import React, {createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    employeeCount: "",
    industry: "",
    location: {
      country: "",
      state: "",
      district: "",
    },
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country" || name === "state" || name === "district") {
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/subscription")
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register Your Company</h2>

        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Company Name Input */}
          <div className="flex-1">
            <label htmlFor="companyName" className="block text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company name"
            />
          </div>

          {/* Employee Count Dropdown */}
          <div className="flex-1">
            <label htmlFor="employeeCount"  className="block text-gray-700 mb-2">
              Employee Count
            </label>
            <select
              id="employeeCount"
              name="employeeCount"
              value={formData.employeeCount}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select employee count
              </option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="101-500">101-500</option>
              <option value="501-1000">501-1000</option>
              <option value="1001-5000">1001-5000</option>
              <option value="5001-10000">5001-10000</option>
              <option value="10000+">10000+</option>
            </select>
          </div>
        </div>

        {/* Industry Input */}
        <label htmlFor="industry" className="block text-gray-700 mb-2">
          Industry
        </label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your industry"
        />

        {/* Location Inputs for Country, State, District */}
        <h1 className="flex justify-center items-center text-lg">Location</h1>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="country" className="block text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.location.country}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your country"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="state" className="block text-gray-700 mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.location.state}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your state"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="district" className="block text-gray-700 mb-2">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.location.district}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your district"
            />
          </div>
        </div>

        {/* Contact Information Input */}
        <label htmlFor="contact" className="block text-gray-700 mb-2">
          Contact Information
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your contact information"
        />

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegForm;
