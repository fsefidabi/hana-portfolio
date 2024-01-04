import React, { useEffect, useState } from "react"
import ZoomedImage from "./ZoomedImage"
import SlideshowSlider from "./SlideshowSlider"

function ImageCarousel(props) {
    const { images, defaultSlideIndex = 0, zoomed, parent = true, style, clickPosition, zoomedSize, hasThumbnail = false, onClick } = props

    const [shouldApplyTransition, setShouldApplyTransition] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShouldApplyTransition(true)
        }, 500)
    }, [])

    return (
        (zoomed && parent) ? <ZoomedImage
            images={images}
            defaultSlideIndex={defaultSlideIndex}
            clickPosition={clickPosition}
            zoomedSize={zoomedSize}
            onClick={onClick}
        /> : <SlideshowSlider
            images={images}
            defaultSlideIndex={defaultSlideIndex}
            style={style}
            shouldApplyTransition={shouldApplyTransition}
            isZoomed={zoomed}
            hasThumbnail={hasThumbnail}
            onClick={onClick}
        />
    )
}

export default ImageCarousel
