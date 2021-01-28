import { slide as Menu } from 'react-burger-menu'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
            <div className="navLogoContainer">
                    <Image src="/navlogo.png" 
                    layout="fill"
                    objectFit="contain"/>
            </div>
            <div className="navLogo">
                {/* <h2>Logo</h2> */}
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
                        <a className="mobileNavLink">About Us</a>
                    </Link>
                    <Link href="/team">
                        <a className="mobileNavLink">Our Team</a>
                    </Link>
                    <Link href="/programs">
                        <a className="mobileNavLink">Programs</a>
                    </Link>
                    <Link href="/alumni">
                        <a className="mobileNavLink">Our Alumni</a>
                    </Link>
                    <Link href="/contact">
                        <a className="mobileNavLink">Contact</a>
                    </Link>
                </Menu>
                
            </div>
            <ul className="navList">
                    <li>
                        <Link href="/">
                            <a className="navLink">Home</a>
                        </Link>
                    </li>
                    <div 
                    className={aboutActive=== true ? "navActivate": undefined}
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
                                    <a className="dropdownLink dropdownStart">About Us</a>
                                </Link>
                                <Link href="/programs">
                                    <a  className="dropdownLink">Programs</a>
                                </Link>
                                <Link href="/team">
                                    <a className="dropdownLink">Our Team</a>
                                </Link>
                                <Link href="/alumni">
                                    <a className="dropdownLink dropdownLast">Alumni
                                    </a>
                                </Link>
                            </div>
                        )}                      
                    </div>
                    {/* <li className="navLink">
                        <Link href="/programs">
                            <a>Programs</a>
                        </Link>
                    </li>                  */}
                   <li>
                        <Link href="/contact">
                            <a className="navLink">Contact</a>
                        </Link>
                   </li> 
                </ul>
        </div>
    )
}

export default Navbar