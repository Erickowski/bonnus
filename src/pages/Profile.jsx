import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProfileContainer = styled.main`
  min-height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--black);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.25rem solid var(--blue);
    border-radius: 1rem;
    padding: 2rem 1rem;
  }
`;

const Profile = () => {
  const history = useHistory();

  const usuario = useSelector((state) => state.auth.usuario);

  if (!usuario) {
    history.push("/");
  }

  useEffect(() => {}, []);

  return (
    <ProfileContainer>
      <h1>Mi perfil</h1>
      <div>
        <img src={usuario.imagen} alt="Imagen usuario" />
        <h2>{usuario.nombre}</h2>
        <p>{usuario.email}</p>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
