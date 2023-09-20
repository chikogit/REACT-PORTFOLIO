// Importing the CSS file for styling
import "./style.css";

// Importing necessary dependencies from React and react-router-dom
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// NavBar component
const NavBar = () => {
  // State variables for handling the mobile menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // State variable for changing the header background color on scroll
  const [color, setColor] = useState(false);

  // Function to change the header background color on scroll
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Function to close the mobile menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setClick(false);
  };

  // Event listener for scroll event to trigger the changeColor function
  window.addEventListener("scroll", changeColor);

  return (
    // Container for the header with a dynamic class based on the scroll position
    <div className={color ? "header header-bg" : "header"}>
      {/* Logo linking to the homepage */}
      <Link to="/">
        <h1 className="nav-bar-header">JG's Portfolio</h1>
      </Link>
      
      {/* Navigation menu list */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" smooth={true} duration={1000} onClick={handleMenuItemClick}>All About Me</Link>
        </li>
        <li>
          <Link to="/Projects" smooth={true} duration={1000} onClick={handleMenuItemClick}>Projects</Link>
        </li>
        <li>
          <Link to="/ContactInfo" smooth={true} duration={1000} onClick={handleMenuItemClick}>Contact</Link>
        </li>
        <li>
          <Link to="/Resume" smooth={true} duration={1000} onClick={handleMenuItemClick}>Resume</Link>
        </li>
      </ul>

      {/* Hamburger menu icon for mobile view */}
      <div className="hamburger-menu" onClick={handleClick}>
        {click ? (
          // Cross icon when mobile menu is active
          <FaTimes size={20} style={{ color: "#FF006E" }} />
        ) : (
          // Hamburger icon when mobile menu is inactive
          <FaBars size={20} style={{ color: "#FF006E" }} />
        )}
      </div>
    </div>
  );
};

// Exporting the NavBar component to be used elsewhere in the application
export default NavBar;