import Navbar from '../components/Navbar'
import styles from '../components/modulecss/About.module.css'
import Footer from '../components/Footer.tsx'
import Image from "next/image"

const About = () => {
    return (
        <div className="pageContainer">
            <Navbar />
            <div className={styles.aboutPageContainer}>
                <div className={styles.aboutBanner}>
                    <h1 className={styles.pageHeader}>About Us</h1>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.about1}>
                        <div className={styles.aboutHeader}>
                            <h1 className={styles.textHeaders}>Our Philosophy</h1>
                            <div className={styles.     aboutHeaderImage}>
                                <Image
                                className="image" 
                                src="/programphoto1.jpeg"
                                layout="fill"
                                />
                            </div>
                        </div>
                        <div className={styles.aboutText}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, facere beatae! Vero dolorum a mollitia pariatur, similique quidem quae corporis nemo voluptatum, facilis ullam, ducimus est amet. Officia, neque eum?</p>
                        </div>
                    </div>
                    <div className={styles.about2}>
                            <div className={styles.aboutText}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, facere beatae! Vero dolorum a mollitia pariatur, similique quidem quae corporis nemo voluptatum, facilis ullam, ducimus est amet. Officia, neque eum?</p>
                                <div className={styles.viewMore1}>
                                    <h1 className={styles.viewMoreButton}>View our Team here!</h1>
                                </div>
                            </div>
                        <div className={styles.aboutHeader2}>
                                <h1 className={styles.textHeaders}>Coaches</h1>
                                <div className={styles.     aboutHeaderImage}>
                                    <Image 
                                    className="image"
                                    src="/programphoto1.jpeg"
                                    layout="fill"
                                    />
                                </div>
                        </div>
                    </div>
                    <div className={styles.about3}>
                        <div className={styles.aboutHeader}>
                                <h1 className={styles.textHeaders}>Alumni</h1>
                                <div className={styles.     aboutHeaderImage}>
                                    <Image 
                                    className="image"
                                    src="/programphoto1.jpeg"
                                    layout="fill"
                                    />
                                </div>
                        </div>
                            <div className={styles.aboutText}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, facere beatae! Vero dolorum a mollitia pariatur, similique quidem quae corporis nemo voluptatum, facilis ullam, ducimus est amet. Officia, neque eum?</p>
                                <div className={styles.viewMore2}>
                                    <h1 className={styles.viewMoreButton}>View Alumni here!</h1>
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