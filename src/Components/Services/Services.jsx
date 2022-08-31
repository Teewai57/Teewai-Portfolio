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
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services