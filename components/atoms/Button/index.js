import LoadingSvg from "svgIcons/loading.svg"
import styles from "./button.module.css"

export default function Button(props) {
  const {
    label = "",
    disabled = false,
    loading = false,
    handleOnClick = new Function(),
    handleOnMouseMove = new Function(),
    handleMoreButtonMouseOver = new Function(),
    handleMoreButtonMouseLeave = new Function()
  } = props

  return <button
    className={`__link ${styles.button} ${loading ? "cursor-progress" : "cursor-none"}`}
    disabled={disabled}
    onClick={handleOnClick}
    onMouseMove={handleOnMouseMove}
    onMouseOver={handleMoreButtonMouseOver}
    onMouseLeave={handleMoreButtonMouseLeave}
  >
    {loading && <div>
      <LoadingSvg/>
    </div>}
    {label}
  </button>
}
