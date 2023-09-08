import { useEffect, useState } from "react"

export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    },
    { rootMargin: "-400px" }
  )

  useEffect(() => {
    observer?.observe(ref.current)

    return () => {
      observer?.disconnect()
    }
  }, [])

  return isIntersecting
}
