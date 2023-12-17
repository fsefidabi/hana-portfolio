import React from "react"
import { motion } from "framer-motion"
import { fade, textReveal } from "framerMotionAnimations"
import { useMediaQuery } from "hooks/useMediaQuery"
import styles from "./workCard.module.css"

function DesktopWorkTitle({ title }) {
    return <motion.div
        className={styles.title}
        variants={fade.fadeInUp(1, 0, 0, 20, "-50%")}
    >
        {title.length > 0 ? title?.map(item => (
            item?.children?.map(child => (
                <p>
                    {child.text}
                </p>
            ))
        )) : null}
    </motion.div>
}

function MobileWorkTitle({ title }) {
    return <div className={"w-full absolute bottom-0 bg-black"}>
        {title.length > 0 ? title?.map(item => (
            item?.children?.map(child => (
                <p className={"text-center"}>
                    {child.text}
                </p>
            ))
        )) : null}
    </div>
}

function WorkCard({ work }) {
    const matches = useMediaQuery("(max-width: 640px)")

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
                {matches ? <MobileWorkTitle title={work.projectMainTitle}/> :
                    <DesktopWorkTitle title={work.projectMainTitle}/>}

                <motion.div className={styles.box} variants={fade.fadeIn(0.3)} duration={0}></motion.div>

                <img src={work.coverImageUrl}/>
            </motion.div>
        </motion.div>
    )
}

export default WorkCard
