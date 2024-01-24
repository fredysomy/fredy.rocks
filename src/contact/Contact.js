import react, { Component } from "react";
import "./Contact.css";
import axios from "axios";
import $ from "jquery";


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  mailonChange(event) {
    this.setState({ email: event.target.value });
  }
  nameonChange(event) {
    this.setState({ name: event.target.value });
  }
  messageonChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://3trd25.deta.dev/email", {
      method: "POST",
      body: JSON.stringify({ emails: this.state.email, name: this.state.name }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then(window.$("#exampleModal").modal("show"));
  }
  render() {
    return (
      <div id="main">
        
        <div id="stufboutme">
          <h3 id="head">
            <font color="cyan">Services I offer</font>
          </h3>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i class="fas fa-layer-group"></i> Full Stack Developemt
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p id="skillleft">
                    I Can make Full stack web apps using MERN,MEHN stack.
                  </p>
                  <p id="skillleft">
                    I know Node , Express JS, React js ,MongoDB as Database.
                  </p>
                  <p id="skillleft">Some Full stack apps i made:</p>
                  <ul>
                    <li>
                      <a href="https://github.com/fredysomy/Blogitn0w">
                        BlogItnow (A Blog App)
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/MarkdownIt">
                        MarkdownIt (A Web Hosting App)
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/Github-API">
                        Github-API (A Python Web crawler)
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/URLshortner">
                        URLSHortner (A Node Project)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwoq">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwoq"
                    aria-expanded="false"
                    aria-controls="collapseTwoq"
                  >
                    <i class="fas fa-desktop"></i> Desktop Apps
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwoq"
                class="collapse"
                aria-labelledby="headingTwoq"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p id="skillleft">
                    I make desktop Apps with ELectronjs,Pyqt5,Tkinter
                  </p>
                  <p id="skillleft">Here are some of Apps i created:</p>
                  <ul>
                    <li>
                      <a href="https://github.com/fredysomy/MarkdownIt">
                        MarkdownIt
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/HealthApp">
                        HealthApp
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/YTD-YoutubeSongDownloader">
                        YoutubeSongDownloader
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwow">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwow"
                    aria-expanded="false"
                    aria-controls="collapseTwow"
                  >
                    <i class="fab fa-html5"></i> Front End Development
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwow"
                class="collapse"
                aria-labelledby="headingTwow"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p id="skillleft">
                    I work in the frontend with HTML,CSS,JS,jquery and React JS
                  </p>
                  <p id="skillleft">Here are some of my Works:</p>
                  <ul>
                    <li>
                      <a href="https://github.com/fredysomy/PersonalSite">
                        The website You are seeing
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/SpaceInfo">
                        SpaceInfo (Visualizing Nasa API's)
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/DebuggCovid">
                        debuggcovid
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/Todo-App">
                        Todo -App
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/PersonalBlog">
                        Personal Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i class="fas fa-layer-group"></i> CLI's and Packages
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p id="skillleft">I also make CLI's and Packages in Python</p>
                  <p id="skillleft">Here are some:</p>
                  <ul>
                    <li>
                      <a href="https://github.com/fredysomy/CsvToDeta">
                        CsvToDeta
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/pysonDB">
                        PysonDB (CLI and Package)
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/fredysomy/gitscrpy">
                        gitscrpy (Github Scraper)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
         
          <h3 id="head">
            <font color="cyan">Contact Me</font>
          </h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input
                required
                placeholder="Name"
                type="text"
                className="form-control"
                onChange={this.nameonChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                required
                placeholder="Email "
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={this.mailonChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <textarea
                required
                placeholder="Your Message"
                className="form-control"
                rows="5"
                onChange={this.messageonChange.bind(this)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Email Has Been Sent
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Thanks for sending the message. I will try to contact you as
                  soon as possible. Thanks For your time
                  <br />
                  Check the Promotions and Spam folders also.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />

            <a href="https://linkedin.com/in/fredysomy">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://twitter.com/FredySomy">
              <i id="we" class="fab fa-twitter-square fa-2x"></i>
            </a>

            <a href="mailto:fredysomy@gmail.com">
              <i id="we" class="far fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

//onChange={this.messageonChange.bind(this)}
