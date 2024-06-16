import React, { useState, useRef, useEffect } from "react";
import { RiFileCopyLine } from "react-icons/ri";

const ContentSection = ({ content }) => {
  console.log("content.", content.summary);
  const summaryRef = useRef(content.summary);
  const linkedInRef = useRef(content.linkedInMessage);
  const twitterRef = useRef(content.twitterMessage);
  const coldEmailRef = useRef(content.coldEmail);

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

  return (
    <div className="mt-8 space-y-6 ">
      {/* Fit Percentage */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-2">
          Fit Percentage
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-500 text-white text-4xl font-bold">
            {content.fit_percentage}
          </div>
        </div>
      </div>

      {/* Resume Suggestions */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-2">
          Why you are fit for this role ?
        </h2>
        <div className="overflow-auto p-2 rounded-md shadow-sm">
          <p className="text-sm text-gray-700">{content.reason_fit}</p>
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
          {content.summary}
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
          {content.linkedIn_Message}
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
          {content.twitter_Message}
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
          {content.cold_email}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
