import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./imageCarousel.module.css"
import useEventListener from "../../../hooks/useEventListener"

const CLICK_FUNCTIONALITY = {
    ZOOM: "zoom",
    SLIDE_LEFT: "slideLeft",
    SLIDE_RIGHT: "slideRight"
}

function ImageCarousel(props) {
    const { images, defaultSlideIndex = 0, zoomed, parent = true, style, clickPosition, zoomedSize, onClick } = props

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [clickFunctionalityType, setClickFunctionalityType] = useState(CLICK_FUNCTIONALITY.ZOOM)
    const [shouldApplyTransition, setShouldApplyTransition] = useState(false)

    const slideshowRef = useRef()
    const imageRef = useRef()
    const zoomedImageRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setShouldApplyTransition(true)
        }, 500)
    }, [])

    useEffect(() => {
        setCurrentSlideIndex(defaultSlideIndex)
    }, [defaultSlideIndex])

    function handleShowTargetSlide(e, index) {
        e.stopPropagation()
        setCurrentSlideIndex(index)
    }

    function handleCursorOnZoomedImageBackground(event) {
        // console.log("imageRef", event)
        // if (!imageRef.current) return
        // const { clientX } = event
        // const imageBoundingRect = imageRef.current.getBoundingClientRect()
        // if (zoomed && (clientX < imageBoundingRect.left || clientX > imageBoundingRect.right)) {
        //     switchClassesForCursor(["__zoomable", "__zoom_in"], ["__clickable", "__slide_to_right", "__slide_to_left", "__zoom_out"])
        // }
    }

    function handleMouseMove(event) {
        const { clientX, currentTarget } = event
        const image = currentTarget
        const mouseX = clientX - image.getBoundingClientRect().left
        const imageWidth = image.offsetWidth

        const leftThreshold = 0.25 * imageWidth
        const rightThreshold = 0.75 * imageWidth

        if (images.length > 1 && ((mouseX < leftThreshold) || mouseX > rightThreshold)) {
            if (mouseX < leftThreshold) {
                setClickFunctionalityType(CLICK_FUNCTIONALITY.SLIDE_LEFT)
                switchClassesForCursor(["__clickable", "__slide_to_left"], ["__zoomable", "__zoom_in", "__slide_to_right"])
            } else if (mouseX > rightThreshold) {
                setClickFunctionalityType(CLICK_FUNCTIONALITY.SLIDE_RIGHT)
                switchClassesForCursor(["__clickable", "__slide_to_right"], ["__zoomable", "__zoom_in", "__slide_to_left"])
            }
        } else {
            setClickFunctionalityType(CLICK_FUNCTIONALITY.ZOOM)
            if (zoomed) {
                switchClassesForCursor(["__zoomable", "__zoom_out"], ["__clickable", "__slide_to_right", "__slide_to_left", "__zoom_in"])
            } else {
                switchClassesForCursor(["__zoomable", "__zoom_in"], ["__clickable", "__slide_to_right", "__slide_to_left", "__zoom_out"])
            }
        }
    }

    function switchClassesForCursor(classesToAdd, classesToRemove) {
        for (const cls of classesToAdd) {
            slideshowRef.current.classList.add(cls)
        }
        for (const cls of classesToRemove) {
            slideshowRef.current.classList.remove(cls)
        }
    }

    function handleImageClick(event, image) {
        switch (clickFunctionalityType) {
            case CLICK_FUNCTIONALITY.ZOOM:
                onClick(event, image)
                break
            case CLICK_FUNCTIONALITY.SLIDE_LEFT:
                handleShowPrevSlide(event)
                break
            case CLICK_FUNCTIONALITY.SLIDE_RIGHT:
                handleShowNextSlide(event)
                break
            default:
                throw new Error(`unsupported click functionality type: ${clickFunctionalityType}`)
        }
    }

    function handleShowNextSlide(e) {
        e.stopPropagation()
        setCurrentSlideIndex(prevIndex => {
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1
        })
    }

    function handleShowPrevSlide(e) {
        e.stopPropagation()
        setCurrentSlideIndex(prevIndex => {
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1
        })
    }

    return (
        (zoomed && parent) ? <AnimatePresence>
            <motion.div
                className={`${styles.zoomedImageContainer} background`}
                onClick={onClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                onMouseMove={handleCursorOnZoomedImageBackground}
            >
                <motion.div
                    ref={zoomedImageRef}
                    className={`${styles.zoomedImage} zoomed`}
                    style={{
                        transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`,
                        width: zoomedSize.width,
                        height: zoomedSize.height
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4 }}
                >
                    <ImageCarousel
                        style={{
                            width: zoomedSize.width,
                            height: zoomedSize.height,
                            maxWidth: "95vw",
                            maxHeight: "95vh"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={true}
                        parent={false}
                        images={images}
                        defaultSlideIndex={defaultSlideIndex}
                        onClick={onClick}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence> : <div
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
        </div>

    )
}

export default ImageCarousel
