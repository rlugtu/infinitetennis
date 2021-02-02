import Image from 'next/image'
import React from "react";
import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import styles from './modulecss/Banner.module.css'
const Banner = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      let images = [
        "4","2","6","3","7"
      ]

      const responsive = {
        desktop: {
          breakpoint: { max: 6000, min: 1024 },
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
      };
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerTextContainer}>
                <h1 className={styles.bannerText}>Infinite Future Tennis</h1>
                <h2 className={styles.bannerText2}>Home of Dedicated Tennis Players</h2>
            </div>
            <div className={styles.bannerLogoContainer}>
                <Image src="/navlogo.png"
                layout="fill"
                objectFit="contain"
                className={styles.bannerPic}
                />
            </div>
            <Carousel
                responsive={responsive}
                ssr
                showDots
                infinite
                containerClass={styles.carouselcontainer}
                itemClass="image-item"
                deviceType="desktop"
                autoPlay ={true}
                autoPlaySpeed={5000}
                arrows={false}
                dotListClass={styles.dots}

                >
                  {images.map((image,i) => (
                     <div className={styles.bannerPicContainer}>
                     <Image src={'/homepage/homeBanner/' + image + '.jpg'}
                     layout="fill"
                     objectFit="cover"
                     className={styles.bannerPic}
                     priority
                     />
                    </div> 
                  ))}
              
                                          
                </Carousel>
        </div>
        
    )
}

export default Banner