import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <section className="banner-area relative">
        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <div className="banner-left col-lg-4">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1531729068/yelpcamphomepage.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h5 className="text-uppercase">_yelpcamp</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Developed during Colt Steele's Web Developer Bootcamp.
                    YelpCamp provides location and price features for Camping
                    sites, including user authentication and authorisation.
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="https://cryptic-bayou-63287.herokuapp.com/"
                  role="button"
                >
                  Live Preview
                </a>
                <a
                  className="btn btn-outline-success"
                  href="https://github.com/bernardomendonca/yelpcamp"
                  role="button"
                >
                  Check the Repo!
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
            <div className="banner-left col-lg-4">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1534912326/devconnector.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h5 className="text-uppercase">_devconnector</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Social Network for Web Developers built with the MERN Stack.
                    Developed as final project of Brad Traversy's 'MERN Stack -
                    front to back' program.
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="https://secure-ridge-19973.herokuapp.com/"
                  role="button"
                >
                  Live Preview
                </a>
                <a
                  className="btn btn-outline-success"
                  href="https://github.com/bernardomendonca/DevConnector-MERN"
                  role="button"
                >
                  Check the Repo!
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
            <div className="banner-left col-lg-4">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1536489454/patatap-clone.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h5 className="text-uppercase">_patatap clone</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Patatap clone with responsive keypress developed with
                    JavaScript. Audio files can be edited in the source code.
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  href="https://github.com/bernardomendonca/PATATAP-CLONE"
                  role="button"
                >
                  Check the Repo!
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
            <div className="banner-left col-lg-4">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1536544032/personal_page.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h5 className="text-uppercase">_personal webpage</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Personal webpage developed with React, Express Routing and
                    Node JS
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  href="https://github.com/bernardomendonca/personal-page"
                  role="button"
                >
                  Check the Repo!
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
