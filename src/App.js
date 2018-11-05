import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";

import HomePage from "./pages/HomePage.js";
import Contact from "./pages/Contact.js";
import Creditos from "./pages/Creditos.js";
import About from "./pages/About.js";

import NavBar from "./HeaderComponent/Navbar.js";
import Footer from "./FooterComponent/Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/about" component={About} />
          <Route name="creditos" exact path="/creditos" component={Creditos} />
          <Route name="contact" exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
