import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import userLogo from "./user.svg";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import Dropdown from "bootstrap/js/dist/dropdown";
import { logout } from "../../features/auth/auth";
import { useCookies } from "react-cookie";

const NavBar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const auth = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    removeCookie(["user"]);
    dispatch(logout());
  };
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
        <div className="btn-group border-0">
          <button
            className="btn dropdown-toggle border-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className="user-logo px-3" src={userLogo} alt="user logo" />
          </button>
          <ul
            className="dropdown-menu dropdown-menu-left"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Link className="dropdown-item" to="/posts">
                Profile
              </Link>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleLogout()}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
