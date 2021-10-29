import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import userImg from "../../images/user.png";
import "./header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("please enter a search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">Luna Movie App</Link>
        </div>
        <div className="header__search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={term}
              placeholder="Search movie or show"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="header__user-image">
          <img src={userImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
