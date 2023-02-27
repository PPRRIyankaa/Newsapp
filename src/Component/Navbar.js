import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import PropTypes from "prop-types";

export class Navbar extends Component {
  static propTypes = {};
  //   render method is a lifecyle based component i.e when react run component then some series methods are running. it is used when render it on the screen as it compile the jsx into html and then show it on screen
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" htamlfor="/">
              NewsMonkey
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item " >
                  <Link className="nav-link active" to="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/business">
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/entertainment">
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/health">
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/science">
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/technology">
                    technology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch ">
              <input
                onClick={this.props.onChange}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
              <label className="form-check-label" for="flexSwitchCheckChecked">
                Change the Mode
              </label>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
