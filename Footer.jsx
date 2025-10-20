import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
               
                <p>Vasunthara </p>
                <p>I'm a pursuing MCA student at Periyar University, Salem. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src='' alt='' />
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Connect</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@2025</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
            </div>

        </div>
    </div>
  )
}

export default Footer