import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import { getSketches, getPage } from "sanityStudio/sanity-utils"
import SketchesGallery from "components/templates/SketchesGallery"
import useEventListener from "hooks/useEventListener"
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
    const [zoomedImage, setZoomedImage] = useState("")
    const [zoomedSize, setZoomedSize] = useState({ width: "0px", height: "0px" })
    const [clickPosition, setClickPosition] = useState({ x: "0px", y: "0px" })

    const zoomedImageRef = useRef(null)

    useEventListener(window, "keydown", handleKeyDownEvent)

    useEffect(() => {
        updateZoomedSize()
    }, [zoomedImage])

    function updateZoomedSize() {
        if (!zoomedImage) return

        const windowHeight = window.innerHeight * 0.95
        const windowWidth = window.innerWidth * 0.90

        const image = new Image()
        image.src = zoomedImage
        image.onload = () => {
            const imageWidth = image.width
            const imageHeight = image.height

            const aspectRatio = imageWidth / imageHeight

            if (imageWidth > imageHeight) {
                setZoomedSize({ width: windowWidth + "px", height: "auto" })
            } else {
                setZoomedSize({ width: "auto", height: windowHeight + "px" })
            }
        }
    }

    function handleImageClick(event) {
        const x = event.clientX
        const y = event.clientY
        setClickPosition({ x, y })

        handleZoomInImage(event)
    }

    function handleZoomInImage(event) {
        setZoomedImage(event.target.src)
        document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomIn", event: event } }))
    }

    function handleZoomOutImage(event) {
        // if (event.target !== zoomedImageRef?.current) {
            setZoomedImage(null)
            document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomOut", event: event } }))
        // }
    }

    function handleKeyDownEvent(event) {
        if (event.code === "Escape") {
            // setZoomedImage(null)
            handleZoomOutImage(event)
        }
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

                <SketchesGallery sketches={sketches.slice(0, 15)} onPhotoClick={handleImageClick}/>

                <SketchesTitle title={pageContent.title2} customStyle={"mt-24 mb-2 text-2xl"}/>

                <SketchesGallery sketches={sketches.slice(15, 17)} onPhotoClick={handleImageClick}/>

                <SketchesTitle title={pageContent.title3} customStyle={"mt-24 mb-2 text-2xl"}/>

                <SketchesGallery sketches={sketches.slice(17)} onPhotoClick={handleImageClick}/>
            </motion.div>
        </div>

        <AnimatePresence>
            {zoomedImage && (
                <motion.div
                    className={`${styles.zoomedImageContainer} __zoomable __zoom-out`}
                    onClick={handleZoomOutImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <motion.img
                        ref={zoomedImageRef}
                        className={styles.zoomedImage}
                        src={zoomedImage}
                        alt="Zoomed"
                        style={{
                            transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`,
                            width: zoomedSize.width,
                            height: zoomedSize.height
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4 }}
                    />
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
