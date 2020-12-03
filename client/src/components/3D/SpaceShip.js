import React, { useRef } from "react";
import neowise from "../../assets/scene.glb";
import { useGLTFLoader } from "drei";

const SpaceShip = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(neowise, true);
  console.log(gltf);
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default SpaceShip;
