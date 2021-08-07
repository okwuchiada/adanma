import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css'
import logo from '../Images/logo.png'

function Header() {


    return (
        <div className="header">
            <div className="logo">
            
                <img src={logo} alt="My name is Ada" />
            </div>
            <nav>
                <ul className="nav-links">

                    <li>
                        <Link to="/" className="nav-link"> Home </Link>
                        
                    </li>
                    <li>
                        <Link to="/about" className="nav-link"> About </Link>
                        
                    </li>
                    <li>
                        <Link  to="/portfolio" className="nav-link"> Portfolio </Link>
                       
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link"> Contact </Link>
                       
                    </li>
                </ul>
                
                </nav>
                
            
        </div>
    )
}

export default Header
