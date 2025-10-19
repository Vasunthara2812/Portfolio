import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


const Contact = () => {
  return (
    <div className="contact-container">

     
      <div className="contact">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>vasunthara28122001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 8012429305</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Paramthi Velur, Namakkal</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label>Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />

          <label>Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>

          <button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
