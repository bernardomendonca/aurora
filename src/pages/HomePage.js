import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      // FIRST BANNER - WEB DEVELOPMENT
      <section className="banner-area relative">
        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <div className="banner-left col-lg-6">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1536321281/15830940424_02d12c92bb_o.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h6 className="text-uppercase">_Web Solution Developer</h6>
                <h1>
                  Behind every{" "}
                  <span className="sp-1">success story there is a </span>
                  <span className="sp-2">passionate developer</span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="/about"
                  role="button"
                >
                  About me
                </a>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="/contact"
                  role="button"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <div className="banner-left col-lg-6">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1536322221/16427461946_bd8d6a0b18_o.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h6 className="text-uppercase">_Open Source Development</h6>
                <h1>
                  <span className="sp-1">Building, testing </span>
                  <span className="sp-2">and deployng</span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="/web-development"
                  role="button"
                >
                  Check my portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <div className="banner-left col-lg-6">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1536322487/15830935414_591c00fd11_o.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h6 className="text-uppercase">_</h6>
                <h1>
                  <span className="sp-1">Not only from code </span>
                  <span className="sp-2">lives a developer</span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="/contact"
                  role="button"
                >
                  Urban planning
                </a>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="/brainletics"
                  role="button"
                >
                  Puzzles
                </a>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="/photography"
                  role="button"
                >
                  Photography
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
