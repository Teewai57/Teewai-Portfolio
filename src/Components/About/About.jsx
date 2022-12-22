import React from 'react';
import "./About.css";
import MeImage from "../../assets/aboutProfile.webp"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={MeImage} alt="About Image" />
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5><a href="#experience">Experience</a></h5>
              <small>10+ months Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5><a href="#portfolio">Clients</a></h5>
              <small>3 Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5><a href="#portfolio">Projects</a></h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
           I'm a front-End Developer who is ardent about building web applications and websites with the use of cutting edge technologies. 
           I have Experience with writing clean code and building fully responsive and user friendly UIs with HTML/CSS and it's frameworks, Vue.js and React.js
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
