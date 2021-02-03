import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image"
import styles from '../components/modulecss/Team.module.css'
import SingleCoach from '../components/SingleCoach'
import CoachInfo from '../components/assets/coachBios.json'
const Team = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.teamContentContainer}>
                <h1 className={styles.pageHeader}>Our Team</h1>
                <div className={styles.headCoachContainer}>
                    <div className={styles.headCoachPicContainer}>
                        <Image 
                            src='/coaches/tatsumi.jpg'
                            className={styles.headCoachPic}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                    <div className={styles.headCoachDescription}>
                        <h1 className={styles.coachName}>Tatsumi Okuda</h1>
                        <h2>Head Coach</h2>
                        <p>Tatsumi has been in the tennis industry for 38 years. He started his own business 28 years ago, and since then, has created a strong reputation in the New Jersey and New York region. He has coached hundreds of successful junior players. His most well-known former students are Christina McHale (WTA highest ranking #24) and Kristie Ahn (WTA highest ranking #93). Countless others he has coached, have reached varsity high school and collegiate tennis level, and have been top players in the section and nation. He is known for his teaching kids about work ethic and love for the game, and that improvement comes from consistent and diligent thought and work.
                        </p>
                    </div>
                </div>
                <div className={styles.staffContainer}>
                    <h1 className={styles.staffHeading}>Current Staff</h1>
                    <div className={styles.currentCoachesContainer}>
                        {CoachInfo.current.map((coach,i) => (
                            <SingleCoach
                            id={i}
                            {...coach} 
                            />
                        ))}
                    </div>
                    <h1 className={styles.staffHeading}>Past Staff</h1>
                    <div className={styles.currentCoachesContainer}>
                          
                            {CoachInfo.past.map((coach,i) => (
                            <SingleCoach
                            id={i}
                            {...coach} 
                            />
                        ))}
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Team