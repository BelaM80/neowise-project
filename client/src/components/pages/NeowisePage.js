import { HTML, OrbitControls, Stars } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import SpaceShip from "../3D/SpaceShip";
import Input from "../Input/Input";

const Div = styled.div`
  background-color: #fff;
  color: black;

  text-align: center;
  padding: 1rem 2rem;
  border-radius: 50rem;
  box-shadow: 0px 0px 15px 3px #fff;
`;

function NeowisePage() {
  return (
    <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <Suspense fallback={null}>
        <SpaceShip />
      </Suspense>
      <HTML prepend position={[7, 1, 1]}>
        <Input placeholder="Type a keyword like Earth"></Input>
      </HTML>
      <OrbitControls />
      <Stars />
    </Canvas>
  );
}
export default NeowisePage;
