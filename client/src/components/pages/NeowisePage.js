import { OrbitControls } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import SpaceShip from "../3D/SpaceShip";
const CanvasStyled = styled(Canvas)`
  height: 100vh;
`;

function NeowisePage() {
  return (
    <CanvasStyled colorManagement camera={{ position: [-5, 2, 10], fov: 70 }}>
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      <Suspense fallback={null}>
        <SpaceShip />
      </Suspense>

      <OrbitControls />
    </CanvasStyled>
  );
}
export default NeowisePage;
