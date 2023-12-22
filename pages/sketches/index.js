import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import { getSketches, getPage } from "sanityStudio/sanity-utils"
import SketchCard from "components/molecules/SketchCard"
import styles from "./sketches.module.css"

function SketchesTitle({ title }) {
    return title.length > 0 ? title?.map(item => (
        item?.children?.map(child => (
            <p>{child.text}</p>
        ))
    )) : null
}

function Sketches({ pageContent, sketches }) {
    return (
        <div className={"max-w-screen-xl mx-auto"}>
            <motion.div
                className={`${styles.contentWrapper} borderRight borderLeft`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: false }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.3)}
            >
                <motion.div
                    className={`${styles.title} mt-14 mb-16`}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <SketchesTitle title={pageContent.title1}/>
                </motion.div>

                <div className={styles.cardsWrapper}>
                    {sketches.slice(0, 15).map((sketch, index) => {
                        return <SketchCard sketch={sketch} index={index + 1}/>
                    })}
                </div>

                <motion.div
                    className={`${styles.title} mt-24 mb-2`}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <SketchesTitle title={pageContent.title2}/>
                </motion.div>

                <div className={styles.cardsWrapper}>
                    {sketches.slice(15, 17).map((sketch, index) => {
                        return <SketchCard sketch={sketch} index={index + 16}/>
                    })}
                </div>

                <motion.div
                    className={`${styles.title} mt-24 mb-2`}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <SketchesTitle title={pageContent.title3}/>
                </motion.div>

                <div className={styles.cardsWrapper}>
                    {sketches.slice(17).map((sketch, index) => {
                        return <SketchCard sketch={sketch} index={index + 18}/>
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default Sketches

export async function getStaticProps() {
    const pageContent = await getPage("sketches")
    const sketches = await getSketches()

    const filteredSketched = sketches.map(sketch => {
        const images = sketch.images.filter(image => !!image)
        return {
            ...sketch,
            images
        }
    })

    return {
        props: {
            pageContent: pageContent[0],
            sketches: filteredSketched.sort((a, b) => a.order - b.order)
        },
        revalidate: 60
    }
}
