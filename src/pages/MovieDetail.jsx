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
  padding: 2rem;
  align-items: center;
  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    button {
      display: flex;
      align-items: center;
      border: none;
      border-radius: 1rem;
      background-color: var(--blue);
      cursor: pointer;
      color: var(--white);
      i {
        margin-left: 1rem;
      }
    }
  }
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

      const { original_title } = movieData.data;
      const { key } = video.data.results[0];

      dispatch(
        getPelicula({
          nombre: original_title,
          video: `https://www.youtube.com/watch?v=${key}`,
        })
      );
    };
    getMovie();
    // eslint-disable-next-line
  }, []);

  if (Object.keys(movie).length === 0) return <Loader />;

  return (
    <MovieDetailContainer>
      <div>
        <h1>{movie.nombre}</h1>
        <button>
          Agregar a favoritos <i className="far fa-heart"></i>
        </button>
      </div>
      <ReactPlayer url={movie.video} controls width="60vw" height="60vh" />
    </MovieDetailContainer>
  );
};

export default MovieDetail;
