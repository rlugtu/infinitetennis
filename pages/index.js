import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MobileDetect from "mobile-detect";
import {useState} from 'react'
import Link from 'next/link'


// Components
import Navbar from '../components/Navbar.tsx'
import Banner from '../components/Banner.tsx'
import Footer from '../components/Footer.tsx'
import Contact from '../components/Contact.tsx'
import Testimonials from '../components/assets/testimonials.json'
import SingleVideo from '../components/SingleVideo'
const Index = ( {props} ) => {
  const[deviceType,setDeviceType] = useState(null)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  const testimonialsResponsive ={
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }
  const media = ['1','2','3','4','5','6','7','8','9','10','11']
  return (
    <div className="bodyContainer">
      <Navbar />
      <Banner />
      <div className="bodyContent">
        <div className="philosophyContainer">
        <h1>Our Philosophy</h1>
          <p>We have developed a very unique teaching process which is called the Okuda Method. This method can develop players into true high-performance players, step-by-step.
          We believe that true high-performance is about continuing to develop fundamentals at every level, focusing on technical details, and pushing players beyond what they believe to be their physical and mental limit. We understand and respect the differences of each player and develop their specific strengths, technical needs, and their individual personality and confidence.</p>
        </div>
        <div className="programsContainer">
        <Image src="/homepage/programsbackground.jpg"
              layout="fill"
              objectFit="cover"
              className="programsBackground"
              />
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
              
              <Link href="/alumni">
                <div className="singleProgramContainer sp3">
                  <div className="imageOverlay"></div>
                  <h1 className="programText">Our Alumni</h1>
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
                  itemClass="singleSlide"
                  deviceType="desktop"
                  containerClass="sliderContainer"
                  itemClass="carousel-item"
                  deviceType="mobile"
                  transitionDuration={100}
                  slidesToSlide={2}
                  >
                    {media.map((el,i) => (
                      <Image 
                      src={'/homepage/gallery/' + el + '.jpg'}
                      layout="fill"
                      // height={200}
                      // width={300}
                      objectFit="cover"
                      />
                    ))}
                    {/* <SingleVideo /> */}
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
                  deviceType="tablet"
                  containerClass="testimonialsSlider"
                  itemClass="testimonial-carousel-item"
                  autoPlay ={true}
                  autoPlaySpeed={5000}
                  // deviceType={props.deviceType}
                  arrows={false}
                  swipeable={false}
                  >
                    {Testimonials.quotes.map((player,i) => (
                     <div className="testimonialsText">
                      <h1>"{player.quote}"</h1>
                      
                         
                       <h2 className="testimonialName">{player.name}</h2>
                       <h2 className="testimonialBio">{player.bio}</h2>
                      <div className="leftquoteContainer">
                          <Image src="/icons/leftQuote.svg" 
                          layout="fill"/>
                      </div>
                      <div className="rightquoteContainer">
                          <Image src="/icons/rightQuote.svg" 
                          layout="fill"/>
                      </div>
                     </div>
                    ))}
                </Carousel>
            </div>
            <div className="contactContainer">
              <Contact />
              <div className="imageContainer">
                <Image 
                src='/homepage/contact.jpg'
                layout="fill"
                objectFit="cover"
                />
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
  Index.getInitialProps = async ( req ) => {
    let userAgent ;
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
}



export default Index