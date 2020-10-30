import { AUTH_USUARIO } from "../types";

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
    default:
      return state;
  }
}
