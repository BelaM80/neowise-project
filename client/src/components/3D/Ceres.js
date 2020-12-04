import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import ceres from "../../assets/Ceres_1_1000.glb";

const Ceres = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(ceres, true);
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

export default Ceres;
