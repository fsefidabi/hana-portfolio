import React from "react"
import { useRouter } from "next/router"
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
    return <div className={"w-full absolute bottom-0 bg-black mt-1"}>
        {title.length > 0 ? title?.map(item => (
            item?.children?.map(child => (
                <p className={"text-center text-lg uppercase"}>
                    {child.text}
                </p>
            ))
        )) : null}
    </div>
}

function WorkCard({ work }) {
    const router = useRouter()

    const matches = useMediaQuery("(max-width: 1024px)")

    function handleImageClick() {
        const { slug } = work
        const subPath = slug.current || ""
        router.push(`/works/${subPath}`)
    }

    return (
        <motion.div
            key={work._id}
            className={`${styles.card} __link`}
            variants={textReveal.boxRevealToTop()}
            transition={{ duration: 2 }}
            onClick={handleImageClick}
        >
            <motion.div
                className={"w-full h-full"}
                initial="initial"
                whileHover="animate"
            >
                {matches ? <MobileWorkTitle title={work.projectCoverTitle}/> :
                    <DesktopWorkTitle title={work.projectCoverTitle}/>}

                <motion.div className={styles.box} variants={fade.fadeIn(0.3)} duration={0}></motion.div>

                <img src={work.coverImageUrl}/>
            </motion.div>
        </motion.div>
    )
}

export default WorkCard
