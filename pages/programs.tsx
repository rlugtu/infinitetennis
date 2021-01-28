import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../components/modulecss/Programs.module.css'
import Image from "next/image"
import Link from 'next/link'
import {useState} from 'react'
import programsText from '../components/assets/programs.json'
import DevelopmentText from '../components/DevelopmentText'
const Programs = () => {
    const [activateDescription, setActivateDescription] = useState(false)
    const[description, setDescription] = useState(null)
    const activateDescriptionFunc = (input) => {
        setDescription(input)
        setActivateDescription(true)
    }
    return(
        <div>
            <Navbar/>
            <div className={styles.pageContainer}>
            <div className={styles.bannerContainer}>
                <Image src="/programsPics/banner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 48%"
                className={styles.bannerPic}
                
                />
                <h1 className={styles.bannerText}>Programs</h1>
            </div>
            
            <div className={styles.developmentContainer}>
                <h1>Player Development</h1>
                <div className={styles.trainingContainer}>
                    <div className={styles.singleTrainingContainer}
                        onClick = {() => activateDescriptionFunc(programsText.fitness.description)}
                    >
                        <div className={styles.trainingPicContainer}>
                            <Image src="/programsPics/fitness.jpg"
                                layout="fill"
                                objectFit="cover"
                                priority               
                            />
                        </div>
                        <h2>Fitness</h2>
                    </div>
                    <div className={styles.singleTrainingContainer}
                        onClick = {() => activateDescriptionFunc(programsText.drills.description)}>
                        <div className={styles.trainingPicContainer}>
                            <Image src="/programsPics/drills.jpg"
                                layout="fill"
                                objectFit="cover"                
                            />
                        </div>
                        <h2>Drills</h2>
                    </div>
                    <div className={styles.singleTrainingContainer}
                        onClick = {() => activateDescriptionFunc(programsText.pointplay.description)}>
                        <div className={styles.trainingPicContainer}>
                            <Image 
                                src="/programsPics/pointplay.jpg"
                                layout="fill"
                                objectFit="cover"                
                            />
                        </div>
                        <h2>Point Play</h2>
                    </div>
                    <div 
                        className={styles.singleTrainingContainer}
                        onClick = {() => activateDescriptionFunc(programsText.matchplay.description)}
                    >
                        <div className={styles.trainingPicContainer}>
                            <Image src="/programsPics/matchplay.jpg"
                                layout="fill"
                                objectFit="cover"                
                            />
                        </div>
                        <h2>Match Play</h2>
                    </div>
                </div>
                {activateDescription && (
                    <DevelopmentText
                    description = {description}
                    setActivateDescription={setActivateDescription}
                    />
                )}
            </div>
           <div className={styles.levelAndSchedule}>
                <div className={styles.levelsContainer}>
                    <h1>Levels</h1>
                    <ul className={styles.levelTitle}>
                        <h3 className={styles.red}>Red and Orange Ball</h3>
                        <li>4-8 years old</li>
                    </ul>
                    <ul className={styles.levelTitle}>
                        <h3 className={styles.orange}>Future Stars</h3>
                        <li>9-12 years old, advanced beginners</li>
                    </ul>
                    <ul className={styles.levelTitle}>
                        <h3 className={styles.green}>Pre-Tournament Level</h3>
                        <li>9-14 years old, pre-tournament/early tournament level</li>
                    </ul>
                    <ul className={styles.levelTitle}>
                        <h3 className={styles.blue}>High-Performance</h3>
                        <li>12-18 years old, top section players and national/international competition level.</li>
                    </ul>
                    
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
                    <div className={styles.sessionContainer}>
                        <h1>
                            Private Lessons
                        </h1>
                        <p>Schedule based on availability</p>
                    </div>
                </div>  
            </div>
           </div>
            
            
            <Footer/>
        </div>
    )
}

export default Programs