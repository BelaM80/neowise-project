import React, { useRef, useState } from "react";
import neowise from "../../assets/Neo.glb";
import { useGLTFLoader } from "drei";
import { animated } from "react-spring-three";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";

const SpaceShip = ({ position, scale }) => {
  const [shipPosition, setShipPosition] = useState(null);

  const mesh = useRef(null);
  const gltf = useGLTFLoader(neowise, true);
  useFrame(({ mouse }) => {
    setShipPosition({
      position: { x: mouse.x * 120, y: mouse.y * 120 },
    });
    mesh.current.rotation.y += 0.01;
  });

  useFrame(() => {
    mesh.current.position.y = shipPosition.position.y;
    mesh.current.position.x = -shipPosition.position.x;
  });

  return (
    <animated.mesh ref={mesh} position={position} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} scale={scale} />
    </animated.mesh>
  );
};

SpaceShip.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SpaceShip;
