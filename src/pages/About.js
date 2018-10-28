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
                    Web Developer proficient in HTML, CSS and JavaScript.
                    Familiar with unit testing, Test Driven Development and
                    Continuous Integration. Trained in fast changing
                    environments and Agile development. Passionate about
                    learning collectively. Advocate of inclusion and bottom-up
                    processes.
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
                  href="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1539738117/CURRICULUM_VITAE_-_Bernardo_Mendon%C3%A7a.pdf"
                  role="button"
                >
                  Check my CV
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="container ">
            <div className="row ">
              <div className="col-sm">
                <i class="fab fa-html5" /> HTML5
              </div>
              <div className="col-sm">SKILLSET2</div>
              <div className="col-sm">SKILLSET3</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
