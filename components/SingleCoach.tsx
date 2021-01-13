import styles from './modulecss/Team.module.css'
import Image from "next/image"


const SingleCoach = (props) => {
    return (
        <div className={styles.singleCoachContainer}>
            <div className={styles.coachPicContainer}>
                <Image 
                    src={'/coaches/' + props.pic}
                    className={styles.coachPic}
                    // height={200}
                    // width={300} 
                    layout="fill"                          
                    objectFit="cover"
                />     
            </div>                    
            <div className={styles.singleCoachDescription}>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default SingleCoach