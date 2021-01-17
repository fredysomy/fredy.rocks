import react, { Component } from "react";
import "./Downloads.css";

export default class Projects extends Component {
  render() {
    return (
      <div id="main">
        <h3 id="head">
          <u>
            <font color="cyan">Downloads</font>
          </u>
        </h3>
        <div className="maindiv">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              className="img-div"
              src="https://raw.githubusercontent.com/fredysomy/MarkdownIt/master/icons/dassad.png"
            />
            <div className="content-div">
              <h3>
                <b>
                  MarkdownIt{" "}
                  <img
                    alt="GitHub Repo stars"
                    src="https://img.shields.io/github/stars/fredysomy/MarkdownIt?style=for-the-badge"
                  ></img>
                </b>
              </h3>
              <p>
                Efficient Code Editor to live render Markdown and save as
                Markdown,Html and Pdf + Instant Hosting in The Web.
              </p>
              <p>Usefull for writing docs and Hosting it for free.</p>
              <p id="tech">Electron JS , HTML,CSS , JavaScript</p>
              <button className="btn btn-outline-primary btn-sm bttn">
                Source Code
              </button>
              <button className="btn btn-outline-primary btn-sm bttn">
                Documentation
              </button>
              <a href="">
                <button class="btn btn-outline-primary btn-sm">
                  <i class="fas fa-cloud-download-alt"></i>
                </button>
              </a>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "red",
              height: "50px",
              textAlign: "center",
            }}
          >
            <p>Download</p>
          </div>
        </div>
      </div>
    );
  }
}
