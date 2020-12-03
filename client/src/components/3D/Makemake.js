import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import makemake from "../../assets/Makemake_1_1430.glb";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";
import { animated } from "react-spring-three";

const MakeMake = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(makemake, true);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <animated.mesh position={position} castShadow speed={0.3} scale={scale}>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </animated.mesh>
  );
};

MakeMake.propTypes = {
  speed: PropTypes.number.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MakeMake;
