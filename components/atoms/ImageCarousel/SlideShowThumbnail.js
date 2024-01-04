import React from "react"
import styles from "./imageCarousel.module.css"

function SlideShowThumbnail(props) {
    const { images, currentSlideIndex, handleShowTargetSlide } = props

    return (
        images.length > 1 && <div className={`${styles.slideshowThumbnails} thumbnail dots`}>
            {images.map((image, index) => (
                <img
                    key={image}
                    className={`${styles.slideshowThumbnail} ${currentSlideIndex === index ? styles.active : ""} __link`}
                    src={image}
                    onClick={e => handleShowTargetSlide(e, index)}
                ></img>
            ))}
        </div>
    )
}

export default SlideShowThumbnail
