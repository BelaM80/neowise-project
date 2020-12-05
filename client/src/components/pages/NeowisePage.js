import { HTML, OrbitControls, Stars } from "drei";
import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import SpaceShip from "../3D/SpaceShip";
import Card from "../Card/Card";
import Button from "../Button/Button";

function NeowisePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <Suspense fallback={null}>
        <SpaceShip />
      </Suspense>
      <HTML prepend position={[7, 1, 1]}>
        <Button onClick={() => setModalOpen(!modalOpen)}>Click</Button>
      </HTML>
      <HTML position={[-3, 1, 0]}>
        <Card modalOpen={modalOpen} />
      </HTML>
      <OrbitControls />
      <mesh scale={[2, 2, 2]}>
        <Stars />
      </mesh>
    </Canvas>
  );
}
export default NeowisePage;
