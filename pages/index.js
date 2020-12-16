import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MobileDetect from "mobile-detect";
import {useState} from 'react'

// Components
import Navbar from '../components/Navbar.tsx'
import Banner from '../components/Banner.tsx'
import Footer from '../components/Footer.tsx'
import Contact from '../components/Contact.tsx'
function Home({props}) {
  Home.getInitialProps = async ({ req }) => {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType: deviceType };
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <div className="bodyContainer">
      <Navbar />
      <Banner />
      <div className="bodyContent">
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
            <div className="videoFeedContainer">
              <h1 className="videoHeader">Inside Our Program</h1>
              <div className="videoSliderContainer">
              <Carousel
                responsive={responsive}
                ssr
                showDots
                infinite
                containerClass="container-with-dots"
                itemClass="image-item"
                deviceType="desktop">
                 <Image 
                    src='/contactpic.jpg'
                    className="video"
                    height={200}
                    width={300}
                    />
                 <Image 
                    src='/programphoto1.jpeg'
                    className="video"
                    height={200}
                    width={300}/>
                  
                  <Image 
                    src='/contactpic.jpg'
                    className="video"
                    height={200}
                    width={300}/>
                  
                  <Image 
                    src='/contactpic.jpg'
                    className="video"
                    height={200}
                    width={300}/>
                  
                </Carousel>
                  {/* <Image 
                  src='/contactpic.jpg'
                  className="video"
                  height={200}
                  width={300}/>
                  <Image 
                  src='/contactpic.jpg'
                  className="video"
                  height={200}
                  width={300}/>
                   <Image 
                  src='/contactpic.jpg'
                  className="video"
                  height={200}
                  width={300}/> */}
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

export default Home