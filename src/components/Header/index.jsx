import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../images/user.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <div className="header__logo">Luna Movie App</div>
        </Link>
        <div className="header__user-image">
          <img src={userImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
