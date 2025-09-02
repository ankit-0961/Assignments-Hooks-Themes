import React, { useContext } from "react";
import { Themecontext } from "./ThemeChanger";

const Navbar = () => {
  const [theme, setTheme] = useContext(Themecontext);
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme === "light" ? "navbar-light bg-light" : "navbar-light bg-dark"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.achieversit.com/assets/images/logo-white.png "
            alt=""
          />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a
                className={`nav-link${
                  theme === "light" ? " text-dark " : " text-white "
                }`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${
                  theme === "light" ? " text-dark " : " text-white "
                }`}
                href="#"
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${
                  theme === "light" ? " text-dark " : " text-white "
                }`}
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                <button
                  className={`${
                    theme === "light"
                      ? "btn btn-outline-dark"
                      : "btn btn-outline-light"
                  }`}
                  onClick={setTheme}
                >
                  {theme === "light"
                    ? "switch to dark mode"
                    : "switch to light mode"}
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
