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
                <h5 className="text-uppercase">contato</h5>
                <h1>
                  <span className="sp-1" id="font-about-me">
                    <p>
                      Para pedidos, favor entrar em contato por: (61) 0422 522
                      701
                    </p>
                    <p>
                      Peça também pelo{" "}
                      <a href="https://www.facebook.com/laura.luppi.37625?fref=nf&__tn__=%2Cdm-R-R&eid=ARD6lVeb_mCR0mH2b3Jwe6eob0CbbMNqP0J_5vGKt1XaCs_33vzC_S1NiBF5qYNGqqoW9KXoJl-DdPfE&post_id=1422763574520547">
                        facebook
                      </a>
                    </p>

                    <p>Aproveite para nos seguir nas nossas redes sociais:</p>
                    <a
                      href="https://www.facebook.com/laura.luppi.37625?fref=nf&__tn__=%2Cdm-R-R&eid=ARD6lVeb_mCR0mH2b3Jwe6eob0CbbMNqP0J_5vGKt1XaCs_33vzC_S1NiBF5qYNGqqoW9KXoJl-DdPfE&post_id=1422763574520547"
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
