import React from 'react'
import Cards  from '../Components/Cards'
import Footer from '../Components/Footer'
import '../Styles/portfolio.css'



function Portfolio() {
    return (
        <>
        <div className='portfolio'>
            
            <h3 id="project__header">My Projects</h3>
            <div className="projects">
                <ul className="cards__list">
                 <Cards title="Kadensimal Fashion Blog"
                     desc="This is a demo fashion blog built on HTML, CSS and Javascript"
                     live="https://okwuchiada.github.io/ada/"
                     git="https://github.com/okwuchiada/ada" />

                <Cards title="Keyboard App"
                     desc="A keyboard application built using React library"
                     live="https://react-keyboard-seven.vercel.app/"
                     git="https://github.com/okwuchiada/react_keyboard" />  
                <Cards
                 title="User Management Application"
                 desc= "C#"
                 live="https://github.com/okwuchiada/user-mangement-system"
                 git="https://github.com/okwuchiada/user-mangement-system"
                />
                <Cards 
                title="Console Calculator App"
                desc="C#"
                live="https://github.com/okwuchiada/special-eureka"
                git="https://github.com/okwuchiada/special-eureka"
                />
                
                </ul>
               
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Portfolio
