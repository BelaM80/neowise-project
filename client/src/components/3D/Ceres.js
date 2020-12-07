import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import ceres from "../../assets/Ceres_1_1000.glb";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";

const Ceres = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(ceres, true);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh position={position} castShadow speed={0.3} scale={scale}>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

Ceres.propTypes = {
  speed: PropTypes.number.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Ceres;
