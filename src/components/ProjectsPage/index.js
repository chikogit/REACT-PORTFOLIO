// Importing the CSS file for styling the HeroImg2 component
import "./style.css";

// Importing React
import React from 'react';

// HeroImg2 component
const HeroImg2 = () => {
  return (
    // Container for the hero section with class "hero-img2"
    <div className="hero-img2">
      {/* Container for the heading with class "heading" */}
      <div className="heading">
        {/* Heading for the projects section */}
        <h1>Projects</h1>
        {/* Paragraph for the description of the projects section */}
        <p>Some of my work as a developer</p>
      </div>
    </div>
  );
};

// Exporting the HeroImg2 component to be used elsewhere in the application
export default HeroImg2;