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
    <directionalLight position={[0, 10, 0]} intensity={0.8} />
    <Suspense fallback={null}>
      <mesh scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]}>
        <Itokawa />
      </mesh>
    </Suspense>
    <OrbitControls />
  </Canvas>
);

export const itokawa = Template.bind({});
itokawa.args = {
  user: {},
};
