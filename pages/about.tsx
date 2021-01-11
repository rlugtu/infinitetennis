import Navbar from '../components/Navbar'
import styles from '../components/modulecss/About.module.css'
import Footer from '../components/Footer'
import Image from "next/image"
import Link from 'next/link'

const About = () => {
    return (
        <div className="pageContainer">
            <Navbar />
            <div className={styles.aboutPageContainer}>
                <div className={styles.aboutBanner}>
                    <h1 className={styles.pageHeader}>About Us</h1>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.philosophyContainer}>
                        <h1 className={styles.philosophyTextHeader}>Our Philosophy</ h1>
                        <div className={styles.aboutContent}>
                            <div className={styles.aboutHeader}>
                                <div className={styles.aboutHeaderImage}>
                                    <Image
                                    className="image" 
                                    src="/programphoto1.jpeg"
                                    layout="fill"
                                    objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className={styles.aboutText}>
                                <p>"We have developed a very unique teaching process which is called the Okuda Method. This method can develop players from beginners to true high-performance players, step-by-step.
                                We believe that true high-performance is about continuing to develop fundamentals at every level, focusing on technical details, and pushing players beyond what they believe to be their physical and mental limit. We understand and respect the differences of each player and develop their specific strengths, technical needs, and their individual personality and confidence."
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.teamContainer}>
                        <h1 className={styles.teamHeaderText}>Our Team</ h1>
                        <div className={styles.aboutContent}>
                            
                            <div className={styles.aboutText}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis voluptatum, adipisci veritatis qui accusamus repellendus velit rem doloribus, nihil obcaecati necessitatibus assumenda amet magni soluta facilis quae fugit dolores.
                                </p>
                                <div className={styles.viewMore1}>
                                    <Link href="/team"><h1 className={styles.viewMoreButton}>View our Team here!</h1>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.aboutHeader}>
                                <div className={styles.aboutHeaderImage}>
                                    <Image
                                    className="image" 
                                    src="/programphoto1.jpeg"
                                    layout="fill"
                                    objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.alumniContainer}>
                        <h1 className={styles.alumniTextHeader}>Alumni</ h1>
                        <div className={styles.aboutContent}>
                            <div className={styles.aboutHeader}>
                                <div className={styles.aboutHeaderImage}>
                                    <Image
                                    className="image" 
                                    src="/programphoto1.jpeg"
                                    layout="fill"
                                    objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className={styles.aboutText}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere necessitatibus voluptates reiciendis quo sapiente quisquam perspiciatis totam officia iusto nihil minima dicta natus quis, vitae maiores? Deleniti, molestiae quam.
                                </p>
                                <Link href="/alumni">
                                    <div className={styles.viewMore2}>
                                        <h1 className={styles.viewMoreButton}>View Alumni here!</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About