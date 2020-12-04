import { HTML, OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import SpaceShip from "../3D/SpaceShip";
import Input from "../Input/Input";

function NeowisePage() {
  return (
    <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <Suspense fallback={null}>
        <SpaceShip />
      </Suspense>
      <HTML prepend position={[7, 1, 1]}>
        <Input placeholder="Type a keyword like Earth"></Input>
      </HTML>
      <OrbitControls />
      <mesh scale={[2, 2, 2]}>
        <Stars />
      </mesh>
    </Canvas>
  );
}
export default NeowisePage;
