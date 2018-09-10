import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photography extends Component {
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
                <h5 className="text-uppercase">_photography</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    The beauty is in the eye of the beholder. Being able to
                    capture a moment in time with light is a passion I want to
                    share.
                  </span>
                </h1>
                <span className="sp-3" id="font-0-8">
                  Every picture in this website was taken by myself and can be
                  reproduced under copyright laws with respective credit to
                  myself.
                </span>
                <br />
                <br />
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="https://www.flickr.com/photos/brnrdomendonca/"
                  role="button"
                >
                  Check my Flickr
                </a>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="https://www.instagram.com/brnrdomendonca"
                  role="button"
                >
                  Instagram page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Photography;
