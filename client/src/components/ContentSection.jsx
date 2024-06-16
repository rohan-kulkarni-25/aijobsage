import React, { useState, useEffect, useRef } from "react";
import { RiFileCopyLine } from "react-icons/ri";

const ContentSection = ({ jobDescription }) => {
  const [summary, setSummary] = useState("");
  const [linkedInMessage, setLinkedInMessage] = useState("");
  const [twitterMessage, setTwitterMessage] = useState("");
  const [coldEmail, setColdEmail] = useState("");
  const [resumeSuggestions, setResumeSuggestions] = useState("");
  const [fitPercentage, setFitPercentage] = useState(0);

  const summaryRef = useRef(null);
  const linkedInRef = useRef(null);
  const twitterRef = useRef(null);
  const coldEmailRef = useRef(null);

  // Function to generate dummy content (replace with actual logic)
  const generateContent = () => {
    // Generate dummy content with at least 200 characters
    const loremIpsum =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    setSummary(loremIpsum.substring(0, 300)); // Limit summary to 300 characters
    setLinkedInMessage(loremIpsum.substring(0, 200)); // Limit LinkedIn message to 200 characters
    setTwitterMessage(loremIpsum.substring(0, 200)); // Limit Twitter message to 200 characters
    setColdEmail(loremIpsum.substring(0, 500)); // Limit cold email to 500 characters

    // Generate dummy resume suggestions
    const suggestions =
      "Your resume could benefit from clearer formatting and more specific achievements. Consider adding metrics and quantifiable results to highlight your contributions.";

    setResumeSuggestions(suggestions);

    // Generate dummy fit percentage
    const percentage = Math.floor(Math.random() * 100); // Random fit percentage between 0 and 100
    setFitPercentage(percentage);
  };

  // Copy text to clipboard
  const copyToClipboard = (ref) => {
    const element = ref.current;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  };

  // Generate content initially when component mounts
  useEffect(() => {
    generateContent();
  }, []);

  return (
    <div className="mt-8 space-y-6 ">
      {/* Fit Percentage */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-2">
          Fit Percentage
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-500 text-white text-4xl font-bold">
            {fitPercentage}%
          </div>
        </div>
      </div>

      {/* Resume Suggestions */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-2">
          Resume Suggestions
        </h2>
        <div className="overflow-auto p-2 rounded-md shadow-sm">
          <p className="text-sm text-gray-700">{resumeSuggestions}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">Summary</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => copyToClipboard(summaryRef)}
          >
            <RiFileCopyLine />
          </button>
        </div>
        <div
          ref={summaryRef}
          className="overflow-auto p-4 rounded-md shadow-sm bg-gray-50"
        >
          {summary}
        </div>
      </div>

      {/* LinkedIn Message */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">
            LinkedIn Message
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => copyToClipboard(linkedInRef)}
          >
            <RiFileCopyLine />
          </button>
        </div>
        <div
          ref={linkedInRef}
          className="overflow-auto p-4 rounded-md shadow-sm bg-gray-50"
        >
          {linkedInMessage}
        </div>
      </div>

      {/* Twitter Message */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">Twitter Message</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => copyToClipboard(twitterRef)}
          >
            <RiFileCopyLine />
          </button>
        </div>
        <div
          ref={twitterRef}
          className="overflow-auto p-4 rounded-md shadow-sm bg-gray-50"
        >
          {twitterMessage}
        </div>
      </div>

      {/* Cold Email */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">Cold Email</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => copyToClipboard(coldEmailRef)}
          >
            <RiFileCopyLine />
          </button>
        </div>
        <div
          ref={coldEmailRef}
          className="overflow-auto p-4 rounded-md shadow-sm bg-gray-50"
        >
          {coldEmail}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
