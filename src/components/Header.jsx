import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../actions/authActions";

const HeaderContainer = styled.header`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);
  a {
    color: var(--white);
    text-decoration: none;
  }
  .title {
    text-transform: uppercase;
  }
  nav {
    color: var(--white);
    margin-top: 1rem;
    ul {
      list-style: none;
      text-align: center;
      li {
        display: inline-block;
        cursor: pointer;
        margin-right: 1rem;
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: ${(props) => (props.token ? "space-between" : "center")};
    nav {
      margin-top: 0;
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  return (
    <HeaderContainer token={token}>
      <Link to="/" className="title">
        Aplicación peliculas
      </Link>
      {token && (
        <nav>
          <ul>
            <li>
              <Link to="/home">Now Playing</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/top-rated">Top Rated</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link to="/favorites">Mis favoritos</Link>
            </li>
            <li>
              <Link to="/profile">Mi perfil</Link>
            </li>
            <li onClick={() => dispatch(logout())}>Cerrar sesión</li>
          </ul>
        </nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
