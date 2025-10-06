import React from "react";
import "./about.css";
// NOTE: Make sure to initialize AOS in your main App file (e.g., App.js)
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import ME from "../../assets/img/me-ab.jpg";
import ME2 from "../../assets/img/Gemini_Generated_Image_818o7s818o7s818o.png";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      {/* New class for the container to adjust layout */}
      <div className="container about__container__new">
        
        {/* Image block now centers and uses 'zoom-in' AOS */}
        <div 
          className="about__me__new"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-offset="100" // Start animation sooner
        >
          {/* New class for a unique image container style */}
          <div className="about__me-image__new">
            <LazyLoadImage alt="me" effect="blur" src={ME2} />
          </div>
        </div>

        {/* Content block uses 'fade-up' and is positioned below or alongside the image */}
        <div
          className="about__content__new"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300" // Delayed slightly after image
        >
          <div className="about__cards">
            {/* New card class for a distinct look and hover effect */}
            <article className="about__card__new" data-aos="flip-up" data-aos-duration="800" data-aos-offset="0">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            {/* New card class */}
            <article className="about__card__new" data-aos="flip-up" data-aos-duration="800" data-aos-delay="200" data-aos-offset="0">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            A versatile, hardworking individual, driven to meet or exceed a
            company's expectations to deliver high-quality software products. I focus on building responsive, performant, and accessible user experiences using modern JavaScript frameworks.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;