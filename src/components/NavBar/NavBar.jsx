import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import userLogo from "./user.svg";
import "./navBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const auth = useSelector((state) => state.auth.isLogged);
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {auth && (
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active pink-text"
                  aria-current="page"
                  to=""
                >
                  View
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active pink-text"
                  aria-current="page"
                  to=""
                >
                  Tags
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pink-text" to="">
                  About Fashion Like
                </Link>
              </li>
            </ul>
          </div>
        )}
        <Link to="/posts">
          <img className="user-logo px-3" src={userLogo} alt="user logo" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
