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
            <b>Software Engineer</b> and an Entrepreneur
          </h4>
          <h5 id="desc">
          Co-Founder Blackswitch Technologies, Full Stack Developer, and Created PysonDB & ProxPi. Former Software Engineering Intern at Koll Corp.
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
            <a href="mailto:fredysomy@gmail.com">
              <button class="btn btn-outline-info resume">Hire Me</button>
            </a>
            <a
              download
              href="https://drive.google.com/uc?export=download&id=1T9hMLrb92usoo8D47_z6r09lYBidMQzz"
          
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

