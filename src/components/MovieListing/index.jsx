import React from "react";
import { useSelector } from "react-redux";

import { MovieCard } from "..";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import "./movieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

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
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-listing">
      <div className="movie-listing__list">
        <h2>Movies</h2>
        <div className="movie-listing__container">{renderMovies}</div>
      </div>
      <div className="movie-listing__list">
        <h2>Shows</h2>
        <div className="movie-listing__container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
