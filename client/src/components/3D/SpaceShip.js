import React, { useRef } from "react";
import neowise from "../../assets/scene.glb";
import { useGLTFLoader } from "drei";

const SpaceShip = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(neowise, true);

  return (
    <mesh position={[0, 0, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default SpaceShip;
