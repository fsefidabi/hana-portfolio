import { useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import ArrowSvg from "svgIcons/arrowWithTail1.svg"
import { fade } from "framerMotionAnimations"
import styles from "./journeyCard.module.css"

export default function JourneyCard(props) {
    const { date, title, description, image } = props

    const [cardIsHovered, setCardIsHovered] = useState(false)

    const x = useMotionValue(1)
    const y = useMotionValue(1)

    const translateX = useTransform(x, [0, 400], [10, -10])
    const translateY = useTransform(y, [0, 400], [10, -10])

    function handleMouseMoveOnImage(event) {
        const rect = event.currentTarget.getBoundingClientRect()

        x.set(event.clientX - rect.left)
        y.set(event.clientY - rect.top)
    }

    function handleCardHover() {
        if (window.isScrollingToTop) return
        setCardIsHovered(prev => !prev)
    }


    return <motion.div
        className={styles.card}
        onMouseOver={handleCardHover}
        onMouseOut={handleCardHover}
    >
        <div className={styles.date}>
            {date}
            <ArrowSvg/>
        </div>

        <motion.div className={styles.image}>
            {image && <motion.img
                src={image}
                alt={title}
                className={"w-full h-full object-cover"}
                style={{ translateX, translateY }}
                initial={{ scale: 1.1, translateX: 0, translateY: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", bounce: 0, duration: 3 }}
                onMouseMove={handleMouseMoveOnImage}
            />}
        </motion.div>

        <div className={styles.bottomSection}>
            <motion.div
                className={styles.title}
                variants={fade.fadeIn()}
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
                variants={fade.fadeInWithAutoHeightIncrease()}
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
    </motion.div>
}
