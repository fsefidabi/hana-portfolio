import { useEffect, useId, useRef, useState } from "react"
import useEventListener from "hooks/useEventListener"

function calcDynamicHeight(objectWidth) {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  return objectWidth - windowWidth + windowHeight + 150
}

export default function Carousel({ id = useId(), header, children }) {
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const [translateX, setTranslateX] = useState(0)

  const containerRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    handleDynamicHeight(carouselRef)
  }, [])

  useEventListener(window, "resize", handlePageResize)
  useEventListener(window, "scroll", handlePageScroll)

  function handleDynamicHeight(ref) {
    const objectWidth = ref.current.scrollWidth
    const dynamicHeight = calcDynamicHeight(objectWidth)
    setDynamicHeight(dynamicHeight)
  }

  function handlePageResize() {
    handleDynamicHeight(carouselRef)
  }

  function handlePageScroll() {
    const offsetTop = -containerRef.current.offsetTop
    setTranslateX(offsetTop)
  }

  return <section
    id={id}
    className={"borderTop relative"}
    style={{ height: `${dynamicHeight}px` }}
  >
    <div
      ref={containerRef}
      className={"sticky top-0 flex overflow-hidden h-screen"}
    >
      <div
        ref={carouselRef}
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
