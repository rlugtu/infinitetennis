import { slide as Menu } from 'react-burger-menu'
import {useState} from 'react'
import Link from 'next/link'

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggleBurger = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="navBar">
            <div className="navLogo">
                <h2>Logo</h2>
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
                    <Link href="/">
                        <a className="mobileNavLink">Contact</a>
                    </Link>
                    <Link href="/">
                        <a className="mobileNavLink">Programs</a>
                    </Link>
                    <Link href="/">
                        <a className="mobileNavLink">Team</a>
                    </Link>
                </Menu>
                <ul className="navList">
                    <Link href="/">
                        <a className="navLink">Home</a>
                    </Link>
                    <Link href="/">
                        <a className="navLink">Contact</a>
                    </Link>
                    <Link href="/">
                        <a className="navLink">Programs</a>
                    </Link>
                    <Link href="/">
                        <a className="navLink">Team</a>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar