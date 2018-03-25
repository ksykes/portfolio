import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Route, NavLink } from 'react-router-dom';
import Home from "./home.js";
import About from "./about.js";
import Projects from './projects.js';

class App extends React.Component {
  componentDidMount() {
    particlesJS.load(
      "particles-js",
      "././assets/particlesjs-config.json",
      function() {
        console.log("callback - particles.js config loaded");
      }
    );
  }
	render() {
		return <Router>
        <div id="root">
          <header>
            {/* <div className="headerText"> */}
              <h1><NavLink exact to="/">Kait Sykes</NavLink></h1>
              <ul className="nav">
                <li>
                  <NavLink to="/about" activeClassName="selected">About</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
                </li>
                <li>
                  <a href="https://medium.com/@ksykes" target="blank">Articles&nbsp;<i className="fas fa-external-link-alt"></i></a>
                </li>
                <li>
                  <a href="mailto:kaitlyn.sykes@me.com" className="contact">Contact <span className="email">kaitlyn.sykes@me.com</span></a>
                </li>
              </ul>
            {/* </div> */}
            <ul className="socialMedia">
              <li>
                <a href="">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-codepen" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </header>

          <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </div>

          <section className="copyright">
            <p>© {new Date().getFullYear()} Kait Sykes</p>
          </section>
        </div>
      </Router>;
	}
}

ReactDOM.render(<App />, document.getElementById('app'));