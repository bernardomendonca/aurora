import React, { Component } from "react";
import { Link } from "react-router-dom";
import Github from "../GithubComponent/Github.js";

class HomePage extends Component {
  render() {
    return (
      <section className="banner-area relative">
        {/* YELPCAMP */}

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

        {/* FOUNDER & STUDENT */}

        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <div className="banner-left col-lg-4">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1539756756/founderandstudent.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h5 className="text-uppercase">_Founder & Student</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Matching tool for StartUp founders and International
                    students. Built with React and Redux for the front-end.
                    Node.JS and Express routing for backend, with MongoDB as
                    non-relational database. Authentication and authorisation
                    with jsonwebtoken, passport and validator.
                    <br />
                    *Work in progress
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  id="some-margin"
                  href="https://frozen-badlands-71615.herokuapp.com/students"
                  role="button"
                >
                  Live Preview
                </a>
                <a
                  className="btn btn-outline-success"
                  href="https://github.com/bernardomendonca/find-a-student"
                  role="button"
                >
                  Check the Repo!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WITCH DOCTOR */}

        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <div className="banner-left col-lg-4">
              <img
                className="d-flex mx-auto img-fluid"
                src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1540775415/witchdoctor.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="story-content">
                <h5 className="text-uppercase">_Witch Doctor</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Social Network for sharing home-made recipes for healing
                    purposes. Built with the MERN Stack.
                    <br />
                    *Work in progress
                  </span>
                </h1>
                <a
                  className="btn btn-outline-success"
                  href="https://github.com/bernardomendonca/the-witch-doctor"
                  role="button"
                >
                  Check the Repo!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DEVCONNECTOR */}

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

        {/* PATATP */}

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

        {/* WEBPAGE */}

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
          <br />
          <div>
            {" "}
            <Github />
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
