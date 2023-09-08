import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useEventListener from "hooks/useEventListener"
import ArrowSvg from "svgIcons/arrow.svg"
import { fade } from "framerMotionAnimations"
import styles from "./scrollToTop.module.css"

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false)

  useEventListener(window, "scroll", handleWindowScroll)

  function handleWindowScroll(e) {
    const shouldShowButton = window.scrollY > window.innerHeight / 5
    if (shouldShowButton && !show) {
      setShow(true)
    } else if (!shouldShowButton && show) {
      setShow(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {show && <motion.button
        className={styles.button}
        initial={{ opacity: 0 }}
        animate={fade.animate}
        exit={fade.exit}
        onClick={scrollToTop}
      >
        <ArrowSvg/>
      </motion.button>}
    </AnimatePresence>
  )
}
