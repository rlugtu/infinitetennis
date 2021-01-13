import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../components/modulecss/Programs.module.css'
import Image from "next/image"

const Programs = () => {
    return(
        <div>
            <Navbar/>
            <div className={styles.pageContainer}>
            <div className={styles.bannerContainer}>
                <Image src="/contactPage/contactBanner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 48%"
                className={styles.bannerPic}
                
                />
                <h1 className={styles.bannerText}>Programs</h1>
                <p className={styles.bannerDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, rerum esse dolore amet facere minima repudiandae voluptatibus hic magnam tempora dolores fuga odio doloribus modi assumenda libero. Perferendis, provident non!</p>
            </div>
             
                <div className={styles.programsContainer}>
                <h1>Schedule</h1>
                    <p>Tentative Schedule. Contact us for pricing and detailed schedules on time slots</p>
                    <div className={styles.sessionContainer}>
                        <h1>
                            Winter Session 10 weeks
                        </h1>
                        <p>Start Date: January 4</p>
                        <p>End Date: March 21</p>
                    </div>
                    <div className={styles.sessionContainer}>
                        <h1>
                            Spring Session 10 weeks
                        </h1>
                        <p>Start Date: March 22</p>
                        <p>End Date: May 30</p>
                    </div>
                    <div className={styles.sessionContainer}>
                        <h1>
                            Pre-Summer 4 weeks
                        </h1>
                        <p>Start Date: May 31</p>
                        <p>End Date: June 27</p>
                    </div>
                    <div className={styles.sessionContainer}>
                        <h1>
                            Summer 9 weeks
                        </h1>
                        <p>Start Date: June 28</p>
                        <p>End Date: August 27</p>
                    </div>
                    
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Programs