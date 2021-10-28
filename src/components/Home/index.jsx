import React from "react";
import { useEffect } from "react";

import { MovieListing } from "../../components";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="home__banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
