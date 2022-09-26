import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id:1,
    image:IMG1,
    title: "Utibe's Portfolio",
    github: "https://github.com/Teewai57/Mr-Utibe-s-Portfolio",
    demo: "https://utibe-etim.vercel.app/"
  },
  {
    id:2,
    image:IMG2,
    title: "Grocery List",
    github: "https://github.com/Teewai57/Grocery-Bud",
    demo: "https://grocery-list-seven.vercel.app/"
  },
  {
    id:3,
    image:IMG3,
    title: "My Portfolio",
    github: "https://github.com/Teewai57/Link-Shortener",
    demo: "https://link-shortener-fawn.vercel.app/"
  },
  {
    id:4,
    image:IMG4,
    title: "Joke App",
    github: "https://github.com/Teewai57/Joke-Telling-App",
    demo: "https://joke-telling-app.vercel.app/"
  },
  {
    id:5,
    image:IMG5,
    title: "Food Website",
    github: "https://github.com/Teewai57/Food-Plaza",
    demo: "https://food-plaza-one.vercel.app/"
  },
  {
    id:6,
    image:IMG6,
    title: "Order Dashboard",
    github: "https://github.com/Teewai57/Frontend-Engineer-Task",
    demo: "https://frontend-engineer-task.vercel.app/"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio_container">
      {data.map(({id, image, title, github, demo}) => {
        return(
          <article key={id} className="portfolio_item">
          {/* <div className="portfolio_item-image">
              <img src={image} alt={title} />
          </div> */}
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        )
      })}
      </div>
    </section>
  )
}

export default Portfolio
