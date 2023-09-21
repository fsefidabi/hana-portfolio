import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import DashedBorderCircle from "./DashedBorderCircle"
import SphereWithCircularLines from "./SphereWithCircularLines"

const RADIUS = 3.2
const SOLID_CIRCULAR_LINE_COLOR = "white"
const SKILL_DOT_COLOR = "white"
const OUTER_CIRCLE_COLOR = "#d35d3d"
const SKILLS_DOTS_GEOMETRY_ARGS = [0.03, 32, 32]

// function RotatingSphere() {
//   const sphereRef = useRef()
//
//   useFrame(() => {
//     if (sphereRef.current) {
//       sphereRef.current.rotation.x += 0.004
//       sphereRef.current.rotation.y += 0.004
//       sphereRef.current.rotation.z += 0.004
//     }
//   })
//
//   return <mesh ref={sphereRef} position={[0, 0, 0]}>
//     <meshBasicMaterial attach="material" color="blue" wireframe={true}/>
//     <sphereGeometry attach={"geometry"} args={[2.5, 32, 32]} wireframe={true}/>
//   </mesh>
// }

function Skills3DSphere() {
  return (
    <div className={"relative w-full"}>
      <Canvas
        camera={{ zoom: 20, position: [0, 0, 100] }}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <DashedBorderCircle
          initRadius={RADIUS}
          color={OUTER_CIRCLE_COLOR}
        />
      </Canvas>
      <Canvas camera={{ zoom: 20, position: [0, 0, 100] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        <SphereWithCircularLines
          initRadius={RADIUS}
          lineColor={SOLID_CIRCULAR_LINE_COLOR}
          dotsGeometryArgs={SKILLS_DOTS_GEOMETRY_ARGS}
          dotColor={SKILL_DOT_COLOR}
        />
      </Canvas>
    </div>
  )
}

export default Skills3DSphere
