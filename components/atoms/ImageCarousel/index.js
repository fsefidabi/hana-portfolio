import React, { useEffect, useState } from "react"
import SingleArrow from "svgIcons/singleArrow.svg"
import styles from "./imageCarousel.module.css"

function ImageCarousel({ images, defaultSlideIndex = 0, style, onClick }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    useEffect(() => {
        setCurrentSlideIndex(defaultSlideIndex)
    }, [])

    function handleShowTargetSlide(e, index) {
        e.stopPropagation()
        setCurrentSlideIndex(index)
    }

    function handleShowNextSlide(e) {
        if (currentSlideIndex === images.length - 1) return
        e.stopPropagation()
        setCurrentSlideIndex(prevIndex => prevIndex + 1)
    }

    function handleShowPrevSlide(e) {
        if (currentSlideIndex === 0) return
        e.stopPropagation()
        setCurrentSlideIndex(prevIndex => prevIndex - 1)
    }

    return (
        <div className={`${styles.slideshow} __zoomable __zoom-in`}>
            <div
                className={styles.slideshowSlider}
                style={{ transform: `translate3d(${-currentSlideIndex * 100}%, 0, 0)` }}
            >
                {images.map((image, imageIndex) => (
                    <figure
                        key={image._id}
                        className={styles.slide}
                    >
                        <img
                            src={images[imageIndex]}
                            alt={"image carousel"}
                            style={style}
                            onClick={event => onClick(event, images[imageIndex])}
                        />
                    </figure>
                ))}
            </div>

            {images.length > 1 && <div className={`${styles.slideshowDots} dots`}>
                {images.map((_, indicatorIndex) => (
                    <button
                        key={indicatorIndex}
                        className={`${styles.slideshowDot} ${currentSlideIndex === indicatorIndex ? styles.active : ""} __link`}
                        onClick={e => handleShowTargetSlide(e, indicatorIndex)}
                    ></button>
                ))}
            </div>}

            {images.length > 1 && <>
                <button
                    type="button"
                    className={`${currentSlideIndex === 0 ? "" : "__link"} ${styles.arrowButton} ${styles.leftButton}`}
                    disabled={currentSlideIndex === 0}
                    onClick={handleShowPrevSlide}
                >
                    <SingleArrow/>
                </button>
                <button
                    type="button"
                    className={`${currentSlideIndex === images.length ? "" : "__link"} ${styles.arrowButton} ${styles.rightButton}`}
                    disabled={currentSlideIndex === images.length}
                    onClick={handleShowNextSlide}
                >
                    <SingleArrow/>
                </button>
            </>}
        </div>

    )
}

export default ImageCarousel
