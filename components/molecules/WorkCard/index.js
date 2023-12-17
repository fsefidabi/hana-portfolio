import React from "react"
import { motion } from "framer-motion"
import { fade, textReveal } from "framerMotionAnimations"
import styles from "./workCard.module.css"

function WorkCard({ work }) {
    return (
        <motion.div
            key={work.id}
            className={`${styles.card} clickable`}
            variants={textReveal.boxRevealToTop()}
            transition={{ duration: 2 }}
        >
            <motion.div
                className={"w-full h-full"}
                initial="initial"
                whileHover="animate"
            >
            <motion.div className={styles.title} variants={fade.fadeInUp(1, 0, 0, 20)}>
                {work.projectMainTitle.length > 0 ? work.projectMainTitle?.map(item => (
                    item?.children?.map(child => (
                        <p>
                            {child.text}
                        </p>
                    ))
                )) : null}
            </motion.div>

            <motion.div className={styles.box} variants={fade.fadeIn(0.3)} duration={0}></motion.div>

            <img src={work.coverImageUrl}/>
        </motion.div>
        </motion.div>
    )
}

export default WorkCard
