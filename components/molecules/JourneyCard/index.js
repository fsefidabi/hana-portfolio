import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ArrowSvg from "svgIcons/arrow.svg"
import styles from "./journeyCard.module.css"

export default function JourneyCard(props) {
  const { date, title, description, image } = props

  const [cardIsHovered, setCardIsHovered] = useState(false)

  const titleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }

  const descriptionVariants = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: { height: { duration: 0.5, type: "spring", velocity: 0, bounce: 0 }, opacity: { delay: 0.2 } }
    }
  }

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
        variants={titleVariants}
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
        variants={descriptionVariants}
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
