import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="pimg3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 center-block mx-auto text-background super-centered">
              <div className="container mt-5 mb-5">
                <h3 className="text-uppercase">contato</h3>
                <h1>
                  <span className="sp-1">
                    <p>
                      <br /> (81) 123 456 789
                      <br /> (81) 123 456 789
                    </p>
                    <p />

                    <p>Aproveite para nos seguir nas nossas redes sociais:</p>
                    <a
                      href="http://facebook.com"
                      class="fab fa-facebook"
                      id="margin-6p-grey"
                    />
                    <a
                      href="http://instagram.com"
                      class="fab fa-instagram"
                      id="margin-6p-grey"
                    />
                    <a
                      href="http://linkedin.com"
                      class="fab fa-linkedin"
                      id="margin-6p-grey"
                    />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
