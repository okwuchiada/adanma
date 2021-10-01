import React from "react";
import { Cards, Footer } from "../Components/";
import "../Styles/portfolio.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Kadensimal Fashion Blog",
      desc: "This is a demo fashion blog built on HTML, CSS and Javascript",
      live: "https://okwuchiada.github.io/ada/",
      git: "https://github.com/okwuchiada/ada"
    },
    {
      id: 2,
      title: "Keyboard App",
      desc: "A keyboard application built using React library",
      live: "https://react-keyboard-seven.vercel.app/",
      git: "https://github.com/okwuchiada/react_keyboard"
    },
    {
      id: 3,
      title: "User Management Application",
      desc: "C#",
      live: "https://github.com/okwuchiada/user-mangement-system",
      git: "https://github.com/okwuchiada/user-mangement-system"
    },
    {
      id: 4,
      title: "Console Calculator App",
      desc: "C#",
      live: "https://github.com/okwuchiada/special-eureka",
      git: "https://github.com/okwuchiada/special-eureka"
    }
  ];

  return (
    <>
      <div className="portfolio">
        <h3 id="project__header">My Projects</h3>
        <div className="projects">
          <ul className="cards__list">
            {projects.map(project => (
              <Cards {...project} />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
