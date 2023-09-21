import { useEffect, useState } from "react"

export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    },
    { rootMargin: `-${window.screen.height/3}px` }
  )


  useEffect(() => {
    observer?.observe(ref.current)

    return () => {
      observer?.disconnect()
    }
  }, [])

  return isIntersecting
}
