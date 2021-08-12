import React from 'react'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import '../Styles/home.css'
import img from '../Images/image-2.png'



function Home() {
    return (
        <>
       
        <div className="hero-page">
            <div className="social-media">
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
            <div className="intro">
                <small className="small">I am</small>
                <h1>Adanma <br/>Okwuchi -</h1>
                <h3>Software Developer</h3>
                <p>Software Development Techster at Tech4Dev Women Techster Fellowship</p>
            
                <Button className="email-btn">
                    <a href="mailto:adanmao.okwuchi@gmail.com">Send an Email </a>
                </Button>
                <Button className="email-btn">
                        <a href="https://drive.google.com/file/d/1egjpt-uOVV1Lip3pauNp9ynPVhzx1Enh/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                </Button>

            </div>
            <div className="home-image-container">
                <div className="home-image">

                </div>
                <img src={img} alt="a computer" />
                
            </div>
           
        </div>
     
        <Footer/>
        </>
    )
}

export default Home
