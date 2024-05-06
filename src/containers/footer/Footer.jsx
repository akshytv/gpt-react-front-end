import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/GPT-3.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' >
      <div className='gpt3__footer-heading'> 
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
        <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
        </div>
        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links-logo'>
              <img src={gpt3Logo} alt='logo' />
              <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='gpt3__footer-links_div' >
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div' >
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contacts</p>
          </div>
          <div className='gpt3__footer-links_div' >
            <h4>Get in touch</h4>
            <p>Kozhikode Cyberpark kerala section-2</p>
            <p>8281523816</p>
            <p>gpt3tooling@gmail.com</p>
          </div>
        </div>
        <div className='gpt3__footer-copyright'>
        <p> &copy; 2024 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer