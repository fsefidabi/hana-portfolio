import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useEventListener from "hooks/useEventListener"
import ArrowSvg from "svgIcons/arrowWithTail1.svg"
import { fade } from "framerMotionAnimations"
import styles from "./scrollToTop.module.css"

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false)

    useEventListener(window, "scroll", handleWindowScroll)

    function handleWindowScroll(e) {
        if (window.scrollY < 100) {
            window.isScrollingToTop = false
        }
        const shouldShowButton = window.scrollY > window.innerHeight / 5
        if (shouldShowButton && !show) {
            setShow(true)
        } else if (!shouldShowButton && show) {
            setShow(false)
        }
    }

    function scrollToTop() {
        window.isScrollingToTop = true
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <AnimatePresence>
            {show && <motion.button
                className={`__link ${styles.button}`}
                initial={{ opacity: 0, x: "-35px", y: "-15px" }}
                animate={fade.fadeInOut().animate}
                whileHover={{ scale: 1.2, x: "-35px", y: "-15px" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                exit={fade.fadeInOut().exit}
                onClick={scrollToTop}
            >
                <ArrowSvg/>
            </motion.button>}
        </AnimatePresence>
    )
}
