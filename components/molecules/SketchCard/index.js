import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import styles from "./sketchCard.module.css"
import ImageCarousel from "../../atoms/ImageCarousel"

function SketchCard({ sketch, index, onPhotoClick }) {
    return (
        <motion.div
            key={sketch._id}
            className={`${styles.card} sketch_card-${index}`}
            variants={textReveal.boxRevealToTop()}
            transition={{ duration: 2 }}
        >
            <ImageCarousel images={sketch.images} onClick={onPhotoClick}/>
        </motion.div>
    )
}

export default SketchCard
