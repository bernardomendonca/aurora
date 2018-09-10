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
                    Proin vel, vel vitae ut nunc, lorem phasellus lorem. Sodales
                    erat leo sollicitudin, hymenaeos non, ut pharetra justo id
                    aliquam nec. Accumsan sapien nisl ultricies nullam vitae
                    vestibulum, aliquam cras mauris magnis, ut tempor in ornare
                    et, cursus et tempor, aliquam vestibulum pretium rutrum.
                    Mauris bibendum vitae nisl adipiscing metus eget, ut odio
                    feugiat esse fringilla non semper. Turpis scelerisque neque,
                    excepturi nonummy nulla dui elit et, vestibulum vitae
                    libero. Nec sed, et est nec urna enim purus wisi, sociosqu
                    vivamus mi in euismod facilisis, nam aliquam, est fringilla.
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
