import styles from './modulecss/Team.module.css'
import Image from "next/image"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'

const SingleCoach = (props) => {
    const useStyles = makeStyles({
        button: {
            fontSize: 50,
            color: '#8f3b46',
            width: '100%',
            cursor: 'pointer'
        }
    })
    const[expanded,setExpanded] = useState(false)
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }
    const classes = useStyles()

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
                <h1 className={styles.singleCoachName}>{props.name}</h1>
                <p className={expanded ? styles.coachDescriptionAll: styles.coachDescription}>{props.description}</p>
               
                {/* <button onClick={()=> setExpanded(!expanded)}>click me</button> */}
            </div>
            {expanded ? <ExpandLessIcon 
                className={classes.button}
                onClick={()=> setExpanded(!expanded)}
                />:<ExpandMoreIcon 
                className={classes.button}
                onClick={()=> setExpanded(!expanded)}
                />}
        </div>
    )
}

export default SingleCoach