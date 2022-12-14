import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import MyImage from "../../assets/portfolioPic.png"
import MyImage2 from "../../assets/profilePicture.jpg"
import HeaderSocials from "./headerSocials"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>ToyoAbasi</h1>
        <h5 className="text-light">A Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="myImage">
          <img src={MyImage} alt="me" />
        </div>
        <div className="myImage2">
          <img src={MyImage2} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">Scroll to Bottom</a>
      </div>
    </header>
    )
}

export default Header
