import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => navigate("/", { state: location.state })}
                >
                  Home
                </a>
              </li>
              {location.state?.auth ? (
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    My collections
                  </a>
                </li>
              ) : null}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>

              {location.state?.auth ? (
                <button
                  className="btn btn-outline-danger mx-2"
                  type="submit"
                  onClick={() => navigate("/", { state: { auth: false } })}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary mx-2"
                  type="submit"
                  onClick={() => navigate("/signin")}
                >
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
