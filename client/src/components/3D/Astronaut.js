import React, { useRef, useState } from "react";
import { useGLTFLoader } from "drei";
import astronaut from "../../assets/astronaut.glb";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring-three";

const Astronaut = ({ position, scale }) => {
  const mesh = useRef(null);
  const gltf = useGLTFLoader(astronaut, true);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <animated.mesh
      onClick={() => setExpand(!expand)}
      {...props}
      position={position}
      scale={scale}
      castShadow
      speed={0.5}
    >
      <primitive object={gltf.scene} dispose={null} ref={mesh} />
    </animated.mesh>
  );
};

Astronaut.propTypes = {
  speed: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Astronaut;
