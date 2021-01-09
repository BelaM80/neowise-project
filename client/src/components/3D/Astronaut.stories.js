import { OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Astronaut from "./Astronaut";

export default {
  title: "Component/3D",
  component: Astronaut,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <mesh position={[0, 0, 0]}>
        <Astronaut />
      </mesh>
    </Suspense>
    <Stars />
    <OrbitControls />
  </Canvas>
);

export const astronaut = Template.bind({});
astronaut.args = {
  user: {},
};
