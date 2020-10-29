import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  background-color: var(--blue);
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: var(--white);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Aplicación peliculas</Link>
    </HeaderContainer>
  );
};

export default Header;
