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
                <h5 className="text-uppercase">SOBRE NÓS</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    Sou Leandro, atuo como sushiman profissional a mais de 10
                    anos. Atuando na Austrália a 2 anos, tenho como missão
                    trazer um pouco da cultura nipo-brasileira à Melbourne e
                    propor uma experiência culinária de fusão entre culturas tão
                    ricas.
                  </span>
                </h1>
                <a
                  className="btn btn-outline-secondary"
                  id="some-margin"
                  href="/contact"
                  role="button"
                >
                  Entre em contato!
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
