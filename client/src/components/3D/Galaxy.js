import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import galaxy from "../../assets/galaxy.glb";
// import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";

const Galaxy = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(galaxy, true);
  //   useFrame(() => {
  //     mesh.current.rotation.y += 0.01;
  //   });
  return (
    <mesh position={position} castShadow scale={scale}>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

Galaxy.propTypes = {
  speed: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Galaxy;
