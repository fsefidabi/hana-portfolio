import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ArrowSvg from "svgIcons/arrow.svg"
import { fade } from "framerMotionAnimations"
import styles from "./journeyCard.module.css"

export default function JourneyCard(props) {
  const { date, title, description, image } = props

  const [cardIsHovered, setCardIsHovered] = useState(false)

  return <div
    className={styles.card}
    onMouseOver={() => setCardIsHovered(prev => !prev)}
    onMouseOut={() => setCardIsHovered(prev => !prev)}
  >
    <div className={styles.date}>
      {date}
      <ArrowSvg/>
    </div>

    <div className={styles.image}>
      {image && <Image
        src={image}
        alt={title}
        layout={"fill"}
        objectFit={"cover"}
      />}
    </div>

    <div className={styles.bottomSection}>
      <motion.div
        className={styles.title}
        variants={fade.fadeIn}
        animate={!cardIsHovered ? "animate" : "initial"}
      >
        {title.length > 0 ? title?.map(item => (
          item?.children?.map(child => (
            <p>{child.text}</p>
          ))
        )) : null}
      </motion.div>

      <motion.div
        className={styles.description}
        variants={fade.fadeInWithAutoHeightIncrease}
        animate={cardIsHovered ? "animate" : "initial"}
      >
        <div className={"p-3"}>
          {description.length > 0 ? description?.map(item => (
            item?.children?.map(child => (
              <p key={child._key}>{child.text}</p>
            ))
          )) : null}
        </div>
      </motion.div>
    </div>
  </div>
}
