import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import europa from "../../assets/Europa_Clipper.glb";

const Europa = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(europa, true);
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default Europa;
