import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import sunsystem from "../../assets/sunsystem.glb";
import { animated } from "react-spring-three";
import { useFrame } from "react-three-fiber";

const Sunsystem = () => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(sunsystem, true);
  useFrame(() => {
    mesh.current.rotation.y += 0.0007;
  });
  return (
    <animated.mesh position={[0, 0, 0]} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </animated.mesh>
  );
};

export default Sunsystem;
