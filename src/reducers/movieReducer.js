import {
  OBTENER_PELICULA,
  OBTENER_PELICULAS,
  AGREGAR_FAVORITO,
  OBTENER_FAVORITOS,
} from "../types";

const initialState = {
  movies: [],
  movie: {},
  favoritos: [],
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
    case AGREGAR_FAVORITO:
      localStorage.setItem(
        "favoritos",
        JSON.stringify([...state.favoritos, action.payload])
      );
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    case OBTENER_FAVORITOS:
      return {
        ...state,
        favoritos: action.payload,
      };
    default:
      return state;
  }
}
