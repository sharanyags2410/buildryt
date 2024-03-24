import React from 'react'
import cont from '../JoinusAssests/contactimg.png'
import './contact.css'
import { Link } from 'react-router-dom';

import { Fade } from 'react-reveal'
import ContactForm from './ContactForm'


const Contactus = () => {
  return (
    <div className='contactus'>
         <Fade bottom  >
<div className="contactus-container">
        <div className='text-wrapper'>
          <div className="subtitle-container">

            <hr />
            <h4>CONTACT US NOW</h4>
          </div>
          <h1>GET IN TOUCH</h1>
          <div className='textarea'>
            <h4>TRANSFORM YOUR VISION INTO REALITY</h4>
            <p>
              Ready to bring your dream project to life? Get in
              touch with us now! Use our contact form to share project
              details, and we'll provide a customized quote for our design/build services.
              Send a message or call us today to start the journey towards your dream space!
            </p>
          <div className="time">
            <h4>TIMINGS</h4>
            <p>Mon - Sat, 10 am to 6 pm</p>
            </div>
          </div>
        </div>
        <div className='imgwrapper'>
          <img src={cont} alt='not found' />
        </div>
        </div>
        </Fade>
      <ContactForm/>
      <div className="contact-details">
      <Fade bottom  >
      <div className="contact-heading">
        <hr/>
        <h4>CONTACT US</h4>
        <hr/>
        </div>
        <h2>CONTACT US BY PHONE OR EMAIL</h2>
        <h2>ADDRESS</h2>
        </Fade>
        <div className="email-info-items">
        <div className="email-info">
        <p className='support'> CUSTOMER SUPPORT</p>
       <p className='contactLink'>+91 905 7474 905</p></div>

       <div className="email-info">
        <p className='support'>CUSTOMER SUPPORT</p>
       <p className='contactLink'>CARE@BUILDRYT.COM</p></div>

       <div className="email-info">
        <p className='support'>JOIN AS A CONTRACTOR OR ARCHITECT</p>
       <p className='contactLink'>PARTNERS@BUILDRYT.COM</p></div>

       <div className="email-info">
        <p className='support'>GENERAL QUERIES & INFORMATION</p>
       <p className='contactLink'>INFO@BUILDRYT.COM</p></div>
       
        </div>
      </div>
    </div>
  )
}

export default Contactus
