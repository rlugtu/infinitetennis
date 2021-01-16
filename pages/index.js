import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MobileDetect from "mobile-detect";
import {useState} from 'react'
import Link from 'next/link'
import ImageSliderSingle from '../components/ImageSliderSingle'
// Components
import Navbar from '../components/Navbar.tsx'
import Banner from '../components/Banner.tsx'
import Footer from '../components/Footer.tsx'
import Contact from '../components/Contact.tsx'

const Index = ( {props} ) => {
  const[deviceType,setDeviceType] = useState(null)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const testimonialsResponsive ={
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }
  const media = ['1','2','3','4','1','2','3','4']
  const testimonials = ['1','2','3','4']
  return (
    <div className="bodyContainer">
      <Navbar />
      <Banner />
      <div className="bodyContent">
        <div className="programsContainer">
              <Link href="/programs">
                <div className="singleProgramContainer sp1">
                  <div className="imageOverlay"></div>
                  <h1 className="programText">Our Programs</h1>
                </div>
              </Link>
              <Link href="/team">
                <div className="singleProgramContainer sp2">
                  <div className="imageOverlay"></div>
                  <h1 className="programText">Our Team</h1>
                </div>
              </Link>
              
              <Link href="/about">
                <div className="singleProgramContainer sp3">
                  <div className="imageOverlay"></div>
                  <h1 className="programText">Our Philosophy</h1>
                </div>
              </Link>
              
            </div>
            
            <div 
            className= 'videoFeedContainer'>
              <h1 className="videoHeader">Inside Our Program</h1>
                {/* <p>{props.deviceType}</p> */}
                <Carousel
                  responsive={responsive}
                  ssr
                  showDots
                  infinite
                  // containerClass="container-with-dots"
                  // itemClass="image-item"
                  deviceType="desktop"
                  containerClass="slider-carousel-container"
                  itemClass="carousel-item"
                  deviceType={deviceType}
                  >
                    {media.map((el,i) => (
                      <ImageSliderSingle />
                    ))}
                </Carousel>
            </div>
            <div 
             className='testimonialsContainer'
            >
              {/* <h1 className="testimonialsHeader">Testimonials</h1> */}
                <Carousel
                  responsive={testimonialsResponsive}
                  ssr
                  showDots
                  infinite
                  deviceType="desktop"
                  containerClass="testimonialsSlider"
                  itemClass="testimonial-carousel-item"
                  autoPlay ={true}
                  autoPlaySpeed={5000}
                  deviceType={deviceType}
                  arrows={false}
                  >
                    {testimonials.map((el,i) => (
                     <div className="testimonialsText">
                       <h1>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium."</h1>
                     </div>
                    ))}
                </Carousel>
            </div>
            <div className="contactContainer">
              <Contact />
              <div className="imageContainer">
                <Image 
                src='/contactpic.jpg'
                layout="fill"
                />
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}
Index.getInitialProps = async ({ req }) => {
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


export default Index