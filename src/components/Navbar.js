import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Bookky
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">
                Explore Store
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                What we sell?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                href="/"
                tabIndex="-1"
                aria-disabled="true">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login">
                <button className="nav-link btn btn-outline-primary">
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register">
                <button className="nav-link btn btn-outline-primary">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
