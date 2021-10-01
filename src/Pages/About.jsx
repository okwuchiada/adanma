import React from "react";
import { Button, SocialLinks } from "../Components/";
import "../Styles/about.css";
import { Link } from "react-router-dom";
import img2 from "../Images/image-4.jpeg";

import { Footer } from "../Components";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-side">
          <p>________about me</p>

          <SocialLinks />
        </div>

        <div className="about-container-left">
          <div className="about-image-container">
            <div className="about-image-background"></div>
            <div className="about-image">
              <img src={img2} alt="Adanma" />
            </div>
          </div>
        </div>
        <div className="about-container-right">
          <h4>Hi! I'm Ada and I am a Software Developer.</h4>
          <small>Frontend: HTML, CSS , JAVASCRIPT(REACT)</small>
          <small>Backend: C#</small>

          <p>
            Having learned the importance of design in user experience, building
            user-friendly websites and application has become a passion I would
            like to develop properly.
          </p>

          <p>Location: Lagos, Nigeria.</p>
          <p>Email: okwuchiadanma@gmail.com</p>

          <Button className="project-btn">
            <Link to="/portfolio" className="link">
              All Projects
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
