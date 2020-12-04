import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import eros from "../../assets/Eros_1_10.glb";

const Eros = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(eros, true);
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default Eros;
