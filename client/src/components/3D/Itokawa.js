import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import itokawa from "../../assets/Itokawa_1_1.glb";
import { animated } from "react-spring-three";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";

const Itokawa = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(itokawa, true);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <animated.mesh position={position} castShadow speed={0.5} scale={scale}>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </animated.mesh>
  );
};

Itokawa.propTypes = {
  speed: PropTypes.number.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Itokawa;
