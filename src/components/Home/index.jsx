import React from "react";
import { useEffect } from "react";
import * as process from "process";

import { MovieListing } from "../../components";
import movieApi from "../../common/api/movieApi";

const Home = () => {
  const movieText = "Harry";
  const fetchMovies = async () => {
    console.log("Key: ", process.env.REACT_APP_API_KEY);
    console.log("Key: ", process.env.REACT_APP_BASE_URL);
    console.log("Node: ", process.env.NODE_ENV);
    const response = await movieApi
      .get(`?apikey=${process.env.API_KEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("ERROR: ", err);
      });
    console.log("RESPONSE: ", response);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="home">
      <div className="home__banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
