import { PELICULAS_NOWPLAYING } from "../types";

const initialState = {
  movies: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case PELICULAS_NOWPLAYING:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
}
