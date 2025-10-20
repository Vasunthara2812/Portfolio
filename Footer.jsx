import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const handleConnect = () => {
    if (!linkedinUrl.trim()) {
      alert('Please enter your LinkedIn profile URL.');
      return;
    }

    // Open your LinkedIn profile in new tab (for them to send wwwrequest manually)
    window.open('https://www.linkedin.com/in/vasunthara-s-941337287', '_blank');

    // Optionally log their LinkedIn URL (backend, email, etc.)
    console.log(`User wants to connect: ${linkedinUrl}`);
  };

  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p className="footer-name">Vasunthara</p>
          <p>I'm pursuing MCA at Periyar University, Salem.</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <input
              type="url"
              placeholder="Enter your LinkedIn profile URL"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleConnect}>
            Connect
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2025</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
