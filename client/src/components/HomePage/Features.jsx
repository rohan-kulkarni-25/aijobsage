import React from "react";
import { RiFileCopyLine, RiRocketLine } from "react-icons/ri";

const Features = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 sm:rounded-md sm:py-8">
      <h2 className="text-center my-16 text-5xl font-medium"> what we do ?</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 sm:grid-cols-1">
        {/* Feature 1: Personalized Messages */}
        <div className="bg-indigo-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
          <RiFileCopyLine size={48} className="text-indigo-500" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Personalized Messages
          </h3>
          <p className="text-gray-600 text-center">
            Write standout job applications with AI-powered message creation.
          </p>
        </div>

        {/* Feature 2: AI-Generated Insights */}
        <div className="bg-indigo-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
          <RiRocketLine size={48} className="text-indigo-500" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            AI-Generated Insights
          </h3>
          <p className="text-gray-600 text-center">
            Get data-driven recommendations to optimize your resume & cover
            letter.
          </p>
        </div>

        {/* Feature 3: Job Fit Score */}
        <div className="bg-indigo-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-500 text-white text-2xl font-bold flex items-center justify-center">
            87%
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Job Fit Score
          </h3>
          <p className="text-gray-600 text-center">
            See how well your skills match specific job postings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
