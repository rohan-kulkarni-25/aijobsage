import React, { useState } from "react";
import JobDescriptionSection from "./JobDescriptionSection";
import ContentSection from "./ContentSection";
import axios from "axios";
import generateContent from "../services/GenerateContent";
import { useDispatch } from "react-redux";
import { updateLoader } from "../store/Slices/loaderSlice";

const Workspace = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [showContent, setShowContent] = useState(false);

  const [content, setContent] = useState({});

  const dispatch = useDispatch();

  const handleJobDescriptionChange = (value) => {
    setJobDescription(value);
  };

  const handleGenerateContent = async (jobDescription) => {
    try {
      dispatch(updateLoader({ isloading: true }));
      let dataObject = {
        jobDescription,
        messageFor: "Founder",
      };
      const response = await generateContent(dataObject);
      setShowContent(true);
      let data = response.data.data;
      setContent(data);
      dispatch(updateLoader({ isloading: false }));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-row gap-8">
      {/* Left Column - Job Description Section */}
      <div className="w-1/2 flex-1">
        <JobDescriptionSection GenerateContent={handleGenerateContent} />
      </div>
      {showContent ? (
        <div className=" w-1/2">
          <ContentSection
            content={content}
            fitPercentage={content.fitPercentage}
            summary={content.summary}
            linkedInMessage={content.linkedInMessage}
            twitterMessage={content.twitterMessage}
            coldEmail={content.coldEmail}
          />
        </div>
      ) : null}
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
