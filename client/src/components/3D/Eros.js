import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import eros from "../../assets/Eros_1_10.glb";
import PropTypes from "prop-types";

const Eros = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(eros, true);
  return (
    <mesh position={position} scale={scale} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};
Eros.propTypes = {
  speed: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Eros;
