import styled from "styled-components/macro";
import React from "react";
import PropTypes from "prop-types";
import InnerModalNews from "./InnerModalNews";
import HeaderModalNews from "./HeaderModalNews";

const ModalNewsContainer = styled.div`
  width: 600px;
  background-color: #fff;
  color: #010a26;
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 3px #fff;
  max-height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalNews = ({
  modalNewsOpen,
  setModalNewsOpen,
  spaceNews,
  onSubmit,
}) => {
  return (
    <>
      {modalNewsOpen ? (
        <ModalNewsContainer>
          {HeaderModalNews(setModalNewsOpen, modalNewsOpen, onSubmit)}
          {spaceNews?.map((items) => (
            <InnerModalNews
              key={items.id}
              title={items.title}
              date={items.publishedAt}
              article={items.url}
              imageSrc={items.imageUrl}
              source={items.newsSite}
            />
          ))}
        </ModalNewsContainer>
      ) : null}
    </>
  );
};

ModalNews.propTypes = {
  modalNewsOpen: PropTypes.bool,
  setModalNewsOpen: PropTypes.func,
  spaceNews: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ModalNews;
