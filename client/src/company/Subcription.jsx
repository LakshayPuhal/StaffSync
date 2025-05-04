import React from "react";
import { useNavigate } from "react-router-dom";

function Subscription() {
  const navigate = useNavigate();

  const handlePurchase = (e) => {
    e.preventDefault();
    navigate("/CompAccount");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 flex flex-col justify-center items-center p-6 md:p-12">
      {/* Header */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-12 animate-fade-in">
        Choose Your Subscription Plan
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl w-full">
        {/* Free Trial Card */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Free Trial</h2>
          <p className="text-center text-gray-600 mb-6">4 Months Free</p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Access to Basic Features</li>
            <li>Limited Support</li>
            <li>Try Before You Buy</li>
          </ul>
          <p className="text-4xl font-bold text-center text-gray-800 mb-8">$0</p>
          <button
            onClick={handlePurchase}
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Start Free Trial
          </button>
        </div>

        {/* 12 Months Card */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Standard Plan</h2>
          <p className="text-center text-gray-600 mb-6">12 Months</p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Full Feature Access</li>
            <li>Priority Support</li>
            <li>Monthly Updates</li>
          </ul>
          <p className="text-4xl font-bold text-center text-gray-800 mb-8">$1500</p>
          <button
            onClick={handlePurchase}
            className="w-full p-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            Purchase Now
          </button>
        </div>

        {/* 24 Months Card */}
        <div className="w-full max-w-lg bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 relative">
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Best Value
          </span>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Premium Plan</h2>
          <p className="text-center text-gray-800 mb-6">24 Months</p>
          <ul className="list-disc pl-6 mb-8 text-gray-800 space-y-2">
            <li>All Standard Features</li>
            <li>Exclusive Content</li>
            <li>24/7 Premium Support</li>
          </ul>
          <p className="text-4xl font-bold text-center text-gray-800 mb-8">$4000</p>
          <button
            onClick={handlePurchase}
            className="w-full p-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white text-lg font-semibold rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300"
          >
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;