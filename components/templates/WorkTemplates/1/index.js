import React, { useEffect, useState } from "react"
import { getZoomedImageSize } from "utils"
import useEventListener from "hooks/useEventListener"
import ImageCarousel from "components/atoms/ImageCarousel"
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
            <div className={`contentWrapper ${styles.container}`}>
                <div className={styles.mainTitle}>
                    {work.projectMainTitle.length > 0 ? work.projectMainTitle?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </div>

                <div className={styles.subTitle}>
                    {work.projectSubTitle.length > 0 ? work.projectSubTitle?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </div>

                <div className={styles.divider}></div>

                <div className={styles.description}>
                    {work.projectMainDescription.length > 0 ? work.projectMainDescription?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </div>

                <div className={styles.detail}>
                    [
                    {work.projectDetail.length > 0 ? work.projectDetail?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                    ]
                </div>

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

                <div className={`${styles.flexImageWrapper} mt-1`}>
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
                </div>

                <div className={"mt-1"}>
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
                </div>

                <div className={`${styles.flexImageWrapper} mt-1`}>
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
                </div>

                <div className={`${styles.flexImageWrapper} mt-1`}>
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
                </div>

                <div className={styles.title}>
                    {work.title1.length > 0 ? work.title1?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </div>

                <div className={styles.description}>
                    {work.description1.length > 0 ? work.description1?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </div>

                <div className={styles.singleImageWrapper}>
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
                </div>

                <div className={`${styles.flexImageWrapper} my-10`}>
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
                </div>

                <div className={`${styles.flexImageWrapper} mt-1`}>
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
                </div>

                <div className={`${styles.flexImageWrapper} mt-1`}>
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
                </div>

                <div className={`${styles.flexImageWrapper} my-10`}>
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
                </div>

                <div className={styles.detail}>
                    {work.footer.length > 0 ? work.footer?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </div>

                <div className={styles.links}>
                    {work?.links?.map(item => {
                        return <p key={item._key}>
                            <a
                                className={"linkWithBorderBottomOnHover __link"}
                                href={item.link}
                                target={"_blank"}
                            >
                                {item.label}
                            </a>
                        </p>
                    })}
                </div>
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
