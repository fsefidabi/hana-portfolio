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
                <motion.button
                    type="button"
                    className={`__link ${(mousePositionOverSlider === ALIGNMENT.LEFT || (isSlidable && isZoomed)) ? "flex" : "hidden"}`}
                    variants={fade.fadeIn(0.5)}
                    animate={(mousePositionOverSlider === ALIGNMENT.LEFT || (isSlidable && isZoomed)) ? "animate" : "initial"}
                    onClick={handleShowPrevSlide}
                >
                    <ArrowWithTail className={"rotate-180 w-6"}/>
                </motion.button>
            </AnimatePresence>

            <AnimatePresence>
                <motion.button
                    type="button"
                    className={`__link ${(mousePositionOverSlider === ALIGNMENT.RIGHT || (isSlidable && isZoomed)) ? "flex" : "hidden"}`}
                    variants={fade.fadeIn(0.5)}
                    animate={(mousePositionOverSlider === ALIGNMENT.RIGHT || (isSlidable && isZoomed)) ? "animate" : "initial"}
                    onClick={handleShowNextSlide}
                >
                    <ArrowWithTail className={"w-6"}/>
                </motion.button>
            </AnimatePresence>
        </div>
    )
}

export default SlideshowButtons
