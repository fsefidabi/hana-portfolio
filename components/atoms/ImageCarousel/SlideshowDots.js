import React from "react"
import styles from "./imageCarousel.module.css"

function SlideshowDots(props) {
    const { imagesCount, currentSlideIndex, handleShowTargetSlide } = props

    return (
        imagesCount > 1 && <div className={`${styles.slideshowDots} dots`}>
            {[...new Array(imagesCount)].map((_, indicatorIndex) => (
                <button
                    key={indicatorIndex}
                    className={`${styles.slideshowDot} ${currentSlideIndex === indicatorIndex ? styles.active : ""} __link`}
                    onClick={e => handleShowTargetSlide(e, indicatorIndex)}
                ></button>
            ))}
        </div>
    )
}

export default SlideshowDots
