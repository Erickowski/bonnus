import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

import { getPelicula } from "../actions/movieActions";

import Loader from "../components/Loader";

const MovieDetailContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const MovieDetail = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movies.movie);

  useEffect(() => {
    const getMovie = async () => {
      const urls = [
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      ];

      const [movieData, video] = await Promise.all([
        Axios(urls[0]),
        Axios(urls[1]),
      ]);

      const {
        original_title,
        overview,
        backdrop_path,
        release_date,
        vote_average,
        runtime,
      } = movieData.data;
      const { key } = video.data.results[0];
      dispatch(
        getPelicula({
          nombre: original_title,
          video: `https://www.youtube.com/watch?v=${key}`,
          sinopsis: overview,
          imagen: backdrop_path,
          fecha: release_date,
          votos_promedio: vote_average,
          duracion: runtime,
        })
      );
    };
    getMovie();
    // eslint-disable-next-line
  }, []);

  if (Object.keys(movie).length === 0) return <Loader />;

  console.log(movie);

  return (
    <MovieDetailContainer>
      <div>
        <h1>{movie.nombre}</h1>
        <button>Agregar a favoritos</button>
      </div>
      <ReactPlayer url={movie.video} controls width="60vw" height="50vh" />
    </MovieDetailContainer>
  );
};

export default MovieDetail;
