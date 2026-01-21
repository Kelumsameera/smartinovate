"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import { useRef } from "react";

function ProductBox() {
  const mesh = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (!mesh.current) return;

    const r = scroll.offset; // 0 → 1

    // Reveal animation
    mesh.current.rotation.y = r * Math.PI * 2;
    mesh.current.rotation.x = r * 0.3;
    mesh.current.position.z = 6 - r * 4;
    mesh.current.scale.setScalar(0.6 + r * 0.6);
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 1.2, 0.4]} />
      <meshStandardMaterial
        color="#58d58d"
        metalness={0.8}
        roughness={0.25}
      />
    </mesh>
  );
}

export default function ProductReveal3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <spotLight position={[-5, 5, 5]} intensity={1} />

        <ScrollControls pages={2} damping={0.25}>
          <ProductBox />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
