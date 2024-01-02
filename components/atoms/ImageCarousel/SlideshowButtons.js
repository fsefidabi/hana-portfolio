import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import fade from "framerMotionAnimations/fade"
import { ALIGNMENT } from "constants/index"
import ArrowWithTail from "svgIcons/arrowWithTail2.svg"
import styles from "./imageCarousel.module.css"

function SlideshowButtons(props) {
    const { isSlidable, isZoomed, mousePositionOverSlider, handleShowNextSlide, handleShowPrevSlide } = props

    return (
        <div
            className={`${styles.slideshowButtons} ${isZoomed ? styles.largeSlideshowButtons : styles.smallSlideshowButtons}`}>
            <AnimatePresence>
                <motion.div
                    className={`__link ${styles.buttonWrapper} ${(mousePositionOverSlider === ALIGNMENT.LEFT || (isSlidable && isZoomed)) ? "flex" : "flex"}`}
                    variants={fade.fadeIn(0.5)}
                    animate={(mousePositionOverSlider === ALIGNMENT.LEFT || (isSlidable && isZoomed)) ? "animate" : "animate"}
                    onClick={handleShowPrevSlide}
                >
                    <button type="button">
                        <ArrowWithTail className={"rotate-180 w-6"}/>
                    </button>
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div
                    className={`__link ${styles.buttonWrapper} ${(mousePositionOverSlider === ALIGNMENT.RIGHT || (isSlidable && isZoomed)) ? "flex" : "flex"}`}
                    variants={fade.fadeIn(0.5)}
                    animate={(mousePositionOverSlider === ALIGNMENT.RIGHT || (isSlidable && isZoomed)) ? "animate" : "animate"}
                    onClick={handleShowNextSlide}
                >
                    <button type="button">
                        <ArrowWithTail className={"w-6"}/>
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default SlideshowButtons
