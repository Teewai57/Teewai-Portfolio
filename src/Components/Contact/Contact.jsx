import React from 'react';
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ni73a0y', 'template_rnq7mcd', form.current, 'LzmkVjCVK_X-HOMTs');
    e.target.reset();
    // console.log(form.current.target)
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>bobtoyoabasi@gmail.com</h5>
            <a href="mailto:bobtoyoabasi@gmail.com"  target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Toyoabasi Bob</h5>
            <a href="https://ng.linkedin.com/in/toyoabasi-bob-9835a7245?trk=people-guest_people_search-card" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348162340257</h5>
            <a href="https://wa.me/08162340257" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full name' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
