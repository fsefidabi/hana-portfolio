import { useRef, useState } from "react"
import useEventListener from "hooks/useEventListener"

export default function CustomCursor() {
    const [cursorType, setCursorType] = useState("default")

    const customCursorRef = useRef()

    useEventListener(document, "mousemove", positionCustomCursor)

    useEventListener(document, "changeCursor", toggleCursorStyle)

    useEventListener(document, "click", handleCursorAnimation)

    function toggleCursorStyle({ detail }) {
        const cursorType = detail?.cursorType
        const event = detail?.event
        const styles = {
            height: "20px",
            width: "20px",
            backgroundColor: "transparent",
            mixBlendMode: "normal",
            borderRadius: "0",
            transform: "translateX(-50%) translateY(0%) rotate(0)"
        }

        switch (cursorType) {
            case "pointer":
                styles.backgroundImage = "url(\"/assets/svg/pointer.svg\")"
                break
            case "zoomIn":
                styles.backgroundImage = "url(\"/assets/svg/zoomOut.svg\")"
                break
            case "zoomOut":
                styles.backgroundImage = "url(\"/assets/svg/zoomIn.svg\")"
                break
            default:
                styles.width = "10px"
                styles.height = "10px"
                styles.backgroundColor = "#d35d3d"
                styles.backgroundImage = "none"
                styles.mixBlendMode = "normal"
                styles.borderRadius = "50%"
                styles.zIndex = 1000
                styles.scale = 1
                styles.transform = "translateX(-50%) translateY(-50%) rotate(0)"
                break
        }

        applyStyleOnCustomCursor(styles)
        setCursorType(cursorType)
        customCursorRef.current.style.left = event.clientX + "px"
        customCursorRef.current.style.top = event.clientY + "px"
    }

    function applyStyleOnCustomCursor(styles = {}) {
        for (const style in styles) {
            customCursorRef.current.style[style] = styles[style]
        }
    }

    function positionCustomCursor(e) {
        if (!customCursorRef.current) return

        const detail = e.hasOwnProperty("detail") ? e.detail : e
        let path = detail.composedPath()
        if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__hoverable_title"))) {
            toggleCursorStyle({ detail: { cursorType: "default", event: e } })
            applyStyleOnCustomCursor({
                transform: "translateX(-10%) translateY(-10%) rotate(0)",
                scale: 10,
                mixBlendMode: "color"
            })
        } else if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__link"))) {
            toggleCursorStyle({ detail: { cursorType: "pointer", event: e } })
        } else if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__zoomable"))) {
            if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__zoom_out"))) {
                toggleCursorStyle({ detail: { cursorType: "zoomIn", event: e } })
            } else {
                toggleCursorStyle({ detail: { cursorType: "zoomOut", event: e } })
            }
        } else {
            toggleCursorStyle({ detail: { cursorType: "default", event: e } })
        }
    }

    function handleCursorAnimation() {
        if (cursorType === "zoomIn" || cursorType === "zoomOut") {
            customCursorRef.current.classList.add("animate-scale")

            setTimeout(() => {
                customCursorRef.current.classList.remove("animate-scale")
            }, 301)
        }
    }

    return (
        <div
            ref={customCursorRef}
            id={"custom-default-cursor"}
            className={"custom-cursor"}
        ></div>
    )
}
