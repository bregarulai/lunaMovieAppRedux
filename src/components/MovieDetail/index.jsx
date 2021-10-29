import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import {
  faStar,
  faFilm,
  faCalendar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./movieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-detail">
      {Object.keys(data).length === 0 ? (
        <div>... Loading</div>
      ) : (
        <>
          <div className="movie-detail__left">
            <div className="movie-detail__title">{data.Title}</div>
            <div className="movie-detail__rating">
              <span>
                IMDB Rating <FontAwesomeIcon icon={faStar} /> :{" "}
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes <FontAwesomeIcon icon={faThumbsUp} /> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <FontAwesomeIcon icon={faFilm} /> : {data.Runtime}
              </span>
              <span>
                Year <FontAwesomeIcon icon={faCalendar} /> : {data.Year}
              </span>
            </div>
            <div className="movie-detail__plot">{data.Plot}</div>
            <div className="movie-detail__info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="movie-detail__right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
