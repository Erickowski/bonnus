import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addFavorito } from "../actions/movieActions";

const MovieCard = styled.div`
  width: 80vw;
  height: 50vh;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  padding: 0;
  border: 0.25rem solid var(--blue);
  border-radius: 1rem;
  background-image: ${(props) =>
    props.image && `url(https://image.tmdb.org/t/p/w500/${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  h2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 1rem;
    margin: 0 auto;
    text-align: center;
    background-color: var(--blue);
    border-radius: 0.5rem 0.5rem 0 0;
  }
  div {
    width: 90%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    width: 30vw;
  }
  @media (min-width: 912px) {
    width: 20vw;
  }
`;

const MovieLink = styled(Link)`
  border: none;
  background-color: var(--blue);
  color: var(--white);
  padding: 0.25rem;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const Movie = ({ movie }) => {
  const { original_title, poster_path, id, vote_average } = movie;

  const dispatch = useDispatch();

  const handleFavorito = () => {
    dispatch(
      addFavorito({
        id,
        original_title,
        poster_path,
        vote_average,
      })
    );
  };

  return (
    <MovieCard image={poster_path}>
      <h2>{original_title}</h2>
      <div>
        <p>
          {vote_average} <i className="fas fa-star"></i>
        </p>
        <MovieLink to={`/movie/${id}`}>Ver más</MovieLink>
        <i className="far fa-heart" onClick={() => handleFavorito()}></i>
      </div>
    </MovieCard>
  );
};

export default Movie;
