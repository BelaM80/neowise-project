import { ContactShadows, HTML, OrbitControls, Stars } from "drei";
import React, { Suspense, useEffect, useState } from "react";
import { animated } from "react-spring-three";
import { Canvas } from "react-three-fiber";
import PropTypes from "prop-types";
import { getNasaItems } from "../../utils/api";

import SpaceShip from "../3D/SpaceShip";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import MakeMake from "../3D/Makemake";
import Sun from "../3D/Sun";
import { PerspectiveCamera } from "drei";
import Ceres from "../3D/Ceres";
import Europa from "../3D/Europa";
import Itokawa from "../3D/Itokawa";

function NeowisePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [nasaItems, setNasaItems] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(null);

  async function loadNasaItems(search) {
    const nasa = await getNasaItems(search);
    setNasaItems(nasa);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
    setSearch("");
  };

  useEffect(() => {
    loadNasaItems();
  }, [query]);

  return (
    <Canvas colorManagement camera={{ position: [0, 10, 20], fov: 70 }}>
      <ContactShadows
        opacity={1}
        width={1}
        height={1}
        blur={1}
        far={10}
        resolution={256}
      />
      <PerspectiveCamera />
      <pointLight castShadow intensity={5} position={[0, 0, -100]} />
      <hemisphereLight castShadow intensity={0.1} />
      <Suspense fallback={null}>
        <SpaceShip />
        <animated.group>
          <Itokawa position={[200, 0, 100]} scale={[0.06, 0.06, 0.06]} />
          <Europa position={[30, 0, -150]} />
          <Ceres position={[10, 0, 150]} scale={[0.02, 0.02, 0.02]} />
          <MakeMake
            scale={[0.02, 0.02, 0.02]}
            position={[-100, 0, 0]}
            speed={0.3}
          />

          <mesh scale={[0.03, 0.03, 0.03]} position={[0, 0, -100]}>
            <Sun />
          </mesh>
        </animated.group>
      </Suspense>

      <HTML position={[-3, 5, 0]}>
        {nasaItems &&
          nasaItems.map((item) => (
            <Modal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              key={item.nasa_id}
              title={item.title}
              description={item.description}
              image={item.image}
              value={search}
              onSubmit={handleSubmit}
              onChange={handleChange}
            ></Modal>
          ))}
      </HTML>
      <HTML prepend position={[0, 1, -40]}>
        <Button onClick={() => setModalOpen(!modalOpen)}>Click</Button>
      </HTML>
      {/* <FlyControls object={PerspectiveCamera} domElement={SpaceShip} /> */}

      <OrbitControls />
      <mesh scale={[2, 2, 2]}>
        <Stars />
      </mesh>
    </Canvas>
  );
}
NeowisePage.propTypes = {
  data: PropTypes.node,
  map: PropTypes.func,
  title: PropTypes.string,
};

export default NeowisePage;
