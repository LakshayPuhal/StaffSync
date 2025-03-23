import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./context/FormContext"; // Import the context

function Register() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);

  // Handle login form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = () => {
    console.log("Login form data:", formData);
    navigate("/hrWork");
  };

  const handleReg = () => {
    navigate("/registeration");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start space-y-10 md:space-y-0 md:space-x-10 mt-20 w-full h-auto bg-green-500 text-white p-6">
      {/* Login Section */}
      <div className="max-w-sm w-full p-6 border rounded-lg shadow-lg bg-white text-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to your employee account
        </h2>
        <label htmlFor="company" className="block text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Company"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
        />
        <label htmlFor="username" className="block text-gray-700 mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
        />
        <label htmlFor="password" className="block text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
        />
        <button
          onClick={handleLogin}
          className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Login
        </button>
      </div>

      {/* Register Section */}
      <div className="max-w-sm w-full p-6 border rounded-lg shadow-lg bg-white text-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Upgrade your organization <br /> Register your company
        </h2>
        <button
          onClick={handleReg}
          className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
