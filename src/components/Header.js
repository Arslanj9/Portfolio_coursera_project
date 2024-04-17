import React from 'react';
import "./Header.css"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="horizontal-header"> {/* Add class name for horizontal header styling */}
      <nav>
        <div className="page-links">
          <ul>
            <li><button onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact Me</button></li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li><a href="https://www.github.com/" target="_blank"><FaGithub /></a></li>
            <li><a href="https://facebook.com/" target="_blank"><FaFacebook /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
