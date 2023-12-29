import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import { getSketches, getPage } from "sanityStudio/sanity-utils"
import useEventListener from "hooks/useEventListener"
import SketchesGallery from "components/templates/SketchesGallery"
import ImageCarousel from "components/atoms/ImageCarousel"
import styles from "./sketches.module.css"

function SketchesTitle({ title, customStyle }) {
    return (
        <motion.div
            className={`${styles.title} ${customStyle}`}
            variants={textReveal.boxRevealToTop()}
            transition={{ duration: 2 }}
        >
            {title.length > 0 ? title?.map(item => (
                item?.children?.map(child => (
                    <p>{child.text}</p>
                ))
            )) : null}
        </motion.div>
    )
}

function Sketches({ pageContent, sketches }) {
    const [zoomedImageSrc, setZoomedImageSrc] = useState("")
    const [zoomedImageCollection, setZoomedImageCollections] = useState([])
    const [zoomedSize, setZoomedSize] = useState({ width: "0px", height: "0px" })
    const [clickPosition, setClickPosition] = useState({ x: "0px", y: "0px" })

    const zoomedImageRef = useRef(null)

    useEventListener(window, "keydown", handleKeyDownEvent)

    useEffect(() => {
        updateZoomedImageSize()
    }, [zoomedImageSrc])

    function handleKeyDownEvent(event) {
        if (event.code === "Escape") {
            handleZoomOutImage(event)
        }
    }

    function updateZoomedImageSize() {
        if (!zoomedImageSrc) return

        const image = new Image()
        image.src = zoomedImageSrc
        image.onload = () => {
            const imageAspectRatio = image.width / image.height
            const imageHeight = window.innerHeight * 0.95
            const imageWidth = imageHeight * imageAspectRatio

            if (window.innerHeight > window.innerWidth) {
                setZoomedSize({ width: window.innerWidth * 0.95 + "px", height: "auto" })
            } else {
                setZoomedSize({ width: imageWidth + "px", height: imageHeight + "px" })
            }
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
        document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomIn", event: event } }))
    }

    function handleZoomOutImage(event) {
        setZoomedImageSrc("")
        setZoomedImageCollections([])
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
                <SketchesTitle title={pageContent.title1} customStyle={"mt-14 mb-16 text-3xl"}/>

                <SketchesGallery sketches={sketches.slice(0, 15)} sectionNumber={1} onPhotoClick={handleImageClick}/>

                <SketchesTitle title={pageContent.title2} customStyle={"mt-24 mb-2 text-2xl"}/>

                <SketchesGallery sketches={sketches.slice(15, 17)} sectionNumber={2} onPhotoClick={handleImageClick}/>

                <SketchesTitle title={pageContent.title3} customStyle={"mt-24 mb-2 text-2xl"}/>

                <SketchesGallery sketches={sketches.slice(17)} sectionNumber={3} onPhotoClick={handleImageClick}/>
            </motion.div>
        </div>

        <AnimatePresence>
            {zoomedImageSrc.length && (
                <motion.div
                    className={styles.zoomedImageContainer}
                    onClick={handleZoomOutImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <motion.div
                        ref={zoomedImageRef}
                        className={`${styles.zoomedImage} zoomed`}
                        style={{
                            transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`,
                            width: zoomedSize.width,
                            height: zoomedSize.height
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ImageCarousel
                            style={{
                                width: zoomedSize.width,
                                height: zoomedSize.height,
                                maxWidth: "95vw",
                                maxHeight: "95vh"
                            }}
                            mode={"zoomed"}
                            images={zoomedImageCollection}
                            onClick={handleZoomOutImage}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
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
