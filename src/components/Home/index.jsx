import React from "react";
import { useEffect } from "react";

import { MovieListing } from "../../components";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div className="home">
      <div className="home__banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
