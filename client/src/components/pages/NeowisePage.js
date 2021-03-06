import { ContactShadows, HTML, OrbitControls, Stars } from "drei";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import {
  getNasaItems,
  getNasaPicture,
  getSpaceflightNews,
} from "../../utils/api";

import SpaceShip from "../3D/SpaceShip";
import Modal from "../Modal/Modal";
import ModalDay from "../ModalDay/ModalDay";
import ModalNews from "../ModalNews/ModalNews";
import Button from "../Button/Button";
import Sun from "../3D/Sun";

import Sunsystem from "../3D/Sunsystem";
import Galaxy from "../3D/Galaxy";
import Astronaut from "../3D/Astronaut";

function NeowisePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDayOpen, setModalDayOpen] = useState(false);
  const [nasaItems, setNasaItems] = useState(null);
  const [nasaPic, setNasaPic] = useState(null);
  const [search, setSearch] = useState("");
  const [searchDay, setSearchDay] = useState("");
  const [ShowLazyButton, setShowLazyButton] = useState(false);
  const [newsItems, setNewsItems] = useState(null);
  const [modalNewsOpen, setModalNewsOpen] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDayChange = (e) => {
    setSearchDay(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search) {
      return null;
    }
    const nasa = await getNasaItems(search);
    setNasaItems(nasa);
  };

  const handleDaySubmit = async (e) => {
    e.preventDefault();

    if (!searchDay) {
      return null;
    }
    const pic = await getNasaPicture(searchDay);
    setNasaPic(pic);
  };

  const handleNewsSubmit = async (e) => {
    e.preventDefault();

    const news = await getSpaceflightNews(newsItems);
    setNewsItems(news);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowLazyButton(true), 2500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Canvas colorManagement camera={{ position: [-40, 10, -100], fov: 70 }}>
        <ContactShadows
          opacity={1}
          width={1}
          height={1}
          blur={1}
          far={10}
          resolution={256}
        />
        <hemisphereLight castShadow intensity={0.1} />
        <Suspense
          fallback={
            <HTML position={[0, 0, 0]}>
              <h1>Loading...</h1>
            </HTML>
          }
        >
          <Galaxy position={[-500, 300, 0]} />
          <Astronaut position={[100, 20, 100]} />
          <SpaceShip position={[0, 10, -50]} scale={[2, 2, 2]} />

          <Sunsystem />

          <mesh scale={[0.03, 0.03, 0.03]} position={[0, 0, 0]}>
            <Sun />
          </mesh>
        </Suspense>
        <HTML position={[100, 60, 0]}>
          <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            nasaItems={nasaItems}
            input={search}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </HTML>
        <HTML prepend position={[0, 1, -40]}>
          {ShowLazyButton && (
            <Button onClick={() => setModalOpen(!modalOpen)}>QUERY</Button>
          )}
        </HTML>
        <HTML position={[100, 60, 0]}>
          <ModalDay
            modalDayOpen={modalDayOpen}
            setModalDayOpen={setModalDayOpen}
            nasaPic={nasaPic}
            input={searchDay}
            onSubmit={handleDaySubmit}
            onChange={handleDayChange}
          />
        </HTML>
        <HTML prepend position={[-100, 1, -100]}>
          {ShowLazyButton && (
            <Button onClick={() => setModalDayOpen(!modalDayOpen)}>APOD</Button>
          )}
        </HTML>
        <HTML position={[100, 60, 0]}>
          <ModalNews
            modalNewsOpen={modalNewsOpen}
            setModalNewsOpen={setModalNewsOpen}
            spaceNews={newsItems}
            onSubmit={handleNewsSubmit}
          />
        </HTML>
        <HTML prepend position={[-50, 1, -100]}>
          {ShowLazyButton && (
            <Button onClick={() => setModalNewsOpen(!modalNewsOpen)}>
              NEWS
            </Button>
          )}
        </HTML>

        <OrbitControls />
        <mesh scale={[2, 2, 2]}>
          <Stars />
        </mesh>
      </Canvas>
    </>
  );
}

export default NeowisePage;
