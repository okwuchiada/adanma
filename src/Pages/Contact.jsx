import React from 'react'
import Footer from '../Components/Footer'
import '../Styles/contact.css'

export const Contact = () => {
    return (
        <>
        <div className="contacts">
            <h4>I look forward to building amazing projects together.</h4>
            <h5>Tea or Coffee?</h5>
            
            <div className="contacts-top">
                <div className="contact">
                    Mail Me: 
                    <a href="mailto:adanmao.okwuchi@gmail.com">

                    </a>
                </div>
                <div className="contact">
                Follow Me: 
                   <p>
                   
                   <a href="twitter.com/_adahh_">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </p> 
                    <p>
                     
                    <a href="https://www.linkedin.com/in/adanma-okwuchi-29162b197/">
                        
                        <i class="fab fa-linkedin-in"></i>
                        </a>
                    </p>

                </div>
                
            </div>
        </div>
        <Footer/>
        </>
    )
}
