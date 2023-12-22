import React  from "react"
import SketchCard from "../../molecules/SketchCard"
import styles from "../../../pages/sketches/sketches.module.css"

function SketchesGallery({ sketches, onPhotoClick }) {
    return <>
        <div className={styles.cardsWrapper}>
            {sketches.map((sketch, index) => {
                return <SketchCard sketch={sketch} index={index + 1} onPhotoClick={onPhotoClick}/>
            })}
        </div>


    </>
}

export default SketchesGallery
