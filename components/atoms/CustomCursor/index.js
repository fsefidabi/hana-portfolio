import { useRef } from "react"
import useEventListener from "hooks/useEventListener"

export default function CustomCursor() {
  const customCursorRef = useRef()

  useEventListener(document, "mousemove", positionCustomCursor)

  function positionCustomCursor(e) {
    if (!customCursorRef.current) return
    customCursorRef.current.style.left = e.clientX + "px"
    customCursorRef.current.style.top = e.clientY + "px"
  }

  return (
    <div id={"custom-cursor"} ref={customCursorRef}></div>
  )
}
