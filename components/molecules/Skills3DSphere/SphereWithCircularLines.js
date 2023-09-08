import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useFrame, useThree } from "react-three-fiber"
import { Html } from "@react-three/drei"
import useEventListener from "hooks/useEventListener"
import { getRadiusBasedOnViewportSize } from "utils/3dUtils"
import styles from "./skills3dSphere.module.css"

function createCircularLineGeometry(radius, segments) {
  const geometry = new THREE.BufferGeometry()
  const vertices = []

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2
    const x = radius * Math.cos(theta)
    const z = radius * Math.sin(theta)
    vertices.push(x, 0, z)
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))
  return geometry
}

function SkillDot({ position, label, dotsGeometryArgs, dotColor }) {
  return <mesh position={position}>
    <sphereGeometry args={dotsGeometryArgs}/>
    <meshBasicMaterial color={dotColor}/>
    <Html>
      <div className={styles.skillLabel}>
        <span>{label}</span>
      </div>
    </Html>
  </mesh>
}

function SphereWithCircularLines({ initRadius, lineColor, dotsGeometryArgs, dotColor }) {
  const [radius, setRadius] = useState(initRadius)
  const groupRef = useRef()

  const { viewport } = useThree()

  useEventListener(window, "resize", handleResizeListener)

  useEffect(() => {
    handleResizeListener()
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.003
      groupRef.current.rotation.y += 0.003
      groupRef.current.rotation.z += 0.003
    }
  })

  function handleResizeListener() {
    const radiusBasedOnViewportSizeChange = getRadiusBasedOnViewportSize(viewport, initRadius)
    setRadius(radiusBasedOnViewportSizeChange || initRadius)
  }

  const circularLineGeometry = createCircularLineGeometry(radius, 64)

  return (
    <group ref={groupRef}>
      {/*<RotatingSphere />*/}

      <group rotation={[-Math.PI / 8, -Math.PI, Math.PI / 4]}>
        <line>
          <lineBasicMaterial color={lineColor} linewidth={2}/>
          <bufferGeometry attach="geometry" {...circularLineGeometry} />
        </line>

        <SkillDot
          position={[radius * Math.sin(45 * Math.PI / 180), 0, -radius * Math.sin(45 * Math.PI / 180)]}
          label={"Inclusive Design"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[radius * Math.sin(Math.PI / 6), 0, radius * Math.cos(Math.PI / 6)]}
          label={"XR & Metaverse"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[0, 0, -radius]}
          label={"Art & Creative Direction"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />
      </group>

      <group rotation={[-Math.PI / 6, Math.PI, -Math.PI / 3]}>
        <line>
          <lineBasicMaterial color={lineColor} linewidth={2}/>
          <bufferGeometry attach="geometry" {...circularLineGeometry} />
        </line>

        <SkillDot
          position={[-radius * Math.cos(Math.PI / 3), 0, -radius * Math.cos(Math.PI / 6)]}
          label={"Sustainability"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[-radius * Math.sin(Math.PI / 6), 0, radius * Math.cos(Math.PI / 6)]}
          label={"Craftsmanship"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[0, 0, radius]}
          label={"Art & Culture"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />
      </group>


      <group rotation={[Math.PI / 6, 0, 0]}>
        <line>
          <lineBasicMaterial color={lineColor} linewidth={2}/>
          <bufferGeometry attach="geometry" {...circularLineGeometry} />
        </line>

        <SkillDot
          position={[-radius * Math.cos(Math.PI / 3), 0, -radius * Math.cos(Math.PI / 6)]}
          label={"Design Thinking"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[-radius * Math.sin(Math.PI / 6), 0, radius * Math.cos(Math.PI / 6)]}
          label={"Brand Strategy"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[radius, 0, -Math.sin(Math.PI / 16)]}
          label={"Market Research"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <line>
          <lineBasicMaterial color={lineColor} linewidth={2}/>
          <bufferGeometry attach="geometry" {...circularLineGeometry} />
        </line>

        <SkillDot
          position={[radius * Math.sin(45 * Math.PI / 180), 0, -radius * Math.sin(45 * Math.PI / 180)]}
          label={"Digital Creation"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[radius * Math.sin(Math.PI / 6), 0, radius * Math.cos(Math.PI / 6)]}
          label={"3d Design"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[0, 0, -radius]}
          label={"Generative AI"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />

        <SkillDot
          position={[0, 0, -radius]}
          label={"Product Development"}
          dotsGeometryArgs={dotsGeometryArgs}
          dotColor={dotColor}
        />
      </group>
    </group>
  )
}

export default SphereWithCircularLines
