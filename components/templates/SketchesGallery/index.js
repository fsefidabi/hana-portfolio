import React  from "react"
import SketchCard from "../../molecules/SketchCard"
import styles from "../../../pages/sketches/sketches.module.css"

function SketchesGallery({ sketches, sectionNumber, onPhotoClick }) {
    return <>
        <div className={`${styles.cardsWrapper} cards_container-${sectionNumber}`}>
            {sketches.map((sketch, index) => {
                return <SketchCard sketch={sketch} index={index + 1} onPhotoClick={(event, imageSrc) => onPhotoClick(event, imageSrc, sketch.images)}/>
            })}
        </div>


    </>
}

export default SketchesGallery
