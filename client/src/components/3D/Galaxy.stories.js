import { OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Galaxy from "./Galaxy";

export default {
  title: "Component/3D",
  component: Galaxy,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <mesh scale={[4, 4, 4]} position={[0, 0, 0]}>
        <Galaxy />
      </mesh>
    </Suspense>
    <Stars />
    <OrbitControls />
  </Canvas>
);

export const galaxy = Template.bind({});
galaxy.args = {
  user: {},
};
