import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm nav-blue ml-auto">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1541311997/aurora-logo.png"
              height="40"
              alt=""
            />
          </a>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Sobre Nós
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-0">
              <li className="nav-item nav-item-right">
                <Link className="nav-link" to="/contact">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
