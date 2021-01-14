import styles from '../components/modulecss/Programs.module.css'
import programsText from './assets/programs.json'

const DevelopmentText = (props) => {
    return(
        <div>
            <div className={styles.trainingDescriptionContainer}>
                    <p>{props.description}</p>
                </div>
        </div>
    )
}

export default DevelopmentText