import { slide as Menu } from 'react-burger-menu'
import {useState} from 'react'
import Link from 'next/Link'

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggleBurger = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="navBar">
            <div className="navLogo">
                <h2>IFT</h2>
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
                    <Link href="/location">
                        <a className="mobileNavLink">Contact</a>
                    </Link>
                    <Link href="/location">
                        <a className="mobileNavLink">Programs</a>
                    </Link>
                    <Link href="/location">
                        <a className="mobileNavLink">Coaches</a>
                    </Link>
                </Menu>
                <ul className="navList">
                    <Link href="/">
                        <a className="navLink">Home</a>
                    </Link>
                    <Link href="/location">
                        <a className="navLink">Contact</a>
                    </Link>
                    <Link href="/location">
                        <a className="navLink">Programs</a>
                    </Link>
                    <Link href="/location">
                        <a className="navLink">Coaches</a>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar