import styled from "styled-components/macro";
import React from "react";
import PropTypes from "prop-types";
import InnerModalNews from "./InnerModalNews";

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

const ModalNews = ({ modalNewsOpen, setModalNewsOpen, spaceNews }) => {
  return (
    <>
      {modalNewsOpen ? (
        <ModalNewsContainer>
          <InnerModalNews
            key={spaceNews.docs[0]._id}
            title={spaceNews.docs[0].title}
          />
        </ModalNewsContainer>
      ) : null}
    </>
  );
};

ModalNews.propTypes = {
  modalNewsOpen: PropTypes.bool,
  setModalNewsOpen: PropTypes.func,
  spaceNews: PropTypes.object,
};

export default ModalNews;
