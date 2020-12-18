import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import sunsystem from "../../assets/scene1.glb";

const Sunsystem = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(sunsystem, true);
  return (
    <mesh position={[0, 0, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default Sunsystem;
