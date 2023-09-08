import { useState } from "react"
import ArrowSvg from "svgIcons/arrow.svg"
import MotionParagraph from "./MotionParagraph"
import styles from "./journeyCard.module.css"

export default function JourneyCard({ date, ...props }) {
  const [cardIsHovered, setCardIsHovered] = useState(false)

  const contentToDisplay = cardIsHovered ? "description" : "title"

  return <div
    className={styles.card}
    onMouseOver={() => setCardIsHovered(prev => !prev)}
    onMouseOut={() => setCardIsHovered(prev => !prev)}
  >
    <div className={styles.date}>
      {date}
      <ArrowSvg/>
    </div>

    <div className={styles.image} style={{ height: "25rem" }}>
    </div>

    <div className={styles[contentToDisplay]}>
      {props[contentToDisplay].length > 0 ? props[contentToDisplay]?.map(item => (
        item?.children?.map(child => (
          <MotionParagraph key={child._key} text={child.text}/>
        ))
      )) : null}
    </div>
  </div>
}
