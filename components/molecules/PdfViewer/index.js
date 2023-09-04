import { useEffect, useState, useRef } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { useWindowSize } from "hooks/useWindowSize"
import { useIsInViewport } from "hooks/useIsInViewport"
import PdfViewerLoading from "./PdfViewerLoading"
import SingleArrow from "svgIcons/singleArrow.svg"
import DoubleArrow from "svgIcons/doubleArrow.svg"
import styles from "./pdfViewer.module.css"
import useEventListener from "../../../hooks/useEventListener"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString()

const INITIAL_PDF_VIEWER_WIDTH = 1050

export default function PdfViewer(props) {
  const { filePath } = props

  const [pageNumber, setPageNumber] = useState(1)
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [pdfViewerWidth, setPdfViewerWidth] = useState(INITIAL_PDF_VIEWER_WIDTH)
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
    if (e.code === "ArrowRight") handleGoToNextPage()
    if (e.code === "ArrowLeft") handleGoToPrevPage()
  }

  function updatePdfViewerWidth() {
    if (window.innerWidth > 1100) {
      setPdfViewerWidth(INITIAL_PDF_VIEWER_WIDTH)
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
    const documentBoundingRect = canvasRef.current.getBoundingClientRect()
    const threshold = window.innerWidth / 3

    if (e.clientX < threshold && e.clientX > documentBoundingRect.left) {
      setMousePositionOverDocument("left")
    } else if (e.clientX > (window.innerWidth - threshold) && e.clientX < documentBoundingRect.right) {
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
          className={mousePositionOverDocument === "left" && pageNumber > 1 ? "flex" : "hidden"  }
          disabled={pageNumber <= 1}
          onClick={handleGoToPrevPage}
        >
          <SingleArrow className={"rotate-180 w-2 sm:w-3 -translate-x-0.5"}/>
        </button>

        <button
          type="button"
          disabled={pageNumber >= totalPageCount}
          style={{ right: `${navigationButtonsPosition}px` }}
          className={mousePositionOverDocument === "right" &&  pageNumber < totalPageCount? "flex" : "hidden"  }
          onClick={handleGoToNextPage}
        >
          <SingleArrow className={"w-2 sm:w-3 translate-x-0.5"}/>
        </button>
      </Page>
    </Document>
    <div className={styles.navigatorWrapper}>
      <button
        type="button"
        disabled={pageNumber <= 1}
        onClick={handleGoToFirstPage}
      >
        <DoubleArrow className={"rotate-180 w-3.5"}/>
      </button>

      <button
        type="button"
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
        disabled={pageNumber >= totalPageCount}
        onClick={handleGoToNextPage}
      >
        <SingleArrow className={"w-2"}/>
      </button>

      <button
        type="button"
        disabled={pageNumber >= totalPageCount}
        onClick={handleGoToLastPage}
      >
        <DoubleArrow className={"w-3.5"}/>
      </button>
    </div>
  </>
}
