import React from 'react'
import "./ContactForm.css"
import { Fade } from 'react-reveal'
const ContactForm = () => {
  return (
    <Fade bottom  >
       <div className='contact-form'>
        
          <div className='form'>
            <input type='text' placeholder='FULL NAME' />
            <input type='email' placeholder='EMAIL ADDRESS' />
            <input type='number' placeholder='PHONE NUMBER' />
            <input type='text' placeholder='SUBJECT' />
            <textarea class="msg-box" placeholder="PLEASE TYPE YOUR MESSAGE HERE..."></textarea>
            <button>SEND MESSAGE</button>
          </div>
         
       
    </div>
    </Fade>
  )
}

export default ContactForm
