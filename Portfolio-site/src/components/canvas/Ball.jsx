import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ isMobile, iconPath }) => {
  const icon = useGLTF(iconPath);
  const iconRef = useRef(null);

  useFrame(() => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow>
        <primitive
          ref={iconRef}
          object={icon.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={[0, 0, 0.05]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ iconPath }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} enableRotate={true} enablePan={false} />
        <Ball iconPath={iconPath} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

