import { useRef } from "react"
import useEventListener from "hooks/useEventListener"

export default function CustomCursor() {
    const customCursorRef = useRef()

    function toggleCursorStyle(cursorType = "default") {
        if (cursorType === "pointer") {
            customCursorRef.current.style.backgroundImage = "url(\"/assets/svg/pointer.svg\")"
            customCursorRef.current.style.width = "20px"
            customCursorRef.current.style.height = "20px"
            customCursorRef.current.style.backgroundColor = "transparent"
        } else {
            customCursorRef.current.style.backgroundImage = "none"
            customCursorRef.current.style.width = "10px"
            customCursorRef.current.style.height = "10px"
            customCursorRef.current.style.backgroundColor = "#d35d3d"
        }
    }

    useEventListener(document, "mousemove", positionCustomCursor)

    function positionCustomCursor(e) {
        if (!customCursorRef.current) return

        let path = e.composedPath()
        if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("hoverable-title"))) {
            toggleCursorStyle()
            customCursorRef.current.style.scale = 10
        } else if (path.some(x => x != null && x.classList && Array.from(x?.classList).includes("clickable"))) {
            toggleCursorStyle("pointer")
        } else {
            toggleCursorStyle()
            customCursorRef.current.style.scale = 1
        }

        customCursorRef.current.style.left = e.clientX + "px"
        customCursorRef.current.style.top = e.clientY + "px"
    }

    return (
        <div id={"custom-default-cursor"} className={"custom-cursor"} ref={customCursorRef}></div>
    )
}
