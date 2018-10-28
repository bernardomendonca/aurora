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

          <div id="centered-div">
            <hr />
            <h1>WHAT DO I KNOW?</h1>
            <br />
            <div className="row ">
              <div className="col-sm">
                <h3>FRONT END</h3>
                <i className="fab fa-html5" /> HTML
                <br />
                <i className="fab fa-css3-alt" /> CSS
                <br />
                <i className="fab fa-js-square" /> JavaScript
                <br />
                <i className="fab fa-js-square" /> JQuery
                <br />
                <i className="fab fa-js-square" /> Handlebars
                <br />
                <i className="fab fa-react" /> React
                <br />
                <i className="fab fa-react" /> Redux
              </div>
              <div className="col-sm">
                <h3>BACK END</h3>
                <i className="fab fa-node-js" /> Node.JS
                <br />
                <i className="fab fa-node-js" /> Express
                <br />
                <i className="fas fa-database" /> MongoDB
                <br />
                <i className="fas fa-user-astronaut" /> Postman
              </div>
              <div className="col-sm">
                <h3>MISC</h3>
                <i className="fas fa-project-diagram" /> Heroku
                <br />
                <i className="fas fa-project-diagram" /> Agile Development
                <br />
                <i className="fas fa-project-diagram" /> SCRUM
                <br />
                <i className="fas fa-align-left" /> Test Driven Dev
                <br />
                <i className="fas fa-align-justify" /> JEST
                <br />
                <i className="fab fa-git" /> GIT
                <br />
                <i className="fab fa-github" /> GitHub
                <br />
                <i className="fas fa-code-branch" /> Continuous Integration
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
