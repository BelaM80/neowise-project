import { OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Ceres from "./Ceres";

export default {
  title: "Component/3D",
  component: Ceres,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <mesh scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]}>
        <Ceres />
      </mesh>
    </Suspense>
    <Stars />
    <OrbitControls />
  </Canvas>
);

export const ceres = Template.bind({});
ceres.args = {
  user: {},
};
