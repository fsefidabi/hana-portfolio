import React from "react"
import { motion } from "framer-motion"
import { fade } from "framerMotionAnimations"
import styles from "./workCard.module.css"

function WorkCard({ work }) {
    return (
        <motion.div
            key={work.id}
            className={`${styles.card} clickable`}
            initial="initial"
            whileHover="animate"
        >
            <motion.div className={styles.title} variants={fade.fadeInUp2}>
                {work.projectMainTitle.length > 0 ? work.projectMainTitle?.map(item => (
                    item?.children?.map(child => (
                        <p>
                            {child.text}
                        </p>
                    ))
                )) : null}
            </motion.div>

            <motion.div className={styles.box} variants={fade.fadeIn}></motion.div>

            <img src={work.coverImageUrl}/>
        </motion.div>
    )
}

export default WorkCard
