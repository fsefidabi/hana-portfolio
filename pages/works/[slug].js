import React, { useEffect, useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import useEventListener from "hooks/useEventListener"
import { getZoomedImageSize } from "utils"
import ImageCarousel from "components/atoms/ImageCarousel"

const renderComponent = ({ pageContent, clickPosition, handleImageClick }) => {
    const Component = dynamic(() => import(`components/templates/WorkTemplates/${pageContent.work.templateName}`))

    return <>
        <Component
            work={pageContent.work}
            clickPosition={clickPosition}
            handleImageClick={handleImageClick}
        />

        <motion.div
            className={"mt-32 mb-20 uppercase text-2xl tracking-wide"}
            initial={"initial"}
            whileInView="animate"
            viewport={{ once: true }}
            variants={textReveal.parentVariantsWithStaggerChildren(1)}
        >
            <motion.div
                className={"flex flex-col items-center justify-center gap-4"}
                variants={textReveal.boxRevealToTop()}
                transition={{ duration: 2 }}
            >
                <p className={"mb-5"}>[OTHER WORKS]</p>
                <div className={"flex justify-center flex-wrap gap-2 mx-10 __link"}>
                    {pageContent.moreWorks.map((work, workIndex) => {
                        return <>
                            <Link className={"flex hover:text-tertiary"} href={work.slug.current}>
                                {work.projectCoverTitle.length > 0 ? work.projectCoverTitle?.map((item, itemIndex) => (
                                    item?.children?.map(child => {
                                        return <p>
                                            <span>{child.text}</span>
                                            {itemIndex < work.projectCoverTitle.length - 1 ?
                                                <span className={"mx-1"}>-</span> : null}
                                        </p>
                                    })
                                )) : null}
                            </Link>
                            {workIndex < pageContent.moreWorks.length - 1 ? "/" : ""}
                        </>
                    })}

                </div>
            </motion.div>
        </motion.div>
    </>
}

function Work({ work, moreWorks }) {
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

    function handleZoomOutImage(event) {
        setZoomedImageSrc("")
        setZoomedImageIndex(0)
        document.body.style.overflow = "auto"
        document.dispatchEvent(new CustomEvent("changeCursor", { detail: { cursorType: "zoomOut", event: event } }))
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

    return <>
        {renderComponent({
            pageContent: {
                work,
                moreWorks
            },
            clickPosition: clickPosition,
            handleImageClick: handleImageClick
        })}

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
}

export default Work

export async function getStaticPaths() {
    const works = await import("/constants/data/works/index.json")

    const paths = works.default.map(work => ({
        params: { slug: work?.slug?.current }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const slug = params.slug
    const work = await import(`/constants/data/works/${slug}.json`)
    const works = await import("/constants/data/works/index.json")

    const images = work.default.images.filter(image => !!image)

    if (!work) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            work: {
                ...work.default,
                images: images || work.default.images
            },
            moreWorks: works.default.filter(work => work.slug.current !== params.slug).sort((a, b) => a.order - b.order)
        },
        revalidate: 60
    }
}
