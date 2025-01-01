import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF("/forest/scene.gltf")
  return (
    <primitive
      object={earth.scene}
      scale={30}
      position-y={-1.75}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.2,
        far: 250,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />} />
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
    </Canvas>
  )
}

export default EarthCanvas
