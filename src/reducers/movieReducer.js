import { OBTENER_PELICULA, OBTENER_PELICULAS } from "../types";

const initialState = {
  movies: [],
  movie: {},
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PELICULAS:
      return {
        ...state,
        movie: {},
        movies: action.payload,
      };
    case OBTENER_PELICULA:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}
