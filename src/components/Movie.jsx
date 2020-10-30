import React from "react";
import styled from "@emotion/styled";

const MovieCard = styled.div`
  width: 80vw;
  height: 50vh;
  margin-bottom: 1rem;
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
    button {
      border: none;
      background-color: var(--blue);
      color: var(--white);
      padding: 0.25rem;
      border-radius: 1rem;
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

const Movie = ({ movie }) => {
  return (
    <MovieCard image={movie.poster_path}>
      <h2>{movie.original_title}</h2>
      <div>
        <p>
          {movie.vote_average} <i className="fas fa-star"></i>
        </p>
        <button type="button">Ver más</button>
        <i className="far fa-heart"></i>
      </div>
    </MovieCard>
  );
};

export default Movie;
