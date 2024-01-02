import React, { useEffect, useState } from "react"
import { getZoomedImageSize } from "utils"
import { motion } from "framer-motion"
import useEventListener from "hooks/useEventListener"
import { textReveal } from "framerMotionAnimations"
import ImageCarousel from "components/atoms/ImageCarousel"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "../workTemplates.module.css"

function FirstWorkTemplate({ work }) {
    const [zoomedImageSrc, setZoomedImageSrc] = useState("")
    const [zoomedImageIndex, setZoomedImageIndex] = useState(0)
    const [zoomedSize, setZoomedSize] = useState({ width: "0px", height: "0px" })
    const [clickPosition, setClickPosition] = useState({ x: "0px", y: "0px" })

    useEventListener(window, "keydown", handleKeyDownEvent)

    useEffect(() => {
        const dimensions = getZoomedImageSize(zoomedImageSrc)
        setZoomedSize({
            width: dimensions.width,
            height: dimensions.height
        })
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

    function handleZoomInImage(event, targetImage) {
        setZoomedImageSrc(targetImage)
        const currentImageIndex = work.images.indexOf(targetImage)
        setZoomedImageIndex(currentImageIndex)
        document.body.style.overflow = "hidden"
        document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomIn", event: event } }))
    }

    function handleZoomOutImage(event) {
        setZoomedImageSrc("")
        setZoomedImageIndex(0)
        document.body.style.overflow = "auto"
        document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomOut", event: event } }))
    }

    return (
        <>
            <div className={`contentWrapper mt-16 ${styles.container}`}>
                <MotionTextRevealTitle
                    text={work.projectMainTitle}
                    wrapperClass={styles.mainTitle}
                />

                <MotionTextRevealTitle
                    text={work.projectSubTitle}
                    wrapperClass={styles.subTitle}
                />

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.divider}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.description}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        {work.projectMainDescription.length > 0 ? work.projectMainDescription?.map(item => (
                            item?.children?.map(child => (
                                <p>{child.text}</p>
                            ))
                        )) : null}
                    </motion.div>
                </motion.div>


                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.detail}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        [
                        {work.projectDetail.length > 0 ? work.projectDetail?.map(item => (
                            item?.children?.map(child => (
                                <p>{child.text}</p>
                            ))
                        )) : null}
                        ]
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.disclaimer}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        [
                        <div className={"flex mr-2 font-semibold"}>
                            {work.title2.length > 0 ? work.title2?.map(item => (
                                item?.children?.map(child => (
                                    <p>{child.text}</p>
                                ))
                            )) : null}
                            <p>:</p>
                        </div>
                        {work.description2.length > 0 ? work.description2?.map(item => (
                            item?.children?.map(child => (
                                <p>{child.text}</p>
                            ))
                        )) : null}
                        ]
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[0]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${styles.flexImageWrapper} mt-1`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
                >
                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[1]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[2]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={"mt-1"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[3]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${styles.flexImageWrapper} mt-1`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
                >
                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[4]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[5]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${styles.flexImageWrapper} mt-1`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
                >
                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[6]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[7]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.title}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        {work.title1.length > 0 ? work.title1?.map(item => (
                            item?.children?.map(child => (
                                <p>{child.text}</p>
                            ))
                        )) : null}
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.description}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        {work.description1.length > 0 ? work.description1?.map(item => (
                            item?.children?.map(child => (
                                <p>{child.text}</p>
                            ))
                        )) : null}
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.singleImageWrapper}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[8]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${styles.flexImageWrapper} my-10`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
                >
                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[9]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[10]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[11]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${styles.flexImageWrapper} mt-1`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
                >
                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[12]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[13]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${styles.flexImageWrapper} mt-1`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
                >
                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[14]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[15]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${styles.flexImageWrapper} my-10`}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(0.2)}
                >
                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[16]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[17]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[18]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[19]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[20]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[20]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>

                    <motion.div
                        key={work._id}
                        className={"w-1/2"}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        <ImageCarousel
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            clickPosition={clickPosition}
                            zoomedSize={zoomedSize}
                            zoomed={false}
                            images={[work.images[21]]}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {zoomedImageSrc?.length ? <ImageCarousel
                style={{
                    width: zoomedSize.width,
                    height: zoomedSize.height,
                    maxWidth: "95vw",
                    maxHeight: "95vh"
                }}
                clickPosition={clickPosition}
                zoomedSize={zoomedSize}
                zoomed={zoomedImageSrc !== ""}
                images={work.images}
                defaultSlideIndex={zoomedImageIndex}
                onClick={handleZoomOutImage}
            /> : null}
        </>
    )
}

export default FirstWorkTemplate
