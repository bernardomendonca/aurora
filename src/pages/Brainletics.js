import React, { Component } from "react";
import { Link } from "react-router-dom";

class Brainletics extends Component {
  render() {
    return (
      <section className="banner-area relative">
        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <div className="col-lg-10">
              <div className="story-content">
                <h5 className="text-uppercase">_brainletics</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Shipping puzzles worldwide. Writing puzzling content.
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="https://brainleticsonlinestore.com/"
                  role="button"
                >
                  Visit Brainletics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Brainletics;
