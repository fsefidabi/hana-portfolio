import LoadingSvg from "svgIcons/loading.svg"
import styles from "./button.module.css"

export default function Button(props) {
  const { label = "", disabled = false, loading = false, handleOnClick } = props

  return <button
    className={styles.button}
    disabled={disabled}
    onClick={handleOnClick}
  >
    {loading && <div>
      <LoadingSvg />
    </div>}
    {label}
  </button>
}
