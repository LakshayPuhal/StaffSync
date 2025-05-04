import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./context/FormContext";
import { motion } from "framer-motion";

function Register() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = () => {
    console.log("Login form data:", formData);
    navigate("/showLog");
  };

  const handleReg = () => navigate("/registeration");
  const handleCompLog = () => navigate("/CompAccount");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-sky-800 to-indigo-800 p-6 overflow-hidden relative">
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      
      <div className="relative flex w-full max-w-6xl h-[600px] rounded-3xl overflow-hidden shadow-2xl">
       
        <motion.div
          className="w-1/2 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-xl p-8 flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Access Your Portal
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              id="company"
              value={formData.company || ""}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-b-2 border-blue-400 focus:border-indigo-400 text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
              placeholder="Company Name"
            />
            <input
              type="text"
              id="username"
              value={formData.username || ""}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-b-2 border-blue-400 focus:border-indigo-400 text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
              placeholder="Username"
            />
            <input
              type="password"
              id="password"
              value={formData.password || ""}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-b-2 border-blue-400 focus:border-indigo-400 text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
              placeholder="Password"
            />
            <motion.button
              type="button"
              onClick={handleLogin}
              className="w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter Now
            </motion.button>
          </form>
        </motion.div>

        
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 pointer-events-none"></div>

        
        <motion.div
          className="w-1/2 bg-gradient-to-tl from-indigo-500/20 to-blue-600/20 backdrop-blur-xl p-8 flex flex-col justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent mb-4 text-center">
            Build Your Future
          </h2>
          <p className="text-white text-lg mb-6 text-center opacity-80">
            Join a platform designed to empower your organization.
          </p>
          <motion.button
            onClick={handleReg}
            className="w-3/4 p-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Registration
          </motion.button>
          <motion.button
            onClick={handleCompLog}
            className="w-3/4 p-4 mt-4 bg-transparent border-2 border-blue-400 text-blue-300 font-bold rounded-full hover:bg-blue-400/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Company Login
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
