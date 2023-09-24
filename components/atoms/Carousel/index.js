import { useEffect, useRef, useState } from "react"
import useEventListener from "../../../hooks/useEventListener"

const calcDynamicHeight = (objectWidth) => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    return objectWidth - vw + vh + 150
}

const handleDynamicHeight = (ref, setDynamicHeight) => {
    const objectWidth = ref.current.scrollWidth
    const dynamicHeight = calcDynamicHeight(objectWidth)
    setDynamicHeight(dynamicHeight)
}

export default function Carousel({ header, children }) {
    const [dynamicHeight, setDynamicHeight] = useState(null)
    const [translateX, setTranslateX] = useState(0)

    const containerRef = useRef(null)
    const objectRef = useRef(null)

    useEffect(() => {
        handleDynamicHeight(objectRef, setDynamicHeight)
    }, [])

    useEventListener(window, "resize", resizeHandler)
    useEventListener(window, "scroll", applyScrollListener)

    function applyScrollListener() {
        const offsetTop = -containerRef.current.offsetTop
        setTranslateX(offsetTop)
    }

    function resizeHandler() {
        handleDynamicHeight(objectRef, setDynamicHeight)
    }

    return <section
        className={"borderTop relative"}
        style={{ height: `${dynamicHeight}px` }}
    >
        <div
            ref={containerRef}
            className={"sticky top-0 flex overflow-hidden h-screen"}
        >
            <div
                ref={objectRef}
                style={{ transform: `translateX(${translateX}px)` }}>
                {header && <div
                    className={"borderBottom w-screen"}
                    style={{ transform: `translateX(${Math.abs(translateX)}px)` }}
                >
                    {header}
                </div>}

                {children}
            </div>
        </div>
    </section>

}
