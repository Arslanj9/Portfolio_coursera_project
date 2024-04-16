import React from 'react';
import './LandingSection.css'; 
import avatar from '../assets/avatar.png'; 

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="landing-content">
        <img className="avatar" src={avatar} alt="Avatar" />
        <div className="bio">
          <p>Hello, i am Arslan</p>
          <h2>A frontend developer specialised in React</h2>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
