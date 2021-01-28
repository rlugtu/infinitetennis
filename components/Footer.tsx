import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerLogoContainer">
                    <Image src="/navlogo.png" 
                    height={215}
                    width={215}
                    />
            </div>
            <div className="footerColumn">
                <h1>Infinite Future Tennis</h1>
                <p className="copyrightText">Unless otherwise indicated, the Site is our proprietary property and all source code, functionality, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logo contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions</p>
            </div>
            <div className="footerColumn">
                <h2>Useful Links</h2>
                <Link href="/about"><p className="footerLink">About Us</p></Link>
                <Link href="/programs"><p className="footerLink">Programs</p></Link>
                <Link href="/team"><p className="footerLink">Our Team</p></Link>
                <Link href="/alumni"><p className="footerLink">Alumni</p></Link>
            </div>
            <div className="footerColumn">
                <h2>Contact</h2>
                <p>Location:</p>
                <p>Haworth Country Club</p>
                <p>Waldwick Covered Courts</p>
                <Link href="/contact"><p className="footerLink">Connect with us here</p></Link>
            </div>
        </div>
    )
}
export default Footer 