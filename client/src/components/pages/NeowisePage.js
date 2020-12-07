import { FlyControls, HTML, OrbitControls, Stars } from "drei";
import React, { Suspense, useState } from "react";
import { animated } from "react-spring-three";
import { Canvas } from "react-three-fiber";
import SpaceShip from "../3D/SpaceShip";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import MakeMake from "../3D/Makemake";
import Sun from "../3D/Sun";
import { PerspectiveCamera } from "drei";

function NeowisePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Canvas colorManagement>
      <PerspectiveCamera camera={{ position: [0, 2, 10], fov: 70 }} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <hemisphereLight />
      <Suspense fallback={null}>
        <SpaceShip />
        <animated.group>
          <mesh scale={[0.02, 0.02, 0.02]} position={[-100, 0, 0]} speed={0.3}>
            <MakeMake />
          </mesh>
          <mesh scale={[0.03, 0.03, 0.03]} position={[0, 0, -100]}>
            <Sun />
          </mesh>
        </animated.group>
      </Suspense>

      <HTML prepend position={[7, 1, 1]}>
        <Button onClick={() => setModalOpen(!modalOpen)}>Click</Button>
      </HTML>
      <HTML position={[-3, 1, 0]}>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </HTML>
      <FlyControls object={PerspectiveCamera} domElement={SpaceShip} />
      <OrbitControls />
      <mesh scale={[2, 2, 2]}>
        <Stars />
      </mesh>
    </Canvas>
  );
}
export default NeowisePage;
