import {
  OBTENER_PELICULAS,
  OBTENER_PELICULA,
  AGREGAR_FAVORITO,
  OBTENER_FAVORITOS,
  QUITAR_FAVORITO,
} from "../types";

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

export function addFavorito(movie) {
  return (dispatch) => {
    dispatch(agregarFavorito(movie));
  };
}

const agregarFavorito = (movie) => {
  return {
    type: AGREGAR_FAVORITO,
    payload: movie,
  };
};

export function getFavoritos(favoritos) {
  return (dispatch) => {
    dispatch(obtenerFavoritos(favoritos));
  };
}
const obtenerFavoritos = (favoritos) => {
  return {
    type: OBTENER_FAVORITOS,
    payload: favoritos,
  };
};

export function deleteFavorito(id) {
  return (dispatch) => {
    dispatch(eliminarFavorito(id));
  };
}

const eliminarFavorito = (id) => {
  return {
    type: QUITAR_FAVORITO,
    payload: id,
  };
};
