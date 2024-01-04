import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { getWork, getWorks } from "sanityStudio/sanity-utils"
import useEventListener from "hooks/useEventListener"
import ImageCarousel from "components/atoms/ImageCarousel"
import { getZoomedImageSize } from "../../utils"

const renderComponent = ({ pageContent, clickPosition, handleImageClick }) => {
    const Component = dynamic(() => import(`components/templates/WorkTemplates/${pageContent.templateName}`))
    return <Component
        work={pageContent}
        clickPosition={clickPosition}
        handleImageClick={handleImageClick}
    />
}

function Work({ work }) {
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
            pageContent: work,
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
    const works = await getWorks()

    const paths = works.map(work => ({
        params: { slug: work?.slug?.current }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const work = await getWork(params.slug)

    const images = work[0].images.filter(image => !!image)

    if (!work) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            work: {
                ...work[0],
                images: images || work[0].images
            }
        },
        revalidate: 60
    }
}
