import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComplianceAndDocumentation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ documentName: "", file: null });
  const [documents, setDocuments] = useState([
    { id: 1, name: "Employee Handbook", date: "2025-01-15" },
    { id: 2, name: "Safety Policy", date: "2025-02-10" },
  ]);

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({ ...formData, [id]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.documentName || !formData.file) return;
    setDocuments([
      ...documents,
      { id: documents.length + 1, name: formData.documentName, date: new Date().toISOString().split("T")[0] },
    ]);
    console.log("Document Uploaded:", formData);
    setFormData({ documentName: "", file: null });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Compliance & Documentation</h2>
      {/* Upload Form */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload New Document</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="documentName" className="block text-lg font-semibold text-gray-700 mb-2">
              Document Name
            </label>
            <input
              type="text"
              id="documentName"
              value={formData.documentName}
              onChange={handleInputChange}
              placeholder="e.g., HR Policy"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-lg font-semibold text-gray-700 mb-2">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
          >
            Upload Document
          </button>
        </form>
      </div>
      {/* Document List */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Existing Documents</h3>
        <ul className="space-y-4">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              <span className="text-gray-800">{doc.name}</span>
              <span className="text-gray-600 text-sm">{doc.date}</span>
            </li>
          ))}
        </ul>
      </div>
    
    </div>
  );
}

export default ComplianceAndDocumentation;