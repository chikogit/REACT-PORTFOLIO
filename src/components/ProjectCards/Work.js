// Importing the CSS file for styling the WorkCard component
import "./WorkCard.css";

// Importing the WorkCard component, WorkCardData, and React
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from 'react';

// Work component
const Work = () => {
  return (
    // Container for the work section with class "work-container"
    <div className="work-container">
      {/* Heading for the work section */}
      <h1 className="project-heading">Recent Projects</h1>
      {/* Container for displaying the project cards with class "project-container" */}
      <div className="project-container">
        {/* Mapping through the WorkCardData array to display individual project cards */}
        {WorkCardData.map((val, ind) => {
          return (
            // Using the WorkCard component to render each project card
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          )
        })}
      </div>
    </div>
  );
};

// Exporting the Work component to be used elsewhere in the application
export default Work;