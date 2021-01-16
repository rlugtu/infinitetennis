import styles from './modulecss/Team.module.css'
import Image from "next/image"


const ImageSliderSingle = (props) => {
    return (
        <div className="sliderPicContainer">
        <Image 
            src='/contactpic.jpg'
            className="video"
            layout="fill"
            objectFit="cover"
            />
      </div>  
    )
}

export default ImageSliderSingle