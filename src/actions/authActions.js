import { AUTH_USUARIO, CERRAR_SESION } from "../types";

export function autenticarUsuario(token, usuario) {
  return (dispatch) => {
    dispatch(logearUsuario(token, usuario));
  };
}

const logearUsuario = (token, usuario) => {
  localStorage.setItem("token", token);
  localStorage.setItem("usuario", JSON.stringify(usuario));
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
  localStorage.removeItem("usuario");
  localStorage.removeItem("favoritos");
  return {
    type: CERRAR_SESION,
  };
};

export function getUsuario() {}
