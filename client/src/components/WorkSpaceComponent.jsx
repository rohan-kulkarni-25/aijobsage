import React, { useState } from "react";

const WorkSpaceComponent = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("founder"); // Default to founder
  const [summary, setSummary] = useState("");
  const [linkedInMessage, setLinkedInMessage] = useState("");
  const [twitterMessage, setTwitterMessage] = useState("");
  const [coldEmail, setColdEmail] = useState("");

  // Function to handle job description input change
  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  // Function to handle recipient selection change
  const handleRecipientChange = (e) => {
    setSelectedRecipient(e.target.value);
  };

  // Function to generate all outputs
  const generateAllOutputs = () => {
    // Simulate content generation (replace with actual API calls or AI processing)
    const generatedSummary = generateSummary(jobDescription);
    const generatedLinkedInMessage = generateLinkedInMessage(selectedRecipient);
    const generatedTwitterMessage = generateTwitterMessage(selectedRecipient);
    const generatedColdEmail = generateColdEmail(selectedRecipient);

    // Update states
    setSummary(generatedSummary);
    setLinkedInMessage(generatedLinkedInMessage);
    setTwitterMessage(generatedTwitterMessage);
    setColdEmail(generatedColdEmail);
  };

  // Function to generate summary based on job description (dummy implementation)
  const generateSummary = (description) => {
    return `Summary of the job description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis vitae tortor volutpat commodo. Nulla facilisi. Sed pretium ullamcorper justo, eget vehicula orci sagittis a. Mauris fermentum eu nisi nec finibus. Ut venenatis ligula eget consequat iaculis.`;
  };

  // Function to generate LinkedIn message (dummy implementation)
  const generateLinkedInMessage = (recipient) => {
    return `Personalized LinkedIn message for ${recipient}: Hi ${
      recipient === "founder" ? "Founder" : "Hiring Manager"
    }, I'm interested in the opportunity at your company.`;
  };

  // Function to generate Twitter message (dummy implementation)
  const generateTwitterMessage = (recipient) => {
    return `Personalized Twitter message for ${recipient}: @${
      recipient === "founder" ? "Founder" : "HiringManager"
    }, I'm excited to learn more about your company and the open position.`;
  };

  // Function to generate cold email (dummy implementation)
  const generateColdEmail = (recipient) => {
    return `Cold email draft for ${recipient}: Dear ${
      recipient === "founder" ? "Founder" : "Hiring Manager"
    }, I hope this email finds you well. I am writing to express my interest in the open position at your company.`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-0">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Job Description Input */}
        <div className="mb-6">
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
            rows={6}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
            placeholder="Copy and paste job description here..."
            required
          />
        </div>

        {/* Recipient Selection */}
        <div className="mb-6">
          <label
            htmlFor="recipient"
            className="block text-sm font-medium text-gray-700"
          >
            Select Recipient
          </label>
          <select
            id="recipient"
            name="recipient"
            value={selectedRecipient}
            onChange={handleRecipientChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="founder">Founder</option>
            <option value="hiring_manager">Hiring Manager</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Generate Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={generateAllOutputs}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate All
          </button>
        </div>

        {/* Outputs Section */}
        <div className="bg-gray-50 rounded-lg p-4">
          {/* Summary */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p className="text-gray-700">{summary}</p>
          </div>

          {/* LinkedIn Message */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">LinkedIn Message</h3>
            <p className="text-gray-700">{linkedInMessage}</p>
          </div>

          {/* Twitter Message */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Twitter Message</h3>
            <p className="text-gray-700">{twitterMessage}</p>
          </div>

          {/* Cold Email */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Cold Email</h3>
            <p className="text-gray-700">{coldEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceComponent;
