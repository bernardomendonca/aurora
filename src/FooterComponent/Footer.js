import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const hyperlinkStyle = {
      color: "#C5D3EA"
    };

    return (
      <div className="footer">
        <footer className="nav-blue text-white p-3 text-center">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            to="http://bernardomendonca.herokuapp.com"
            style={hyperlinkStyle}
          >
            Bernardo Mendonca
          </Link>
        </footer>
      </div>
    );
  }
}
export default Footer;
