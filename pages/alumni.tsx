import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../components/modulecss/Alumni.module.css'
import Image from "next/image"


const Alumni = () => {
    return (
        <div>
            <Navbar />
                <div className={styles.contentContainer}>
                    <h1 className={styles.pageHeader}>Notable Alumni</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia neque aut dicta. Ab enim obcaecati repellendus eius eos! Voluptates ut eaque ipsam temporibus officia similique, vero dolor at. Ea, culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil nulla odio fugit ipsa magnam, quas labore magni sit quos rerum quidem dolorem et nam ea eaque voluptatibus odit voluptatem?</p>
                    <div className={styles.playerContainer}>
                        <div className={styles.playerPic}>
                            <Image 
                                    src='/coaches/coachPic.jpg'
                                    // height={300}
                                    // width={400}
                                    layout="fill"
                                    objectFit="cover"
                            />
                        </div>
                        
                        <div className={styles.playerDescription}>
                            <h1 className={styles.playerName}>Player Name</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum corrupti et, consequuntur facilis ad illo, a libero fugiat aliquid quo aspernatur. Harum, aspernatur eos sit ipsam labore unde asperiores.</p>
                        </div>
                    </div>
                    <div className={styles.playerContainer}>
                        <div className={styles.playerPic}>
                            <Image 
                                    src='/coaches/coachPic.jpg'
                                    // height={300}
                                    // width={400}
                                    layout="fill"
                                    objectFit="cover"
                            />
                        </div>
                        
                        <div className={styles.playerDescription}>
                            <h1 className={styles.playerName}>Player Name</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum corrupti et, consequuntur facilis ad illo, a libero fugiat aliquid quo aspernatur. Harum, aspernatur eos sit ipsam labore unde asperiores.</p>
                        </div>
                    </div>
                    <div className={styles.playerContainer}>
                        <div className={styles.playerPic}>
                            <Image 
                                    src='/coaches/coachPic.jpg'
                                    // height={300}
                                    // width={400}
                                    layout="fill"
                                    objectFit="cover"
                            />
                        </div>
                        
                        <div className={styles.playerDescription}>
                            <h1 className={styles.playerName}>Player Name</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum corrupti et, consequuntur facilis ad illo, a libero fugiat aliquid quo aspernatur. Harum, aspernatur eos sit ipsam labore unde asperiores.</p>
                        </div>
                    </div>
                    <div className={styles.playerContainer}>
                        <div className={styles.playerPic}>
                            <Image 
                                    src='/coaches/coachPic.jpg'
                                    // height={300}
                                    // width={400}
                                    layout="fill"
                                    objectFit="cover"
                            />
                        </div>
                        
                        <div className={styles.playerDescription}>
                            <h1 className={styles.playerName}>Player Name</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum corrupti et, consequuntur facilis ad illo, a libero fugiat aliquid quo aspernatur. Harum, aspernatur eos sit ipsam labore unde asperiores.</p>
                        </div>
                    </div>
                    <div className={styles.playerContainer}>
                        <div className={styles.playerPic}>
                            <Image 
                                    src='/coaches/coachPic.jpg'
                                    // height={300}
                                    // width={400}
                                    layout="fill"
                                    objectFit="cover"
                            />
                        </div>
                        
                        <div className={styles.playerDescription}>
                            <h1 className={styles.playerName}>Player Name</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum corrupti et, consequuntur facilis ad illo, a libero fugiat aliquid quo aspernatur. Harum, aspernatur eos sit ipsam labore unde asperiores.</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Alumni