import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';
import resume from '../../assets/Resume.jpeg'; // or Resume.pdf if you have a PDF

const Hero = () => {

  // Function to scroll to footer smoothly
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Vasunthara,</span> Aspiring Data Analyst
      </h1>

      <div className="hero-action">
        {/* 👇 Connect button scrolls to footer */}
        <div className="hero-connect" onClick={scrollToFooter}>
          Connect
        </div>

        {/* 👇 Resume button opens the resume image or PDF */}
        <a href={resume} target="_blank" rel="noopener noreferrer" className="hero-resume">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
