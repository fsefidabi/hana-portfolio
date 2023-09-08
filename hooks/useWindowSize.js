"use client"

import { useState } from 'react'
import useEventListener from "./useEventListener"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  function handleSize () {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEventListener(window, 'resize', handleSize)

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}
