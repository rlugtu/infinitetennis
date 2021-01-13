import Link from 'next/link'


const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerLogo"><h1>Logo</h1></div>
            <div className="footerColumn">
                <h1>Infinite Future Tennis</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consequuntur dolore tempore eius sint dolorum est </p>
            </div>
            <div className="footerColumn">
                <h2>Useful Links</h2>
                <Link href="/about"><p>About Us</p></Link>
                <Link href="/programs"><p>Programs</p></Link>
                <Link href="/team"><p>Our Team</p></Link>
                <Link href="/alumni"><p>Alumni</p></Link>
            </div>
            <div className="footerColumn">
                <h2>Contact</h2>
                <p>Location:</p>
                <p>Haworth Country Club</p>
                <p>Waldwick Covered Courts</p>
                <Link href="/contact"><p>Connect with us here</p></Link>
            </div>
        </div>
    )
}
export default Footer 