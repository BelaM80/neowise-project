import { OrbitControls } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import SpaceShip from "./SpaceShip";

export default {
  title: "Component/3D",
  component: SpaceShip,
};

const Template = () => (
  <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
    <directionalLight position={[0, 10, 0]} intensity={0.5} />
    <Suspense fallback={null}>
      <SpaceShip />
    </Suspense>
    <OrbitControls />
  </Canvas>
);

export const spaceShip = Template.bind({});
spaceShip.args = {
  user: {},
};
