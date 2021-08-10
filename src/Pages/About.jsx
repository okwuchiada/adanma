import React from 'react'
import Button from '../Components/Button'
import '../Styles/about.css'
import { Link } from 'react-router-dom'
import img2 from '../Images/image-4.jpeg'

import Footer from '../Components/Footer'


function About() {
    return (
        <>
    
        <div className="about-container">
            <div className="about-side">
            <p>________about me</p>
         
                <ul className="social-links">
                    <li>
                        
                        <a href="https://www.linkedin.com/in/adanma-okwuchi-29162b197/">
                        
                        <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com/_adahh_">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/okwuchiada"><i class="fab fa-github"></i></a>
                    </li>
                    
                </ul>
            
            </div>
            
            <div className="about-container-left">
                <div className="about-image-container">
                <div className="about-image-background">
                
                </div> 
                <div className="about-image">
                <img src={img2} alt="Adanma" />
               
                </div>   
                    
                </div>   
               
               
            </div>
            <div className="about-container-right">
                <h4>Hi! I'm Ada and I am a Software Developer.
                   
                </h4>
                <small>
                        Frontend: HTML, CSS , JAVASCRIPT(REACT)
                    </small>
                    <small>
                        Backend: C#
                    </small>
                
                <p>
                    Having learned the importance of design in user experience, building user-friendly websites and application has become a passion I would like to develop properly.
                </p>

              <p>
                  Location: Lagos, Nigeria.
                </p> 
                <p>Email: adanmao.okwuchi@gmail.com</p> 

                <Button className="project-btn">
                    <Link to="/portfolio" className="link">
                        All Projects
                    </Link>
                </Button>
              

            </div>
            
            </div>
            
            <Footer/>
            </>
           
          
    )
}

export default About
