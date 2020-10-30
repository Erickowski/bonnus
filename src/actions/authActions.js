import { AUTH_USUARIO, CERRAR_SESION } from "../types";

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

export function logout() {
  return (dispatch) => {
    dispatch(cerrarSesion());
  };
}

const cerrarSesion = () => {
  localStorage.removeItem("token");
  return {
    type: CERRAR_SESION,
  };
};
