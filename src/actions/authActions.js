import { AUTH_USUARIO, CERRAR_SESION } from "../types";

export function autenticarUsuario(token, usuario) {
  return (dispatch) => {
    dispatch(logearUsuario(token, usuario));
  };
}

const logearUsuario = (token, usuario) => {
  localStorage.setItem("token", token);
  return {
    type: AUTH_USUARIO,
    payload: {
      token: token,
      usuario: usuario,
    },
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
