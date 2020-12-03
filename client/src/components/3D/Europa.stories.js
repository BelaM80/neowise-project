import { OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Europa from "./Europa";

export default {
  title: "Component/3D",
  component: Europa,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <Europa />
    </Suspense>
    <Stars />
    <OrbitControls />
  </Canvas>
);

export const europa = Template.bind({});
europa.args = {
  user: {},
};
