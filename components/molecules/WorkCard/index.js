import React from "react"
import { motion } from "framer-motion"
import { fade } from "framerMotionAnimations"
import styles from "./workCard.module.css"

function WorkCard({ work }) {
    return (
        <motion.div
            key={work.id}
            className={`clickable ${styles.card}`}
            initial="initial"
            whileHover="animate"
        >
            {work.projectMainTitle.length > 0 ? work.projectMainTitle?.map(item => (
                item?.children?.map(child => (
                    <motion.p
                        className={styles.title}
                        variants={fade.fadeInUp2}
                    >
                        {child.text}
                    </motion.p>
                ))
            )) : null}

            <img src={work.coverImageUrl}/>
        </motion.div>
    )
}

export default WorkCard
