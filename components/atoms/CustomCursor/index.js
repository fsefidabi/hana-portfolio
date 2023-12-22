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

        switch (cursorType) {
            case "pointer":
                customCursorRef.current.style.backgroundImage = "url(\"/assets/svg/pointer.svg\")"
                customCursorRef.current.style.width = "20px"
                customCursorRef.current.style.height = "20px"
                customCursorRef.current.style.backgroundColor = "transparent"
                customCursorRef.current.style.mixBlendMode = "normal"
                break
            case "zoomIn":
                customCursorRef.current.style.backgroundImage = "url(\"/assets/svg/zoomOut.svg\")"
                customCursorRef.current.style.width = "40px"
                customCursorRef.current.style.height = "40px"
                customCursorRef.current.style.backgroundColor = "transparent"
                customCursorRef.current.style.mixBlendMode = "normal"
                break
            case "zoomOut":
                customCursorRef.current.style.backgroundImage = "url(\"/assets/svg/zoomIn.svg\")"
                customCursorRef.current.style.width = "40px"
                customCursorRef.current.style.height = "40px"
                customCursorRef.current.style.backgroundColor = "transparent"
                customCursorRef.current.style.mixBlendMode = "normal"
                break
            default:
                customCursorRef.current.style.backgroundImage = "none"
                customCursorRef.current.style.width = "10px"
                customCursorRef.current.style.height = "10px"
                customCursorRef.current.zIndex = 1000
                customCursorRef.current.style.backgroundColor = "#d35d3d"
                customCursorRef.current.style.mixBlendMode = "normal"
                customCursorRef.current.style.scale = 1
                customCursorRef.current.style.mixBlendMode = "normal"
                break
        }

        setCursorType(cursorType)
        customCursorRef.current.style.left = event.clientX + "px"
        customCursorRef.current.style.top = event.clientY + "px"
    }

    function positionCustomCursor(e) {
        if (!customCursorRef.current) return

        const detail = e.hasOwnProperty("detail") ? e.detail : e
        let path = detail.composedPath()
        if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__hoverable-title"))) {
            toggleCursorStyle({ detail: { cursorType: "pointer", event: e } })
            customCursorRef.current.style.scale = 10
            customCursorRef.current.style.mixBlendMode = "color"
        } else if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__link"))) {
            toggleCursorStyle({ detail: { cursorType: "pointer", event: e } })
        } else if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__zoomable"))) {
            if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("__zoom-out"))) {
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
