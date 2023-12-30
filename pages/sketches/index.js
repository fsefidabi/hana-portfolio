import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import { getSketches, getPage } from "sanityStudio/sanity-utils"
import { getZoomedImageSize } from "utils"
import useEventListener from "hooks/useEventListener"
import SketchesGallery from "components/templates/SketchesGallery"
import ImageCarousel from "components/atoms/ImageCarousel"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "./sketches.module.css"

function SketchesTitle({ title, customStyle }) {
    return (
        <MotionTextRevealTitle
            text={title}
            wrapperClass={`${styles.title} ${customStyle}`}
        />
    )
}

function Sketches({ pageContent, sketches }) {
    const [zoomedImageSrc, setZoomedImageSrc] = useState("")
    const [zoomedImageCollection, setZoomedImageCollections] = useState([])
    const [zoomedSize, setZoomedSize] = useState({ width: "0px", height: "0px" })
    const [clickPosition, setClickPosition] = useState({ x: "0px", y: "0px" })

    useEventListener(window, "keydown", handleKeyDownEvent)

    useEffect(() => {
        (async function () {
            try {
                const dimensions = await getZoomedImageSize(zoomedImageSrc)
                setZoomedSize({
                    width: dimensions.width,
                    height: dimensions.height
                })
            } catch (error) {
                console.error("Error fetching image dimensions:", error)
            }
        })()
    }, [zoomedImageSrc])

    function handleKeyDownEvent(event) {
        if (event.code === "Escape") {
            handleZoomOutImage(event)
            document.body.style.overflow = "auto"
        }
    }

    function handleImageClick(event, zoomedImageSrc, images) {
        const x = event.clientX
        const y = event.clientY
        setClickPosition({ x, y })

        handleZoomInImage(event, zoomedImageSrc, images)
    }

    function handleZoomInImage(event, targetImage, imageCollection) {
        setZoomedImageSrc(targetImage)
        setZoomedImageCollections(imageCollection)
        document.body.style.overflow = "hidden"
        document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomIn", event: event } }))
    }

    function handleZoomOutImage(event) {
        setZoomedImageSrc("")
        setZoomedImageCollections([])
        document.body.style.overflow = "auto"
        document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomOut", event: event } }))
    }

    return <>
        <div className={"max-w-screen-xl mx-auto"}>
            <motion.div
                className={`${styles.contentWrapper} borderRight borderLeft`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: false }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.3)}
            >
                <SketchesTitle title={pageContent.title1} customStyle={"mt-14 mb-10 text-2xl"}/>

                <SketchesTitle title={pageContent.description1} customStyle={"mb-16 text-xl"}/>

                <SketchesGallery sketches={sketches.slice(0, 15)} sectionNumber={1} onPhotoClick={handleImageClick}/>

                <SketchesTitle title={pageContent.title2} customStyle={"mt-24 mb-2 text-xl"}/>

                <SketchesGallery sketches={sketches.slice(15, 17)} sectionNumber={2} onPhotoClick={handleImageClick}/>

                <SketchesTitle title={pageContent.title3} customStyle={"mt-24 mb-2 text-xl"}/>

                <SketchesGallery sketches={sketches.slice(17)} sectionNumber={3} onPhotoClick={handleImageClick}/>
            </motion.div>
        </div>

        <ImageCarousel
            style={{
                width: zoomedSize.width,
                height: zoomedSize.height,
                maxWidth: "95vw",
                maxHeight: "95vh"
            }}
            clickPosition={clickPosition}
            zoomedSize={zoomedSize}
            zoomed={zoomedImageSrc !== ""}
            images={zoomedImageCollection}
            onClick={handleZoomOutImage}
        />
    </>
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
