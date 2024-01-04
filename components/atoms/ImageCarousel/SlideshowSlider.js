import React, { useEffect, useRef, useState } from "react"
import { getMouseSegment, switchClassesForElement } from "utils"
import { ALIGNMENT } from "constants/index"
import useEventListener from "hooks/useEventListener"
import SlideshowButtons from "./SlideshowButtons"
import SlideshowDots from "./SlideshowDots"
import SlideShowThumbnail from "./SlideShowThumbnail"
import styles from "./imageCarousel.module.css"

function SlideshowSlider(props) {
    const {
        images,
        defaultSlideIndex,
        style,
        shouldApplyTransition,
        isZoomed,
        hasThumbnail,
        onClick
    } = props

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [mousePositionOverSlider, setMousePositionOverSlider] = useState("")

    const slideshowRef = useRef()
    const imageRef = useRef()

    useEventListener(window, "keydown", handleKeyDownEvents)

    useEffect(() => {
        setCurrentSlideIndex(defaultSlideIndex)
    }, [defaultSlideIndex])

    function handleKeyDownEvents(event) {
        if (!isZoomed) return
        slideshowRef.current.focus()
        if (event.code === "ArrowRight") handleShowNextSlide(event)
        if (event.code === "ArrowLeft") handleShowPrevSlide(event)
    }

    function handleMouseMove(event) {
        const mouseSegment = getMouseSegment(event, 0.25)

        if (images.length > 1 && mouseSegment !== 0) {
            if (mouseSegment === -1) {
                setMousePositionOverSlider(ALIGNMENT.LEFT)
            } else if (mouseSegment === 1) {
                setMousePositionOverSlider(ALIGNMENT.RIGHT)
            }
        } else {
            setMousePositionOverSlider(ALIGNMENT.CENTER)
            if (isZoomed) {
                switchClassesForElement(slideshowRef.current, ["__zoomable", "__zoom_out"])
            } else {
                switchClassesForElement(slideshowRef.current, ["__zoomable", "__zoom_in"])
            }
        }
    }

    function handleImageClick(event, image) {
        onClick(event, image)
    }

    function handleMouseLeave(event) {
        if (event?.relatedTarget?.classList?.contains("__link")) return
        setMousePositionOverSlider(ALIGNMENT.CENTER)
    }

    function handleShowNextSlide(event) {
        event.stopPropagation()
        setCurrentSlideIndex(prevIndex => {
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1
        })
    }

    function handleShowPrevSlide(event) {
        event.stopPropagation()
        setCurrentSlideIndex(prevIndex => {
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1
        })
    }

    function handleShowTargetSlide(event, index) {
        event.stopPropagation()
        setCurrentSlideIndex(index)
    }

    return (
        <div
            ref={slideshowRef}
            className={styles.slideshow}
        >
            <div
                className={`${styles.slideshowSlider} ${shouldApplyTransition ? "transition duration-1000" : ""}`}
                style={{ transform: `translate3d(${-currentSlideIndex * 100}%, 0, 0)` }}
            >
                {images.map((image, imageIndex) => (
                    <figure
                        key={image?._id || images[imageIndex]}
                        className={styles.slide}
                    >
                        <img
                            ref={imageRef}
                            src={images[imageIndex]}
                            alt={"image carousel"}
                            style={style}
                            onClick={event => handleImageClick(event, images[imageIndex])}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        />
                    </figure>
                ))}
            </div>

            <SlideshowButtons
                isSlidable={images.length > 1}
                isZoomed={isZoomed}
                mousePositionOverSlider={mousePositionOverSlider}
                handleShowNextSlide={handleShowNextSlide}
                handleShowPrevSlide={handleShowPrevSlide}
            />

            {hasThumbnail ? <SlideShowThumbnail
                images={images}
                currentSlideIndex={currentSlideIndex}
                handleShowTargetSlide={handleShowTargetSlide}
            /> : <SlideshowDots
                imagesCount={images.length}
                currentSlideIndex={currentSlideIndex}
                handleShowTargetSlide={handleShowTargetSlide}
            />}
        </div>
    )
}

export default SlideshowSlider
