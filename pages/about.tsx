import Navbar from '../components/Navbar'
import styles from '../components/modulecss/About.module.css'
import Footer from '../components/Footer'
import Image from "next/image"
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const About = () => {
    const useStyles = makeStyles({
        button: {
            fontSize: 15,
            color: 'white',
            width: 200,
            height: 50,
            cursor: 'pointer',
            backgroundColor: "#8f3b46",
            '&:hover':{
                color: '#8f3b46',
            },
            marginTop:20,
        }
    })
    const classes = useStyles()

    return (
        <div className="pageContainer">
            <Navbar />
            <div className={styles.aboutPageContainer}>
                {/* <div className={styles.aboutBanner}>
                    <h1 className={styles.pageHeader}>About Us</h1>
                </div> */}
                <div className={styles.bannerContainer}>
                <Image src="/contactPage/contactBanner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 48%"
                className={styles.bannerPic}
                
                />
                <h1 className={styles.bannerText}>About Us</h1>
                {/* <p className={styles.bannerDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, rerum esse dolore amet facere minima repudiandae voluptatibus hic magnam tempora dolores fuga odio doloribus modi assumenda libero. Perferendis, provident non!</p> */}
            </div>
            
                <div className={styles.aboutContainer}>
                    <div className={styles.philosophyContainer}>
                        {/* <h1 className={styles.philosophyTextHeader}>Our Philosophy</ h1> */}
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
                                <h1>Our Philosophy</h1>
                                <p>We have developed a very unique teaching process which is called the Okuda Method. This method can develop players into true high-performance players, step-by-step.
                                We believe that true high-performance is about continuing to develop fundamentals at every level, focusing on technical details, and pushing players beyond what they believe to be their physical and mental limit. We understand and respect the differences of each player and develop their specific strengths, technical needs, and their individual personality and confidence.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.teamContainer}>
                        {/* <h1 className={styles.teamHeaderText}>Our Team</ h1> */}
                        <div className={styles.aboutContent}>
                            
                            <div className={styles.aboutText}>
                                <h1>Our Team</h1>
                                <p> The experienced coaching team has been with Tatsumi for many years and are experts of the Okuda Method. In this young team, each coach has a great blend of playing and coaching experience.
                                </p>
                                    <Link href="/team">
                        
                                        <Button
                                        className={classes.button}
                                        variant="contained"
                                        >View Our Team</Button>
                                       
                               
                                    </Link>
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
                                <h1>Alumni</h1>
                                <p>For 30 years, the reputation of Infinite Future Tennis (formerly Paum Tennis) has thrived through the word-of-mouth of clients. We are proud of our former students and their accomplishments and are grateful that they have contributed their reflections of the program.
                                </p>
                                <Link href="/alumni">
                                    <Button
                                    className={classes.button}
                                    variant="contained"
                                    >View Our Alumni</Button>
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