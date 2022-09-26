import React from 'react'
import "./Services.css"
import {BiCheck} from "react-icons/bi"


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul classname="service_list">
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Implementing design on mobile and desktop websites.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Optimized user experience.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Collaborations On Github</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services