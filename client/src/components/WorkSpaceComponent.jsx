import React, { useState } from "react";
import JobDescriptionSection from "./JobDescriptionSection";
import ContentSection from "./ContentSection";

const Workspace = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [generateChecked, setGenerateChecked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleJobDescriptionChange = (value) => {
    setJobDescription(value);
  };

  const handleGenerateToggle = () => {
    setGenerateChecked(!generateChecked);
  };

  const handleGenerateContent = () => {
    setShowContent(true);
  };

  return (
    <div className="flex flex-row gap-8">
      {/* Left Column - Job Description Section */}
      <div className="w-1/2">
        <JobDescriptionSection
          jobDescription={jobDescription}
          setJobDescription={handleJobDescriptionChange}
          generateChecked={generateChecked}
          handleGenerateToggle={handleGenerateToggle}
          handleGenerateContent={handleGenerateContent}
        />
      </div>
      <div className=" w-1/2">
        <ContentSection
          jobDescription={jobDescription}
          generateChecked={generateChecked}
        />
      </div>
      {/* Right Column - Content Section */}

      {/* {showContent && (
        <div className=" w-1/3">
          <ContentSection
            jobDescription={jobDescription}
            generateChecked={generateChecked}
          />
        </div>
      )} */}
    </div>
  );
};

export default Workspace;
