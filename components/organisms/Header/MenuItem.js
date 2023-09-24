import { useRouter } from "next/router"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import styles from "./header.module.css"

export default function MenuItem(props) {
  const { label, path } = props

  const router = useRouter()
  const controls = useAnimation()

  const currentRoute = router.pathname

  function handleMouseEnterControls() {
    if (currentRoute === path) return
    controls.start("initial")
  }

  function handleMouseLeaveControls() {
    if (currentRoute === path) return
    controls.start("animate")
  }

  return (
    <li
      className={styles.menuItem}
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
    >
      <Link
        href={path}
        className={currentRoute !== path ? "clickable" : ""}
      >
        <span className={"inline-block flex flex-col relative overflow-hidden"}>
          <span className={currentRoute === path ? "border-b-2 border-secondary" : ""}>
            {label.split("").map((char, charIndex) => {
              return (
                <motion.span
                  key={char + "-" + charIndex}
                  transition={{ delay: 0.05 * charIndex, type: "spring", bounce: 0, duration: 0.8 }}
                  variants={textReveal.letterVariantsWithYAxisMove}
                  animate={controls}
                  className={"inline-block"}
                >
                  {char}
                </motion.span>
              )
            })}
          </span>

          <span className={"absolute top-full"}>
            {label.split("").map((char, charIndex) => {
              return (
                <motion.span
                  key={char + "-" + charIndex}
                  transition={{ delay: 0.05 * charIndex, type: "spring", bounce: 0, duration: 0.8 }}
                  variants={textReveal.letterVariantsWithYAxisMove}
                  animate={controls}
                  className={"inline-block"}
                >
                  {char}
                </motion.span>
              )
            })}
          </span>
        </span>
      </Link>
    </li>
  )
}
