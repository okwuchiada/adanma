import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { data } from '.'
import logo from '../Images/logo.png'


const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);


    return (
        <div className="flex items-center h-[20%] justify-between px-4 lg:px-16 bg-primaryBlue py-8 ">
            <Link to='/' className='font-semibold text-[18px] lg:text-[26px]'>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    src={logo}
                    width='70px'
                />
            </Link>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-4 animate-pulse bg-white"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <NavLink to="/" className={({ isActive }) =>
                                    isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out '} onClick={() => setIsNavOpen(false)}>Home</NavLink>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <NavLink to="/portfolio" className={({ isActive }) =>
                                    isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out '} onClick={() => setIsNavOpen(false)}>Portfolio</NavLink>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <NavLink to="/resume" className={({ isActive }) =>
                                    isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out '} onClick={() => setIsNavOpen(false)}>Resume</NavLink>
                            </li>
                            <li>
                                <div className='flex flex-col justify-between lg:hidden mt-4 h-[60px]'>
                                    <h3>Connect with me</h3>
                                    <div className='flex justify-between w-full'>
                                        <a href={data?.socialLinks.linkedin} className='text-[20px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaLinkedin /></a>
                                        <a href={data?.socialLinks.twitter} className='text-[20px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaTwitter /></a>
                                        <a href={data?.socialLinks.twitter} className='text-[20px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaGithub /></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU nav-links hidden space-x-20 lg:flex">
                    <li>
                        <NavLink to="/home" className={({ isActive }) =>
                            isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out font-semibold '} onClick={() => setIsNavOpen(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) =>
                            isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out font-semibold'} onClick={() => setIsNavOpen(false)}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" className={({ isActive }) =>
                            isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out font-semibold'} onClick={() => setIsNavOpen(false)}>Resume</NavLink>
                    </li>
                </ul>
            </nav>
            <style>
                {`
   .hideMenuNav {
     display: none;
   }
   .showMenuNav {
     display: block;
     position: absolute;
     width: 100%;
     height: 100vh;
     top: 0;
     left: 0;
     background: #45062E;
     z-index: 10;
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     align-items: center;
   }
 `}</style>
        </div>
    )
}

export default Header