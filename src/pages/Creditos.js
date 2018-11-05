import React, { Component } from "react";
import { Link } from "react-router-dom";

class Creditos extends Component {
  render() {
    return (
      <section className="banner-area relative">
        <div>
          Icons made by{" "}
          <Link to="http://www.freepik.com" title="Freepik">
            Freepik
          </Link>{" "}
          from{" "}
          <Link to="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </Link>{" "}
          is licensed by{" "}
          <Link
            to="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </Link>
        </div>
        <div>Valencian Tiles Photo by Pete Willis on Unsplash</div>
      </section>
    );
  }
}

export default Creditos;
