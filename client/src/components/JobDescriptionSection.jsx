import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const JobDescriptionSection = ({ GenerateContent }) => {
  const [jobDescription, setJobDescription] = useState("");

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleGenerateContent = () => {
    GenerateContent(jobDescription);
  };

  useEffect(() => {
    toast("HELLO");
  }, []);

  return (
    <div className="mb-8">
      <label
        htmlFor="jobDescription"
        className="block text-sm font-medium text-gray-700"
      >
        Job Description
      </label>
      <textarea
        id="jobDescription"
        name="jobDescription"
        value={jobDescription}
        onChange={handleJobDescriptionChange}
        rows={12}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
        placeholder="Copy and paste job description here..."
        required
      />

      {/* Generate Content Button */}
      <div className="mt-4">
        <button
          onClick={handleGenerateContent}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Content
        </button>
      </div>
    </div>
  );
};

export default JobDescriptionSection;
