import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Robo = () => {
  const earth = useGLTF("/robo1/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={3} color="white" groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={earth.scene}
        scale={1.5}
        position-y={-1.75}
        rotation-y={0}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const RobotCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.2,
        far: 250,
        position: [4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />} />
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Robo />
    </Canvas>
  )
}

export default RobotCanvas
