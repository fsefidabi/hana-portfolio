import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import WorkCard from "components/molecules/WorkCard"
import styles from "./works.module.css"

export default function Works({ works }) {
    return <>
        <div className={"contentWrapper"}>
            <motion.div className={`${styles.cardsWrapper} borderRight borderLeft`}
                 initial={"initial"}
                 whileInView="animate"
                 viewport={{ once: false }}
                 variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                {works.map(work => {
                    return <WorkCard work={work}/>
                })}
            </motion.div>
        </div>
    </>
}

export async function getStaticProps() {
    const works = await import("/constants/data/works/index.json")

    return {
        props: {
            works: works.default.sort((a, b) => a.order - b.order)
        },
        revalidate: 60
    }
}
