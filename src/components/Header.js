import React from 'react';
import './Header.css'; // Import CSS file for header styling

const Header = () => {
  return (
    <header className="horizontal-header"> {/* Add class name for horizontal header styling */}
      <nav>
        <div className="page-links">
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
