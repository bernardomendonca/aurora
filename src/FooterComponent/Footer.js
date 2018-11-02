import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="bg-dark text-white p-3 text-center">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="http://bernardomendonca.herokuapp.com">Bernardo Mendonca</a>
        </footer>
      </div>
    );
  }
}
export default Footer;
