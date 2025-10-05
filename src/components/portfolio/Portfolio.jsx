import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img/portfolio1.jpg";
import IMG2 from "../../assets/img/portfolio2.jpg";
import IMG3 from "../../assets/img/portfolio3.jpg";
import IMG4 from "../../assets/img/portfolio4.jpg";
import IMG5 from "../../assets/img/portfolio5.png";
import IMG6 from "../../assets/img/portfolio6.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const data = [
  {
    id: 1,
    title: "Crypto Currency Dashboard & Finacial Visualization",
    image: IMG1,
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 2,
    title: "Charts templates and infographic in figma",
    image: IMG2,
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 3,
    title: "Figma dashboard UI kit for data design web apps",
    image: IMG3,
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 4,
    title: "Maintaining tasks and tracking progress",
    image: IMG4,
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 5,
    title: "Crypto Currency Dashboard & Finacial Visualization",
    image: IMG5,
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 6,
    title: "Orion UI kit & Finacial progress Dashboard",
    image: IMG6,
    github: "http://github.com",
    demo: "http://github.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div
        className="container portfolio__container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {data.map((item, index) => {
          return (
            <article className="portfolio__item" key={index}>
              <div className="portfolio__item-image">
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  effect="blur"
                />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} target="_blank" className="btn ">
                  Github
                </a>
                <a href={item.demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
