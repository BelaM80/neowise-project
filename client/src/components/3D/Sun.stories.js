import { OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Sun from "./Sun";

export default {
  title: "Component/3D",
  component: Sun,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <mesh scale={[0.2, 0.2, 0.2]} position={[0, 0, 0]}>
        <Sun />
      </mesh>
    </Suspense>
    <mesh scale={[2, 2, 2]}>
      <Stars />
    </mesh>
    <OrbitControls />
  </Canvas>
);

export const sun = Template.bind({});
sun.args = {
  user: {},
};
