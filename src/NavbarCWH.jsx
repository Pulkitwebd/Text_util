import React from "react";
import {Link} from "react-router-dom";

const NavbarCWH = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtil
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link"  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.darkModeEnable}
                />
                <label
                  className={`form-check-label ${
                    props.mode === "dark" ? "text-white" : "text-dark"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarCWH;
