import React, { Component } from "react";
import { Link } from "react-router-dom";

class Creditos extends Component {
  render() {
    return (
      <div className="pimg2">
        <div className="row">
          <div className="col-md-4 super-centered">
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
            <div>
              Valencian Tiles Photo by Pete Willis on{" "}
              <a href="https://unsplash.com/photos/4j_mRLGFnAE">Unsplash</a>{" "}
            </div>
            <div>
              Housefront Photo by Hutomo Abrianto on{" "}
              <a href="https://unsplash.com/photos/9mPl0Zo7_gQ">Unsplash</a>{" "}
            </div>
            <div>
              Tiles Photo by Job Savelsberg on{" "}
              <a href="https://unsplash.com/photos/TY1_ppdFUKc">Unsplash</a>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Creditos;
