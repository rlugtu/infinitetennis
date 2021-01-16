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
                />
            </div>
            )}
            <div className={styles.playerDescription}>
                <h1 className={styles.playerName}>{props.name}</h1>
                <p>{props.quote}</p>
            </div>
        </div>
    )
}
export default Prospects