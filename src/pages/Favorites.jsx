import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { MoviesContainer } from "../components/ui/MoviesContainer";

import Movie from "../components/Movie";

const Favorites = () => {
  const history = useHistory();

  const token = useSelector((state) => state.auth.token);
  const favoritos = useSelector((state) => state.movies.favoritos);

  if (!token) {
    history.push("/");
  }
  return (
    <MoviesContainer>
      <h1>Mis favoritos</h1>
      <div>
        {favoritos.length === 0 ? (
          <p>Aún no tienes peliculas favoritas, ve a agragar una.</p>
        ) : (
          favoritos.map((movie) => <Movie key={movie.id} movie={movie} />)
        )}
      </div>
    </MoviesContainer>
  );
};

export default Favorites;
