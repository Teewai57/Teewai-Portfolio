import React from 'react'
import "./Footer.css"
import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"


const Footer = () => {
  return (
    <footer>

      <div>
        <a href="#" className='footer_logo'>Teewai</a>
      </div>
      <div className="footer_socials">
        <a href="https://ng.linkedin.com/in/toyoabasi-bob-9835a7245?trk=people-guest_people_search-card" target='_blank'><FaLinkedin /></a>
        <a href="https://wa.me/08162340257" target="_blank"><BsWhatsapp /></a>
        <a href="mailto:bobtoyoabasi@gmail.com" target="_blank"><MdOutlineEmail /></a>
      </div>
      <div className="footer_copyrights">
        <small>&copy; Toyo. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer
