import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
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
                <h5 className="text-uppercase">_contact</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    <p>
                      The best way to contact me is{" "}
                      <a href="mailto:bernardomendonca@outlook.com">
                        via e-mail
                      </a>{" "}
                    </p>

                    <p>Otherwise, just try any of my social media pages:</p>
                    <a
                      href="https://www.linkedin.com/in/bernardo-mendon%C3%A7a-168239137/"
                      class="fab fa-linkedin fa-2x"
                      id="margin-6p-grey"
                    />
                    <a
                      href="https://www.instagram.com/brnrdomendonca/"
                      class="fab fa-instagram fa-2x"
                      id="margin-6p-grey"
                    />
                    <a
                      href="https://www.facebook.com/berna.mendonca"
                      class="fab fa-facebook fa-2x"
                      id="margin-6p-grey"
                    />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
