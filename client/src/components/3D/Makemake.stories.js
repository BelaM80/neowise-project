import { OrbitControls } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import MakeMake from "./Makemake";

export default {
  title: "Component/3D",
  component: MakeMake,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <MakeMake />
    </Suspense>
    <OrbitControls />
  </Canvas>
);

export const makemake = Template.bind({});
makemake.args = {
  user: {},
};
