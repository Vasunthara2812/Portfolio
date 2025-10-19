import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'


const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt=""/>
        <h1><span>I'm Vasunthara,</span>Aspiring Data Analyst</h1>
        
        <div className="hero-action">
            <div className="hero-connect">Connect</div>
            <div className="hero-resume">Resume</div>
        </div>

    </div>
  )
}

export default Hero