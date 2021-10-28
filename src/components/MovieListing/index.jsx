import React from "react";
import { useSelector } from "react-redux";

import { MovieCard } from "..";
import { getAllMovies } from "../../features/movies/movieSlice";
import "./movieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-listing">
      <div className="movie-listing__list">
        <h2>Movies</h2>
        <div className="movie-listing__container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
