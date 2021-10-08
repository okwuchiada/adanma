import React from 'react'
import { Cards, Footer } from '../Components'
import '../Styles/portfolio.css'



function Portfolio() {

    const projects =  [
        {
            title: "Kadensimal Fashion Blog",
            desc:"This is a demo fashion blog built on HTML, CSS and Javascript",
            live:"https://okwuchiada.github.io/ada/",
            github:"https://github.com/okwuchiada/ada" 
        },
        {
            title: "Keyboard App",
            desc: "A keyboard application built using React library",
            live: "https://react-keyboard-seven.vercel.app/",
            github: "https://github.com/okwuchiada/react_keyboard" 

        },
        {
            title: "User Management Application",
                 desc:  "C#",
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
