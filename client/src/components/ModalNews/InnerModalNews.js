import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Frame = styled.div`
  margin-top: 1rem;
  border-radius: 28px;
  box-shadow: 0px 0px 15px 3px #c9edff;

  div {
    padding: 0.6rem;
  }
  img {
    max-width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  a {
    text-decoration: none;
    color: #0476d9;
  }
`;

const InnerModalNews = ({ title, date, article, imageSrc, source }) => {
  return (
    <>
      <Frame>
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <img src={imageSrc} alt={title} />
          <a href={article} target="_blank" rel="noreferrer">
            Read full article!
          </a>
          <p>Source: {source}</p>
        </div>
      </Frame>
    </>
  );
};
InnerModalNews.propTypes = {
  title: PropTypes.string,
  explanation: PropTypes.string,
  imageSrc: PropTypes.node,
  date: PropTypes.string,
  article: PropTypes.string,
  source: PropTypes.string,
};
export default InnerModalNews;
