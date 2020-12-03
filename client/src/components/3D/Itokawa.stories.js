import { OrbitControls } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Itokawa from "./Itokawa";

export default {
  title: "Component/3D",
  component: Itokawa,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <Itokawa />
    </Suspense>
    <OrbitControls />
  </Canvas>
);

export const itokawa = Template.bind({});
itokawa.args = {
  user: {},
};
