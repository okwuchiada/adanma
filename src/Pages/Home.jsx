
import '../Styles/home.css'
import img from '../Images/image-2.png'
import { SocialLinks, Button, Footer } from '../Components'



function Home() {
    return (
        <>

            <div className="hero-page">
                <div className="social-media">
                    <SocialLinks />
                </div>
                <div className="intro">
                    <small className="small">I am</small>
                    <h1>Adanma Okwuchi</h1>
                    <h3>- Software Developer</h3>
                    <Button className="email-btn">
                        <a href="mailto:adanmao.okwuchi@gmail.com">Send an Email </a>
                    </Button>
                    <Button className="email-btn">
                        <a href="https://drive.google.com/file/d/1puL5Sr3B9D1ST7XiOk4p-7WZCONwKISs/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                    </Button>

                </div>
                <div className="home-image-container">
                    <div className="home-image">
                    </div>
                    {/* <div className="home-image2">
                </div> */}
                    <img src={img} alt="a computer" />

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Home
