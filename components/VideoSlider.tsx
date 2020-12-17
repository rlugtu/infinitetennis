import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useState, useEffect} from 'react'
import React from 'react'
import MobileDetect from "mobile-detect";

const VideoSlider = (props) => {
    
    const breakpoints = {
        desktop: {min: 900, max: 3000, itemToShow: 3},
        tablet: {min: 500, max: 900, itemToShow: 2},
        mobile: {min: 0, max: 500, itemToShow: 1}
    }
    const itemsToShowWhenOnServerSide = 3;
    useEffect(() => {
        // Always do navigations after the first render
        setDownloaded(true)
      }, [])
    return (
        <div>

        </div>
    )
}

export default VideoSlider