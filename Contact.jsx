import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ezbjl3a',   // replace with your EmailJS service ID
        'template_n43vwqc',  // replace with your EmailJS template ID
        e.target,
        'VXMxKJ9Bj0e1D-v0w'    // replace with your EmailJS public key
      )
      .then((res) => {
        console.log('✅ Email sent:', res.text);
        setSubmitted(true);
        e.target.reset(); // Clear form
        setTimeout(() => setSubmitted(false), 5000); // Hide success message after 5s
      })
      .catch((err) => {
        console.error('❌ Error:', err);
        alert('Failed to send message. Try again.');
      });
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
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

        <form className="contact-right" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="from_name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="from_email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required />

          <button type="submit" className="contact-submit">Submit now</button>

          {submitted && <p className="success-msg">✅ Your message has been sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
