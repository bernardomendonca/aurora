import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
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
                <h5 className="text-uppercase">_about me</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Passionate about data driven decisions that strengthen
                    bottom-up strategic approaches. Being trained in the MERN
                    Web Development stack to build applications that aid the
                    decision-making processes.
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="/contact"
                  role="button"
                >
                  Contact me
                </a>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1539234394/CURRICULUM_VITAE_-_Bernardo_Mendon%C3%A7a.pdf"
                  role="button"
                >
                  Check my CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
