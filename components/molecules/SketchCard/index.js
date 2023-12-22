import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import styles from "./sketchCard.module.css"
import "../../../styles/sketch.css"

function SketchCard({ sketch, index }) {
    return (
        <motion.div
            key={sketch._id}
            className={`${styles.card} sketch_card-${index} clickable`}
            variants={textReveal.boxRevealToTop()}
            transition={{ duration: 2 }}
        >
            <figure className={"w-full h-full"}>
                <img src={sketch.images[0]}/>
            </figure>
        </motion.div>
    )
}

export default SketchCard
