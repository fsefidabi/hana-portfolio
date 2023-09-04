import LoadingSvg from "svgIcons/loading.svg"
import styles from "./pdfViewer.module.css"

export default function PdfViewerLoading(props) {
  const { width, height } = props

  return <div
    className={styles.loading}
    style={{ width: width, height: height || `${9 /15.5 * width}px` }}
  >
    <LoadingSvg />
  </div>
}
