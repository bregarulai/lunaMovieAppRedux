import React from "react";
import { useEffect } from "react";

import { MovieListing } from "../../components";
import movieApi from "../../common/api/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("ERROR: ", err);
      });
    dispatch(addMovies(response.data));
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
