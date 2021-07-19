import React from "react";
import "./MovieComponent.css";
import "../App.css";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className="movie__card_container"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={Poster} alt={Title} className="movie__card_img" />
      <div className="movie__card_name">{Title}</div>
      <div className="movie__card_info">
        <div className="movie__card_info">Year : {Year}</div>
        <div className="movie__card_info">Type : {Type}</div>
      </div>
    </div>
  );
};
export default MovieComponent;
