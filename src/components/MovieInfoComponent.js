import React, { useEffect, useState } from "react";
import { API_KEY } from "../App";
import "../App.css";
import Axios from "axios";
import "./MovieInfoComponent.css";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className="container">
      {movieInfo ? (
        <>
          <img
            src={movieInfo?.Poster}
            alt={movieInfo?.Title}
            className="poster__img"
          />
          <div className="movie__det">
            <div className="movie_name">
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </div>
            <div className="movie_info">
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </div>
            <div className="movie_info">
              Year: <span>{movieInfo?.Year}</span>
            </div>
            <div className="movie_info">
              Language: <span>{movieInfo?.Language}</span>
            </div>
            <div className="movie_info">
              Rated: <span>{movieInfo?.Rated}</span>
            </div>
            <div className="movie_info">
              Released: <span>{movieInfo?.Released}</span>
            </div>
            <div className="movie_info">
              Runtime: <span>{movieInfo?.Runtime}</span>
            </div>
            <div className="movie_info">
              Genre: <span>{movieInfo?.Genre}</span>
            </div>
            <div className="movie_info">
              Director: <span>{movieInfo?.Director}</span>
            </div>
            <div className="movie_info">
              Actors: <span>{movieInfo?.Actors}</span>
            </div>
            <div className="movie_info">
              Plot: <span>{movieInfo?.Plot}</span>
            </div>
          </div>
          <div className="close" onClick={() => props.onMovieSelect()}>
            X
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MovieInfoComponent;
