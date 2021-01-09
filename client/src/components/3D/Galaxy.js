import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import galaxy from "../../assets/galaxy.glb";
import PropTypes from "prop-types";

const Galaxy = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(galaxy, true);

  return (
    <mesh position={position} castShadow scale={scale}>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

Galaxy.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Galaxy;
