import React, { Component } from "react";
import "./Mainbody.css";


export default class Mainbody extends Component {
  render() {
    return (
      <div id="divmain" style={{ position: "relative", overflow: "hidden" }}>
        <img
          id="imgme"
          src="https://avatars2.githubusercontent.com/u/65971072?s=460&u=dd6ae329cb0a04cbddc6c0959a924ceeac62bf02&v=4"
        />
        <div id="det">
          <h1 id="name">
            Hi I am{" "}
            <font color="cyan">
              <u>Fredy Somy</u>{" "}
            </font>
          </h1>
          <hr />
          <h4>
            I am <b>Software Developer</b> and a Open Source Enthusiast
          </h4>
          <h5 id="desc">
          Full Stack Developer and Open Source Contributor, Creator of PysonDB & ProxPi. Former Software Engineering Intern at Koll Corp, pursuing a Computer Science Undergraduate degree at Saintgits.
          </h5>
          <hr />
          <div>
            <a href="https://dev.to/fredysomy">
              <i class="fab fa-dev fa-2x"></i>
            </a>
            <a href="https://linkedin.com/in/fredysomy">
              <i id="we" class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://twitter.com/FredySomy">
              <i id="we" class="fab fa-twitter-square fa-2x"></i>
            </a>
            <a href="https://github.com/fredysomy">
              <i id="we" class="fab fa-github-square fa-2x"></i>
            </a>
            <a href="mailto:fredysomy@gmail.com">
              <i id="we" class="far fa-envelope fa-2x"></i>
            </a>
            <a href="https://angel.co/u/fredy-somy">
              <i id="we" class="fab fa-angellist fa-2x"></i>
            </a>
          </div>
          <div id="buttonref">
            <a href="#stufboutme">
              <button class="btn btn-outline-info resume">Hire Me</button>
            </a>
            <a
              download
              href="../../Fredy_s_Resume-4.pdf"
            >
              <button class="btn btn-outline-info resume">Resume</button>
            </a>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

