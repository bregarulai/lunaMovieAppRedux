import React from "react";
import { useEffect } from "react";

import { MovieListing } from "../../components";
import movieApi from "../../common/api/movieApi";

const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const movieText = "Harry";
  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
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
