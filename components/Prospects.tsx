import Image from "next/image"
import styles from './modulecss/Alumni.module.css'

const Prospects = (props) => {
    return(
        <div className={styles.playerContainer}>
            {props.pic && (
                <div className={styles.playerPic}>
                <Image 
                        src={"/prospects/" + props.pic}
                        // height={300}
                        // width={400}
                        layout="fill"
                        objectFit="cover"
                        className={styles.alumniPic}
                />
            </div>
            )}
            <div className={props.pic? styles.playerDescription : styles.playerDescriptionNoPic}>
                <h1 className={props.pic? styles.playerName : styles.playerNameNoPic}>{props.name}</h1>
                {props.bio && (
                    <p className={styles.playerBio}>{props.bio}</p>
                )}
                <p className={styles.playerQuote}>{props.quote}</p>
            </div>
        </div>
    )
}
export default Prospects