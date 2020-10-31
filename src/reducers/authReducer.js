import { AUTH_USUARIO, CERRAR_SESION } from "../types";

const initialState = {
  usuario: JSON.parse(localStorage.getItem("usuario")),
  token: localStorage.getItem("token"),
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USUARIO:
      return {
        ...state,
        token: action.payload.token,
        usuario: action.payload.usuario,
      };
    case CERRAR_SESION:
      return {
        ...state,
        token: null,
        usuario: null,
      };
    default:
      return state;
  }
}
