import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

class HomePage extends Component {
  render() {
    return (
      <div id="homePage">
        {/* SECTION 1 */}
        <div className="pimg1">
          <div className="ptext">
            <ReactTypingEffect
              text={["ARQUITETURA", "DESIGN", "INTERIORES", "AURORA"]}
              speed={50}
              eraseDelay={300}
            />
          </div>
        </div>

        <section className="section section-blue">
          <div className="container">
            <h1>AURORA: Quem somos</h1>
            <hr />
            <div className="container mb-5">
              {/* FIRST ASSOCIATE */}
              <div className="row">
                <div className="col-3">
                  <img
                    className="face-pic"
                    src="https://images-na.ssl-images-amazon.com/images/I/51lK5b92Q1L._SX355_.jpg"
                    alt=""
                  />
                </div>
                <div className="col-9">
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque nam minus fugit dolorem ex labore inventore, quos
                    quas pariatur excepturi officiis repellat, odit eveniet
                    dolore nulla modi cupiditate recusandae consectetur iste. A,
                    illo nulla. Facere, laborum. Quibusdam aliquid nobis
                    doloremque necessitatibus exercitationem quam, architecto
                    vero quod perspiciatis veniam possimus iste?
                  </p>
                </div>
              </div>
            </div>
            <br />
            {/* SECOND ASSOCIATE */}
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque nam minus fugit dolorem ex labore inventore, quos
                    quas pariatur excepturi officiis repellat, odit eveniet
                    dolore nulla modi cupiditate recusandae consectetur iste. A,
                    illo nulla. Facere, laborum. Quibusdam aliquid nobis
                    doloremque necessitatibus exercitationem quam, architecto
                    vero quod perspiciatis veniam possimus iste?
                  </p>
                </div>
                <div className="col-3">
                  <img
                    className="face-pic"
                    src="https://images-na.ssl-images-amazon.com/images/I/51lK5b92Q1L._SX355_.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}

        <section className="section section-blue-light">
          <div className="container">
            <h1>Nossos serviços</h1>
            <br />
            <div className="container mb-5">
              <div className="row">
                <div className="col-sm p-5">
                  <img
                    className="service-pic"
                    src={require("../resources/blueprint.png")}
                    alt="Projeto arquitetônico"
                  />
                  <br />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi distinctio eligendi, hic eos unde iusto molestias
                    autem maiores. Fugiat illo molestiae laboriosam porro error
                    odit. Neque iste officia libero sunt.
                  </p>
                </div>
                <div className="col-sm p-5">
                  <img
                    className="service-pic"
                    src={require("../resources/chair.png")}
                    alt="Design"
                  />
                  <br />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi distinctio eligendi, hic eos unde iusto molestias
                    autem maiores. Fugiat illo molestiae laboriosam porro error
                    odit. Neque iste officia libero sunt.
                  </p>
                </div>
                <div className="col-sm p-5">
                  <img
                    className="service-pic"
                    src={require("../resources/interior.png")}
                    alt="Interiores"
                  />
                  <br />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi distinctio eligendi, hic eos unde iusto molestias
                    autem maiores. Fugiat illo molestiae laboriosam porro error
                    odit. Neque iste officia libero sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
