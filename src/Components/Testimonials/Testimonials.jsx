import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar:AVTR1,
    name: 'Tina Willer',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum ap voluptatibus similique voluptas dicta!"
  },
  {
    avatar:AVTR2,
    name: 'John Doe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum ap voluptatibus similique voluptas dicta!"
  },
  {
    avatar:AVTR3,
    name: 'Richard Mantez',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum ap voluptatibus similique voluptas dicta!"
  },
  {
    avatar:AVTR4,
    name: 'Stella Mantz',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci nostrum ap voluptatibus similique voluptas dicta!"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      className="container testimonials_container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
          <h5>{name}</h5>
            <small className="client_review">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
