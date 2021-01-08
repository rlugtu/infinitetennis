import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image"
import styles from '../components/modulecss/Team.module.css'


const Team = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.teamContentContainer}>
                <h1 className={styles.pageHeader}>Our Team</h1>
                <div className={styles.headCoachContainer}>
                    <Image 
                            src='/coaches/coachPic.jpg'
                            className={styles.coachPic}
                            height={400}
                            width={500}
                            // layout="intrinsic"

                        />
                    <div className={styles.headCoachDescription}>
                        <h1>Head Coach</h1>
                        <h1 className={styles.coachName}>Tatsumi Okuda</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum corrupti et, consequuntur facilis ad illo, a libero fugiat aliquid quo aspernatur. Harum, aspernatur eos sit ipsam labore unde asperiores.</p>
                    </div>
                </div>
                <div className="staffContainer">
                    <h1 className={styles.staffHeading}>Current Staff</h1>
                    <div className={styles.currentCoachesContainer}>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"

                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"
                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"

                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"

                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                    </div>
                    <h1 className={styles.staffHeading}>Past Staff</h1>
                    <div className={styles.currentCoachesContainer}>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"

                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"
                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"

                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                        <div className={styles.singleCoachContainer}>
                            <Image 
                                src='/coaches/coachPic.jpg'
                                className={styles.coachPic}
                                height={200}
                                width={300}
                                // layout="intrinsic"

                            />
                            <div className={styles.singleCoachDescription}>
                                <h1>Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam quae dolores hic velit minima ad dicta quas. Aperiam vero excepturi facere atque totam consectetur officia qui aut unde laudantium.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Team