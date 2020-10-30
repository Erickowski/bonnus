import { AUTH_USUARIO } from "../types";

export function autenticarUsuario(token) {
  return (dispatch) => {
    dispatch(crearToken(token));
  };
}

const crearToken = (token) => {
  localStorage.setItem("token", token);
  return {
    type: AUTH_USUARIO,
    payload: token,
  };
};

// localStorage.removeItem("token");
