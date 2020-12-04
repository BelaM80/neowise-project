import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import itokawa from "../../assets/Itokawa_1_1.glb";

const Itokawa = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(itokawa, true);
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default Itokawa;
