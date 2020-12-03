import { OrbitControls } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Eros from "./Eros";

export default {
  title: "Component/3D",
  component: Eros,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 100 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <mesh scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]}>
        <Eros />
      </mesh>
    </Suspense>
    <OrbitControls />
  </Canvas>
);

export const eros = Template.bind({});
eros.args = {
  user: {},
};
