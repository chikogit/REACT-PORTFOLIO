// Importing the CSS file for styling the HeroImg4 component
import "./style.css";

// Importing Button from react-bootstrap for using the download button
import Button from 'react-bootstrap/Button';

// Importing React
import React from 'react';

// HeroImg4 component
const HeroImg4 = () => {

  // Function to handle the download of the resume when the button is clicked
  const handleDownloadResume = () => {
    const resumeDownloadLink = 'https://drive.google.com/file/d/1jST9wlWjLMKVmqIHsX_jgZ93SCDvJaWB/view?usp=sharing';
    window.open(resumeDownloadLink);
  };

  return (
    // Container for the hero section with class "hero-img4"
    <div className="hero-img4">
      {/* Container for the heading with class "heading" */}
      <div className="heading">
        {/* Heading for the resume section */}
        <h1>Resume</h1>
      </div>

      {/* Container for the title and cards with class "title" */}
      <div className="title">
        <div className="card-container">
          {/* Card 1: All-Around Skills */}
          <div className="card">
            <h3>All-Around Skills</h3>
            {/* Horizontal bar */}
            <span className="bar"></span>
            <p>
              {/* Unordered list of all-around skills */}
              <ul>
                <li>Customer Service and Assistance</li>
                <li>Information Gathering</li>
                <li>Willingness to Lead</li>
                <li>Team Member Training</li>
                <li>Spanish - Bilingual</li>
              </ul>
            </p>
          </div>

          {/* Card 2: Technical Skills */}
          <div className="card">
            <h3>Technical Skills</h3>
            {/* Horizontal bar */}
            <span className="bar"></span>
            <p>
              {/* Unordered list of technical skills */}
              <ul>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Bootstrap</li>
                <li>J.Query</li>
                <li>MySQL and NoSQL w/MongooseDB</li>
                <li>Node.js</li>
                <li>React</li>
              </ul>
            </p>
          </div>

          {/* Card 3: Education */}
          <div className="card">
            <h3>Education</h3>
            {/* Horizontal bar */}
            <span className="bar"></span>
            <p>
              {/* Unordered list of education details */}
              <ul>
                <li>- Columbia Full Stack Developer Bootcamp, NYC — Certificate September 2023 </li>
                <li>- </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Container for the download button with class "button-container" */}
      <div className="button-container">
        {/* Download button to download the full resume */}
        <Button variant="primary" onClick={handleDownloadResume}>
          Download My Full Resume
        </Button>
      </div>
    </div>
  );
};

// Exporting the HeroImg4 component to be used elsewhere in the application
export default HeroImg4;