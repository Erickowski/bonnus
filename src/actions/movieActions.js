import { OBTENER_PELICULAS, OBTENER_PELICULA } from "../types";

export function getPeliculas(movies) {
  return (dispatch) => {
    dispatch(peliculas(movies));
  };
}

const peliculas = (movies) => {
  return {
    type: OBTENER_PELICULAS,
    payload: movies,
  };
};

export function getPelicula(movie) {
  return (dispatch) => {
    dispatch(pelicula(movie));
  };
}

const pelicula = (movie) => {
  return {
    type: OBTENER_PELICULA,
    payload: movie,
  };
};
