import React from "react";

import "./movieCard.scss";

const MovieCard = ({ data }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__inner">
        <div className="movie-card__top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="movie-card__bottom">
          <div className="movie-card__info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
