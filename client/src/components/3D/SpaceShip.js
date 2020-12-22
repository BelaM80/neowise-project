import React, { useRef } from "react";
import neowise from "../../assets/Neo.glb";
import { useGLTFLoader } from "drei";
import { animated } from "react-spring-three";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";

const SpaceShip = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(neowise, true);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <animated.mesh position={position} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} scale={scale} />
    </animated.mesh>
  );
};

SpaceShip.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SpaceShip;
