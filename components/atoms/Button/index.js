import LoadingSvg from "svgIcons/loading.svg"
import styles from "./button.module.css"

export default function Button(props) {
    const {
        label = "",
        disabled = false,
        loading = false,
        theme = "light",
        handleOnClick = new Function(),
        handleOnMouseMove = new Function(),
        handleMoreButtonMouseOver = new Function(),
        handleMoreButtonMouseLeave = new Function()
    } = props

    return <button
        className={`__link ${styles.button} ${theme === "light" ? "text-secondary" : "text-primary"} ${loading ? "cursor-progress" : "cursor-none"}`}
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
