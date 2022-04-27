import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../images/images";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../features/auth/auth";

function Signup() {
  const [confirmation, setConfirmation] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLogged);
  const isLoading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setConfirmation(true);
    } else {
      setConfirmation(false);
      const body = {
        name: name,
        email: email,
        password: password,
        password_confirm: password,
      };
      console.log(body);
      dispatch(fetchRegister(body));
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="containerPrincipal d-flex flex-row flex-nowrap justify-content-center">
          <div className="imageSignup px-3">
            <img
              src={images.imageSignup}
              style={{ width: "45vw" }}
              alt="SignupImage"
            />
          </div>

          <div
            className="containerForm p-5"
            id="containerForm"
            style={{ width: "40%" }}
          >
            <div className="imageLogo">
              <img src={images.logoshore} alt="LogoShore" />
            </div>

            <h1 className="title">Sing Up into our community</h1>
            <p className="subtitle">
              You look exactly like someone who is in trends, you'r in!
            </p>

            <div className="d-grid gap-2">
              <span className="btnGoogle">Continue with Google</span>
            </div>

            <p style={{ fontSize: "11px", color: "gray", textAlign: "center" }}>
              {" "}
              ------------ or Sign in with Email ------------{" "}
            </p>

            <div className="form-group">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
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
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name123"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
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

              <div className="mb-3">
                <label htmlFor="passwordConfirm" className="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirm"
                  placeholder="********************"
                  name="passwordConfirm"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                ></input>
              </div>
              {confirmation && <p>Passwords doesn't match</p>}

              <div className="linksregister">
                <label
                  className="check-input"
                  id="gridCheck"
                  style={{ fontSize: "11px", color: "gray" }}
                >
                  {" "}
                  Remember Me
                  <input type="checkbox" checked="checked"></input>
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="ConfirmButton">
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#EF62A3" ? "#EF62A3" : "#e2b3c9",
                      borderColor: "#EF62A3",
                    }}
                    onClick={handleRegister}
                  >
                    <b>Confirm</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
