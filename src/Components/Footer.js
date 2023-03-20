import React from 'react'
import Logo from '../Assets/Logo.svg';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'> 
                <img src={Logo} alt='' />
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <FaFacebookF/>
                <BsYoutube />
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Career</span>
                <span>Youtube</span>
                <span>Technology</span>
                <span>News</span>
            </div>
            <div className='footer-section-columns'>
                <span>54879-844412</span>
                <span>fooedie@gmail.com</span>
                <span>working day</span>
            </div>
            <div className='footer-section-columns'>
                <span>Term & Condition's</span>
                <span>Privacy Policy</span>
            </div>

        </div>
    </div>
  );
};

export default Footer;
