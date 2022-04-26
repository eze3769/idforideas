import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import images from "../images/images";
import "./Login.css";
import { fetchLogin } from "../../features/auth/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLogged)

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleCheck = () => {};

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = { email, password };
    dispatch(fetchLogin(body))
  };
  return (
    <div className="login-container">
      {isLoading ? (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="containerPrincipal">
            <div className="imageLogin">
              <img src={images.imageLogin} alt="LoginImage" />
            </div>

            <div className="containerForm" id="containerForm">
              <div className="imageLogo">
                <img src={images.logoshore} alt="LogoShore" />
              </div>

              <h1 className="titulo">Login to your Account</h1>
              <p>Look some inspiration?</p>

              <div className="d-grid gap-2">
                <span className="btnGoogle">Continue with Google</span>
              </div>

              <p
                style={{ fontSize: "11px", color: "gray", textAlign: "center" }}
              >
                {" "}
                ------------ or Sign in with Email ------------{" "}
              </p>

              <div className="form-group">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="********************"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="linksregister">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="pt-3">
                      <label
                        className="check-input"
                        id="gridCheck"
                        style={{ fontSize: "11px", color: "gray" }}
                      >
                        {" "}
                        Remember Me
                        <input type="checkbox" onChange={handleCheck}></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>

                    <div>
                      <span>
                        <Link
                          to="/signup"
                          style={{
                            fontSize: "11px",
                            color: "#EF62A3",
                            textDecoration: "none",
                            textAlign: "right",
                          }}
                        >
                          Forgot Password?
                        </Link>{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="btnLogin">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#EF62A3" ? "#EF62A3" : "#e2b3c9",
                        borderColor: "#EF62A3",
                      }}
                      onClick={handleLogin}
                    >
                      <b>Login</b>
                    </button>
                  </div>
                </div>
              </div>

              <p style={{ textAlign: "center" }}>
                {" "}
                Not Registered Yet?{" "}
                <Link
                  to="/signup"
                  style={{ color: "#EF62A3", textDecoration: "none" }}
                >
                  Create an account
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
