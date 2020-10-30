import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../actions/authActions";

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 1rem;
  display: flex;
  justify-content: ${(props) => (props.token ? "space-between" : "center")};
  background-color: var(--blue);
  a {
    color: var(--white);
    text-transform: uppercase;
    text-decoration: none;
  }
  nav {
    color: var(--white);
    ul {
      list-style: none;
      li {
        cursor: pointer;
      }
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  return (
    <HeaderContainer token={token}>
      <Link to="/">Aplicación peliculas</Link>
      {token && (
        <nav>
          <ul>
            <li onClick={() => dispatch(logout())}>Cerrar sesión</li>
          </ul>
        </nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
