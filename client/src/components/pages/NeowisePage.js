import { ContactShadows, HTML, OrbitControls, Stars } from "drei";
import React, { Suspense, useState } from "react";
import { animated } from "react-spring-three";
import { Canvas } from "react-three-fiber";
import SpaceShip from "../3D/SpaceShip";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import MakeMake from "../3D/Makemake";
import Sun from "../3D/Sun";
import { PerspectiveCamera } from "drei";
import Ceres from "../3D/Ceres";
import Europa from "../3D/Europa";
import Itokawa from "../3D/Itokawa";

function NeowisePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Canvas colorManagement camera={{ position: [0, 10, 20], fov: 70 }}>
      <ContactShadows
        opacity={1}
        width={1}
        height={1}
        blur={1}
        far={10}
        resolution={256}
      />
      <PerspectiveCamera />
      <pointLight castShadow intensity={5} position={[0, 0, -100]} />
      <hemisphereLight castShadow intensity={0.1} />
      <Suspense fallback={null}>
        <SpaceShip />
        <animated.group>
          <Itokawa position={[200, 0, 100]} scale={[0.06, 0.06, 0.06]} />
          <Europa position={[30, 0, -150]} />
          <Ceres position={[10, 0, 150]} scale={[0.02, 0.02, 0.02]} />
          <MakeMake
            scale={[0.02, 0.02, 0.02]}
            position={[-100, 0, 0]}
            speed={0.3}
          />

          <mesh scale={[0.03, 0.03, 0.03]} position={[0, 0, -100]}>
            <Sun />
          </mesh>
        </animated.group>
      </Suspense>

      <HTML position={[-3, 1, 0]}>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </HTML>
      <HTML prepend position={[7, 1, 10]}>
        <Button onClick={() => setModalOpen(!modalOpen)}>Click</Button>
      </HTML>
      {/* <FlyControls object={PerspectiveCamera} domElement={SpaceShip} /> */}

      <OrbitControls />
      <mesh scale={[2, 2, 2]}>
        <Stars />
      </mesh>
    </Canvas>
  );
}
export default NeowisePage;
