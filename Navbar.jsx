import React from 'react';
import './Navbar.css';
import Logo_1 from '../../assets/Logo_1.jpeg';

const Navbar = () => {
  const NAVBAR_HEIGHT = 70; // adjust to your navbar height in px if sticky/fixed

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) {
      console.warn(`[Navbar] No element found with id="${id}"`);
      return;
    }

    // If navbar is fixed and covering top, compute offset scroll
    const rect = section.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;
    const offsetTop = Math.max(absoluteTop - NAVBAR_HEIGHT, 0);

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className='navbar'>
      <img src={Logo_1} alt='logo' />
      <ul className="nav-menu">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('services')}>Services</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
      <div className="nav-connect" onClick={() => scrollToSection('contact')}>
        Connect with me
      </div>
    </div>
  );
};

export default Navbar;
