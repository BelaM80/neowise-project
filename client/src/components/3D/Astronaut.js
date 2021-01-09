import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import astronaut from "../../assets/astronaut.glb";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";

const Astronaut = ({ position, scale, speed }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(astronaut, true);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh position={position} scale={scale} castShadow speed={speed}>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

Astronaut.propTypes = {
  speed: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Astronaut;
