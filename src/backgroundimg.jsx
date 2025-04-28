"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
  })
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
};

const BackgroundImage = () => (
  <div className="fixed inset-0 w-full h-screen -z-10" style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: -10 }}>
    <Canvas camera={{position: [0, 0, 1]}} style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
)

export default BackgroundImage;