import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css'
import logo from '../Images/logo.png'

function Header() {

    const [click, setClick] = useState(false);
   
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    

    return (
        <div className="header">
            <div className="logo">
            
                <img src={logo} alt="logo of the name Ada" />
            </div>

            <nav className="nav-bar"> 
            <div className="nav-icon" onClick={handleClick}>
                <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
                <ul className={ click ? 'nav-links active' : 'nav-links'}>

                    <li>
                        <Link to="/" className="nav-link" onClick={closeMobileMenu}> Home </Link>
                        
                    </li>
                    <li>
                        <Link to="/about" className="nav-link" onClick={closeMobileMenu}> About </Link>
                        
                    </li>
                    <li>
                        <Link  to="/portfolio" className="nav-link" onClick={closeMobileMenu}> Portfolio </Link>
                       
                    </li>
                    <li>
                        <Link to="/contact"  className="nav-link" onClick={closeMobileMenu}> Contact </Link>
                       
                    </li>
                </ul>
                
                </nav>
                
            
        </div>
    )
}

export default Header
