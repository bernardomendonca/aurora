import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <section className="banner-area relative">
        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            id="centered"
          >
            <img
              src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1541127333/menupage1.png"
              alt=""
              className="img-menu"
            />
            <img
              src="https://res.cloudinary.com/dxbk4zeyc/image/upload/v1541127354/menupage2.png"
              alt=""
              className="img-menu"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
