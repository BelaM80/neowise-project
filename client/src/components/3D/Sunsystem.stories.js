import { OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Sunsystem from "./Sunsystem";

export default {
  title: "Component/3D",
  component: Sunsystem,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, -30], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <mesh scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]}>
        <Sunsystem />
      </mesh>
    </Suspense>
    <mesh scale={[2, 2, 2]}>
      <Stars />
    </mesh>
    <OrbitControls />
  </Canvas>
);

export const sunsystem = Template.bind({});
sunsystem.args = {
  user: {},
};
