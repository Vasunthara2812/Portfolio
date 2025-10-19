import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Logo_1 from '../../assets/Logo_1.jpeg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={Logo_1} alt="" />
        </div>

        <div className="about-right">
          <div className="about-paragraph">
            <p>
              A dedicated enthusiatic fresher seeking an entry level position to begin my proffessional career.I possess strong communication skills, and willingness to learn. I aim to contribute to the success of the organization.
            </p>
          </div>

          <div className="about-skills"></div>
          <div className="about-skill"><p>Python</p><hr style={{width: "80%"}}></hr></div>
          <div className="about-skill"><p>MySql</p><hr style={{width: "70%"}}></hr></div>
          <div className="about-skill"><p>Html</p><hr style={{width: "50%"}}></hr></div>
          <div className="about-skill"><p>Tableau</p><hr style={{width: "60%"}}></hr></div>

        </div>
      </div>
      
    </div>
    
   
  );
};

export default About;
