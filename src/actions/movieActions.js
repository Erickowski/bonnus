import { PELICULAS_NOWPLAYING } from "../types";

export function getPeliculasNowPlaying(movies) {
  return (dispatch) => {
    dispatch(peliculasNowPlatying(movies));
  };
}

const peliculasNowPlatying = (movies) => {
  return {
    type: PELICULAS_NOWPLAYING,
    payload: movies,
  };
};
