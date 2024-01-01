import React, { useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { switchClassesForElement } from "utils"
import ImageCarousel from "./index"
import styles from "./imageCarousel.module.css"

function ZoomedImage(props) {
    const { images, defaultSlideIndex, clickPosition, zoomedSize, onClick } = props

    const zoomedImageRef = useRef(null)

    function handleMouseMove() {
        const slideshowElement = document.getElementById("zoomed-image-carousel")
        switchClassesForElement(slideshowElement, ["__zoomable", "__zoom_out"])
    }

    return (
        <AnimatePresence>
            <motion.div
                id={"zoomed-image-carousel"}
                className={`${styles.zoomedImageBackground} background`}
                onClick={onClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                <div
                    className={`${styles.zoomedImageWrapper} zoomed`}
                    onMouseMove={handleMouseMove}
                >
                    <motion.div
                        ref={zoomedImageRef}
                        className={`${styles.zoomedImage}`}
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
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={true}
                            parent={false}
                            images={images}
                            defaultSlideIndex={defaultSlideIndex}
                            onClick={onClick}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ZoomedImage
