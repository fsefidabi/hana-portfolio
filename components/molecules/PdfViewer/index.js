"use client"

import { useEffect, useState, useRef } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { useWindowSize } from "hooks/useWindowSize"
import { useIsInViewport } from "hooks/useIsInViewport"
import useEventListener from "hooks/useEventListener"
import { MAX_SECTION_WIDTH } from "constants/index.js"
import ArrowWithTail from "svgIcons/arrowWithTail2.svg"
import SingleArrow from "svgIcons/singleArrow.svg"
import DoubleArrow from "svgIcons/doubleArrow.svg"
import PdfViewerLoading from "./PdfViewerLoading"
import styles from "./pdfViewer.module.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString()

export default function PdfViewer(props) {
    const { filePath } = props

    const [pageNumber, setPageNumber] = useState(1)
    const [totalPageCount, setTotalPageCount] = useState(0)
    const [pdfViewerWidth, setPdfViewerWidth] = useState(MAX_SECTION_WIDTH)
    const [mousePositionOverDocument, setMousePositionOverDocument] = useState(null)

    const documentRef = useRef()
    const canvasRef = useRef()
    const { width, height } = useWindowSize()
    const isDocumentInViewport = useIsInViewport(documentRef)

    const navigationButtonsPosition = ((window.innerWidth - pdfViewerWidth) / 2) - 10

    useEventListener(window, "keydown", handleKeyDownEvents)

    useEffect(() => {
        updatePdfViewerWidth()
    }, [width, height])

    function handleKeyDownEvents(e) {
        if (!isDocumentInViewport) return
        documentRef.current.focus()
        if (e.code === "ArrowRight" && pageNumber < totalPageCount) handleGoToNextPage()
        if (e.code === "ArrowLeft" && pageNumber > 1) handleGoToPrevPage()
    }

    function updatePdfViewerWidth() {
        if (window.innerWidth > 1100) {
            setPdfViewerWidth(MAX_SECTION_WIDTH)
        } else {
            setPdfViewerWidth(window.innerWidth - 100)
        }
    }

    function onDocumentLoadSuccess({ numPages }) {
        setTotalPageCount(numPages)
    }

    function handleGoToPrevPage() {
        setPageNumber(pageNumber - 1)
    }

    function handleGoToNextPage() {
        setPageNumber(pageNumber + 1)
    }

    function handleGoToFirstPage() {
        setPageNumber(1)
    }

    function handleGoToLastPage() {
        setPageNumber(totalPageCount)
    }

    function handlePageMouseOver(e) {
        const documentBoundingRect = canvasRef?.current?.getBoundingClientRect()
        if (!documentBoundingRect) return

        const threshold = window.innerWidth / 3

        if (e.clientX < threshold && e.clientX > documentBoundingRect?.left) {
            setMousePositionOverDocument("left")
        } else if (e.clientX > (window.innerWidth - threshold) && e.clientX < documentBoundingRect?.right) {
            setMousePositionOverDocument("right")
        } else {
            setMousePositionOverDocument(null)
        }
    }

    return <>
        <Document
            file={filePath}
            loading={<PdfViewerLoading width={pdfViewerWidth}/>}
            inputRef={documentRef}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page
                className={styles.page}
                width={pdfViewerWidth}
                pageNumber={pageNumber}
                canvasBackground={"transparent"}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                canvasRef={canvasRef}
                loading={<PdfViewerLoading width={pdfViewerWidth}/>}
                onMouseMove={handlePageMouseOver}
            >
                <button
                    type="button"
                    style={{ left: `${navigationButtonsPosition}px` }}
                    className={`__link ${mousePositionOverDocument === "left" && pageNumber > 1 ? "flex" : "flex"}`}
                    disabled={pageNumber <= 1}
                    onClick={handleGoToPrevPage}
                >
                    <ArrowWithTail className={"rotate-180 w-6"}/>
                </button>

                <button
                    type="button"
                    disabled={pageNumber >= totalPageCount}
                    style={{ right: `${navigationButtonsPosition}px` }}
                    className={`__link ${mousePositionOverDocument === "right" && pageNumber < totalPageCount ? "flex" : "flex"}`}
                    onClick={handleGoToNextPage}
                >
                    <ArrowWithTail className={"w-6"}/>
                </button>
            </Page>
        </Document>
        <div className={styles.navigatorWrapper}>
            <button
                type="button"
                className={pageNumber <= 1 ? "" : "__link"}
                disabled={pageNumber <= 1}
                onClick={handleGoToFirstPage}
            >
                <DoubleArrow className={"rotate-180 w-3.5"}/>
            </button>

            <button
                type="button"
                className={pageNumber <= 1 ? "" : "__link"}
                disabled={pageNumber <= 1}
                onClick={handleGoToPrevPage}
            >
                <SingleArrow className={"rotate-180 w-2"}/>
            </button>

            <p>
                {pageNumber} / {totalPageCount}
            </p>

            <button
                type="button"
                className={pageNumber >= totalPageCount ? "" : "__link"}
                disabled={pageNumber >= totalPageCount}
                onClick={handleGoToNextPage}
            >
                <SingleArrow className={"w-2"}/>
            </button>

            <button
                type="button"
                className={pageNumber >= totalPageCount ? "" : "__link"}
                disabled={pageNumber >= totalPageCount}
                onClick={handleGoToLastPage}
            >
                <DoubleArrow className={"w-3.5"}/>
            </button>
        </div>
    </>
}
