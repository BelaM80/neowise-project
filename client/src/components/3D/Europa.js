import React, { useRef } from "react";
import { useGLTFLoader } from "drei";
import europa from "../../assets/Europa_Clipper.glb";
import Proptypes from "prop-types";

const Europa = ({ position }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(europa, true);
  return (
    <mesh position={position} castShadow>
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </mesh>
  );
};

Europa.propTypes = {
  position: Proptypes.arrayOf(Proptypes.number).isRequired,
};

export default Europa;
