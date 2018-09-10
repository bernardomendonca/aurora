import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="bg-dark text-white mt-5 p-3 text-center">
          Copyright &copy; {new Date().getFullYear()} Bernardo Mendonca
        </footer>
      </div>
    );
  }
}
export default Footer;
