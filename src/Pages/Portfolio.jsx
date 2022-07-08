import React from 'react'
import { Cards, Footer } from '../Components'
import '../Styles/portfolio.css'



function Portfolio() {

    const projects = [
        {
            title: "Gazelle Pay",
            desc: "GazellePay is a GoFundMe for opensource projects built on the polygon network. Built with Typescript, Solidity and SCSS.",
            live: "https://gazellepayments.herokuapp.com/",
            github: "https://github.com/okwuchiada/ada"
        },
        {
            title: "Multiplayer Memory Game",
            desc: "Just playing around with pictures. Built with React and TailwindCSS.",
            live: "https://memory-game-okwuchiada.vercel.app/",
            github: "https://github.com/okwuchiada/ada"
        },
        {
            title: "DAP(Digital Asset Platform) -",
            desc: " A financial platform that allows users be in control of all transactions built with HTML, CSS, and JavaScript.",
            live: "https://afrits-innovations-limited.github.io/dap-landing-page/",
            github: "https://github.com/okwuchiada/ada"
        },
        {
            title: "Nelson Mandela Day",
            desc: "A Nelson Mandela Group built with HTML, CSS, and JavaScript",
            live: "https://afrits-innovations-limited.github.io/nelson-mandela-day/",
            github: "https://github.com/okwuchiada/ada"
        },
        {
            title: "Kadensimal Fashion Blog",
            desc: "This is a demo fashion blog built on HTML, CSS and Javascript",
            live: "https://okwuchiada.github.io/ada/",
            github: "https://github.com/okwuchiada/ada"
        },
        {
            title: "Keyboard App",
            desc: "A keyboard application built using React library",
            live: "https://react-keyboard-seven.vercel.app/",
            github: "https://github.com/okwuchiada/react_keyboard"

        },
        {
            title: "User Management Application",
            desc: "C#",
            live: "https://github.com/okwuchiada/user-mangement-system",
            github: "https://github.com/okwuchiada/user-mangement-system"

        },
        {
            title: "Console Calculator App",
            desc: "C#",
            live: "https://github.com/okwuchiada/special-eureka",
            github: "https://github.com/okwuchiada/special-eureka"
        },
        {
            title: "Pondsec",
            desc: "An application that provides security against theft to fish farmers",
            live: "https://wt-team-a-pondsec.vercel.app/",
            github: "https://wt-team-a-pondsec.vercel.app/"

        }
    ]





    return (
        <>
            <div className='portfolio'>

                <h3 id="project__header">My Projects</h3>
                <div className="projects">
                    <ul className="cards__list">
                        {projects.map((project) => <Cards {...project} />)}
                    </ul>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio
