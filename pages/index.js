import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

// Components
import Navbar from '../components/Navbar.tsx'
import Banner from '../components/Banner.tsx'
import Footer from '../components/Footer.tsx'
import Contact from '../components/Contact.tsx'
export default function Home() {
  return (
    <div className="bodyContainer">
      <Navbar />
      <Banner />
      <div>
        <div className="programsContainer">
            <div className="singleProgramContainer sp1">
              <div className="imageOverlay"></div>
              <h1 className="programText">Our Programs</h1>
            </div>
            <div className="singleProgramContainer sp2">
              <div className="imageOverlay"></div>
              <h1 className="programText">Our Team</h1>
            </div>
            <div className="singleProgramContainer sp3">
              <div className="imageOverlay"></div>
              <h1 className="programText">Our Philosophy</h1>
            </div>
          </div>
          <div className="contactContainer">
            <Contact />
            <div className="imageContainer">
              <Image 
              src='/contactpic.jpg'
              className="image"
              height={400}
              width={400}/>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}
