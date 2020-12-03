import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import sun from "../../assets/Sun_1_1391000.glb";

const Sun = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(sun, true);
  return (
    <mesh position={[0, 0, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default Sun;
