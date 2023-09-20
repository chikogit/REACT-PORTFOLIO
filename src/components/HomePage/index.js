// Importing the CSS file for styling
import "./style.css";

// Importing necessary dependencies from React and react-router-dom
import React from "react";
import { Link } from "react-router-dom";

// Importing image assets
import IntroImg from "../../assets/HomePage.jpeg";
import ProfileImg from "../../assets/profilepic.jpg";

// HeroImg component
const HeroImg = () => {
  return (
    // Container for the hero section with class "hero"
    <div className="hero">
      {/* Mask for the hero section with class "mask" */}
      <div className="mask">
        {/* Image element for the introductory image with class "intro-img" */}
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>

      {/* Container for the content with class "content" */}
      <div className="content">
        {/* Line breaks for spacing */}
        <br />
        <br />
        {/* Heading for the introduction */}
        <h1>Hi, I'm Brandon</h1>
        {/* Image element for the profile picture with class "profile-img" */}
        <img className="profile-img" src={ProfileImg} alt="ProfileImg" />
        {/* Paragraph for the introduction */}
        <p>
        I'm a Junior Web Developer who's deeply passionate about coding and crafting dynamic websites. Recently, I successfully wrapped up an intensive web development bootcamp program at Columbia University. Throughout this program, I've acquired proficiency in a wide range of technologies, including HTML, CSS, JavaScript, and React, just to name a few. 
This journey has not only equipped me with technical expertise but also sharpened my abilities in teamwork, problem-solving, and information gathering, making me a valuable asset for collaborative projects. Moreover, being fluent in both English and Spanish, I possess the capacity to connect with people from diverse backgrounds and cultures.
        </p>

        {/* Container for the button links */}
        <div>
          {/* Link to the "Projects" page with class "button" */}
          <Link to="/Projects" className="button">Projects</Link>
          {/* Link to the "ContactInfo" page with class "button-light" */}
          <Link to="/ContactInfo" className="button-light">Contact</Link>
        </div>

        {/* Line breaks for spacing */}
        <br />
        <br />
      </div>
    </div>
  );
};

// Exporting the HeroImg component to be used elsewhere in the application
export default HeroImg;