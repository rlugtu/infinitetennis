import { slide as Menu } from 'react-burger-menu'
import {useState} from 'react'
import Link from 'next/link'

import '@fortawesome/fontawesome-free/css/all.css';


const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)
    const[aboutActive, setAboutActive] = useState(false)
    const[programsActive, setProgramsActive] = useState(false)
    const toggleBurger = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="navBar">
            <div className="navLogo">
                <h2>Logo</h2>
                <h2 className="logoText">Infinite Future Tennis</h2>
            </div>
            <div className="navOptions">
                <Menu 
                className="burgerNav"
                isOpen={false}
                onClick={() => toggleBurger}
                >
                    <Link href="/">
                        <a className="mobileNavLink">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="mobileNavLink">About</a>
                    </Link>
                    <Link href="/">
                        <a className="mobileNavLink">Programs</a>
                    </Link>
                    <Link href="/contact">
                        <a className="mobileNavLink">Contact</a>
                    </Link>
                </Menu>
                <ul className="navList">
                    <li>
                        <Link href="/">
                            <a className="navLink">Home</a>
                        </Link>
                    </li>
                    <div 
                   onMouseOver={() => setAboutActive(true)}
                   onMouseLeave={() => setAboutActive(false)}
                    >
                        <li className="navLink">About</li>
                        {aboutActive && (
                            <div className="dropdown"
                            onMouseEnter={() => setAboutActive(true)}
                            onMouseLeave={() => setAboutActive(false)}
                            >
                                <Link href="/about">
                                    <a className="dropdownLink">About Us</a>
                                </Link>
                                <Link href="/team">
                                    <a className="dropdownLink">Our Team</a>
                                </Link>
                                <Link href="/alumni">
                                    <a className="dropdownLink">Alumni
                                    </a>
                                </Link>
                            </div>
                        )}                      
                    </div>
                    <div 
                   onMouseOver={() => setProgramsActive(true)}
                   onMouseLeave={() => setProgramsActive(false)}
                    >
                        <li className="navLink">
                            <Link href="/programs"><a className="navLink">Programs</a>
                                </Link></li>                 
                    </div>
                   <li>
                        <Link href="/contact">
                            <a className="navLink">Contact</a>
                        </Link>
                   </li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar