// import React from "react";
// // import Header from "../Header/Header";
// //import Container from "../Container";
// import { Canvas } from "react-three-fiber";
// //import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2.js";
// //import neowise from "../../assets/Neowise.obj";
// import { HTML, RoundedBox } from "drei";

// function NeowisePage() {
//   return (
//     <Canvas colorManagement camera={{ position: [0, 0, 20], fov: 70 }}>
//       <RoundedBox args={[5, 5, 5]} radius={0.05} smoothness={4}>
//         <meshPhongMaterial attach="material" color="#f3f3f3" />
//       </RoundedBox>

//       <HTML fullscreen>
//         <div>
//           <h1>Hello</h1>
//         </div>
//       </HTML>
//     </Canvas>
//   );
// }
// export default NeowisePage;
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import PropTypes from "prop-types";
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
import { useSpring, animated } from "react-spring-three";
import GlobalStyle from "../../GlobalStyle";

softShadows();

const SpinningMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <animated.mesh
      onClick={() => setExpand(!expand)}
      {...props}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        factor={0.6}
        speed={speed}
      />
    </animated.mesh>
  );
};
SpinningMesh.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

function NeowisePage() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 70 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <SpinningMesh
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightblue"
            speed={2}
          />
          <SpinningMesh position={[-2, 1, -5]} color="pink" speed={6} />
          <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} />
        </group>

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default NeowisePage;
