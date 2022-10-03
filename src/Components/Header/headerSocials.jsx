import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://github.com/Teewai57" target="_blank"><FaGithub /></a>
      <a href="https://ng.linkedin.com/in/toyoabasi-bob-9835a7245?trk=people-guest_people_search-card" target="_blank"><BsLinkedin /></a>
      <a href="https://twitter.com/ToyoabasiBob" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default headerSocials
