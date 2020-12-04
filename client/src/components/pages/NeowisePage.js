import { HTML, OrbitControls, Stars } from "drei";
import React, { Suspense, useContext } from "react";
import { Canvas } from "react-three-fiber";
import SpaceShip from "../3D/SpaceShip";
import Card from "../Card/Card";
import Button from "../Button/Button";

function NeowisePage() {
  return (
    <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <Suspense fallback={null}>
        <SpaceShip />
      </Suspense>
      <HTML prepend position={[7, 1, 1]}>
        <Button>Click</Button>
      </HTML>
      <OrbitControls />
      <mesh scale={[2, 2, 2]}>
        <Stars />
      </mesh>
    </Canvas>
  );
}
export default NeowisePage;
