import React from "react";
import styled from "styled-components";

const Card = ({ children }) => {
  return <CardDiv>{children}</CardDiv>;
};

const CardDiv = styled.div`
  width: 250px;
  height: 180px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: 0.3s;
  position: relative;

  &:hover {
    /* transform:  scale() */
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }
`;

export default Card;
