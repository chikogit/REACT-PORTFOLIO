// Importing the CSS file for styling
import "./style.css";

// Importing the necessary React library
import React from 'react';

// Defining a functional component named HeroImg3
const HeroImg3 = () => {
  return (
    // The component's root div with a class of "hero-img3" for styling
    <div className="hero-img3">
      {/* Nested div with a class of "heading" */}
      <div className="heading">
        {/* Heading element with "Contact" as the title */}
        <h1>Contact</h1>
        {/* Paragraph element with a message inviting users to chat */}
        <p>Feel free to chat with me</p>
      </div>
    </div>
  )
}

// Exporting the HeroImg3 component to be used elsewhere in the application
export default HeroImg3;