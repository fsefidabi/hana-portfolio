import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { MAX_SECTION_WIDTH } from "constants/index.js"
import useEventListener from "hooks/useEventListener"
import { getObjectHeight, getRadiusBasedOnViewportSize } from "utils/3dUtils"

function BufferGeometry({ radius }) {
  const segments = 256

  const borderGeometry = new THREE.BufferGeometry().setFromPoints(
    Array.from({ length: segments + 1 }, (_, index) => {
      const angle = (index / segments) * Math.PI * 2
      const x = Math.cos(angle) * (radius)
      const y = Math.sin(angle) * (radius)
      return new THREE.Vector3(x, y, 0)
    })
  )

  return <bufferGeometry attach="geometry" {...borderGeometry} />
}

function DashedBorderCircle({ initRadius, color }) {
  const [radius, setRadius] = useState(initRadius)
  const lineRef = useRef()

  const { viewport } = useThree()

  useEventListener(window, "resize", handleResizeListener)

  useEffect(() => {
    handleResizeListener()
  }, [])

  useEffect(() => {
    if (!lineRef.current) return
    const objectHeight = getObjectHeight(lineRef)
    if (!objectHeight) return
    const aboutSkill3DElement = document.getElementById("about_skills_3d")
    aboutSkill3DElement.style.height = (objectHeight * Math.min(window.innerWidth, MAX_SECTION_WIDTH)) / 10 + 50 + "px"
  }, [lineRef.current])


  useFrame(() => {
    if (lineRef.current) {
      lineRef.current.rotation.z += 0.001
    }
  })

  function handleResizeListener() {
    const radiusBasedOnViewportSizeChange = getRadiusBasedOnViewportSize(viewport, initRadius)
    setRadius(radiusBasedOnViewportSizeChange || initRadius)
  }

  return <lineSegments ref={lineRef} onMouseMove={e => e.stopPropagation()}>
    <lineBasicMaterial color={color}/>
    <BufferGeometry radius={radius}/>
  </lineSegments>
}

export default DashedBorderCircle
