import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import makemake from "../../assets/Makemake_1_1430.glb";

const MakeMake = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(makemake, true);
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default MakeMake;
