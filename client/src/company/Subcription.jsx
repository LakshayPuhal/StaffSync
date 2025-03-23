import React from "react";
import { useNavigate } from "react-router-dom";

function Subscription() {
  const navigate = useNavigate();
  const handlePurchage =(e)=>{
    e.preventDefault();
    navigate("/companyDashboard");

  }
  return (
    <div className="flex flex-col md:flex-row justify-center items-start space-y-10 md:space-y-0 md:space-x-10 mt-20 w-full h-auto bg-green-500 text-white p-6">
      <div className="max-w-sm w-full p-6 border rounded-lg shadow-lg bg-white text-gray-800">
        <h2 className="font-calligraphy text-2xl"> 4 months Free Trial</h2>
      </div>
      <div className="max-w-sm w-full p-6 border rounded-lg shadow-lg bg-white text-gray-800">
      <h2 className="text-center font-calligraphy text-2xl">12 Months</h2>

       
      </div>
      <div className="max-w-sm w-full p-6 border rounded-lg shadow-lg bg-white text-gray-800">
      <h2 className="text-center font-calligraphy text-2xl mb-4">24 Months</h2>
      
      {/* List Section */}
      <ul className="list-disc pl-5 mb-6">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
      
      {/* Price Section */}
      <h1 className="text-center text-5xl mb-6">$4000</h1>
      
      {/* Purchase Button */}
      <button onClick={handlePurchage} className="p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 flex justify-center items-center">
        Purchase
      </button>
    </div>
    </div>
  );
}

export default Subscription;
