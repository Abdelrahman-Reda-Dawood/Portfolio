"use client";

// Suspense to handle the loading of the 3D assets while they're being loaded
import { useState, useRef, Suspense } from "react";
// Bridge between React and Three.js
// {useFrame} to update the rotation of the stars
import { Canvas, useFrame } from "@react-three/fiber";
// {Points} to render the points as a 3D object
// {PointMaterial} to define the appearance of the points, including their color, size, and transparency
import { Points, PointMaterial } from "@react-three/drei";
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  // To Generate a set of random points in a sphere
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
export default StarsCanvas;
