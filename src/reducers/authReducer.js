import { AUTH_USUARIO, CERRAR_SESION } from "../types";

const initialState = {
  token: localStorage.getItem("token"),
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USUARIO:
      return {
        ...state,
        token: action.payload,
      };
    case CERRAR_SESION:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}
