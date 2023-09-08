import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useEventListener from "hooks/useEventListener"
import ArrowSvg from "svgIcons/arrow.svg"
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
        animate={{
          opacity: 1,
          visibility: "visible",
          transition: {
            visibility: {
              duration: 0.5,
              delay: 0.5
            },
            opacity: {
              duration: 0.25
            }
          }
        }}
        exit={{
          opacity: 0,
          visibility: "hidden",
          transition: {
            visibility: {
              duration: 0.5,
              delay: 0.5
            },
            opacity: {
              duration: 0.25
            }
          }
        }}
        onClick={scrollToTop}
      >
        <ArrowSvg/>
      </motion.button>}
    </AnimatePresence>
  )
}
