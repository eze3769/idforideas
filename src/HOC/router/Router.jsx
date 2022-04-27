import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../auth/Auth";
import Login from "../../components/login/Login";
import Signup from "../../components/Signup/Signup";
import Home from "../../pages/Home/Home";
import { reLogUser } from "../../features/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import Profile from "../../pages/profile/Profile";

const Router = () => {
  const loggedInUser = useSelector((state) => state.auth.isLogged);
  const access_token = useSelector((state) => state.auth.access_token);
  const [cookies, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (loggedInUser && cookies["user"] === undefined) {
      setCookie("user", access_token, { path: "/" });
    } else if (!loggedInUser && cookies["user"] !== "undefined") {
      dispatch(reLogUser(cookies["user"]));
    }
  }, [access_token, cookies, dispatch, loggedInUser, setCookie]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Auth>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Profile />} />
            </Auth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
