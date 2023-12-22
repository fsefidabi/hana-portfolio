import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import styles from "./sketchCard.module.css"

function SketchCard({ sketch, index, onPhotoClick }) {
    return (
        <motion.div
            key={sketch._id}
            className={`${styles.card} sketch_card-${index}`}
            variants={textReveal.boxRevealToTop()}
            transition={{ duration: 2 }}
        >
            <figure className={"w-full h-full"}>
                <img
                    src={sketch.images[0]}
                    className={"__zoomable __zoom-in"}
                    onClick={onPhotoClick}
                />
            </figure>
        </motion.div>
    )
}

export default SketchCard
