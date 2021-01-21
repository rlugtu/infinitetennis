import styles from './modulecss/SingleVideo.module.css'
import ReactPlayer from 'react-player'


const SingleVideo = () => {
    return(
        <div className={styles.videoContainer}>
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=EyjuRCxpf6Y" 
        width='100%'
        height='100%'
        controls={true}
        />
        </div>
    )
}

export default SingleVideo
