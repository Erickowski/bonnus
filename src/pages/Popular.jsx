import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import { getPeliculasNowPlaying } from "../actions/movieActions";

import Movie from "../components/Movie";
import Loader from "../components/Loader";
import { MoviesContainer } from "../components/ui/MoviesContainer";

const Popular = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const movies = useSelector((state) => state.movies.movies);

  if (!token) {
    history.push("/");
  }

  useEffect(() => {
    const getDataMovies = async () => {
      try {
        const resultado = await Axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        dispatch(getPeliculasNowPlaying(resultado.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    getDataMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <MoviesContainer>
      <h1>Popular</h1>
      <div>
        {movies.length === 0 ? (
          <Loader />
        ) : (
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        )}
      </div>
    </MoviesContainer>
  );
};

export default Popular;
