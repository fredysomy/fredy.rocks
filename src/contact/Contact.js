import react, { Component } from "react";
import "./Contact.css";
import axios from "axios";
import $ from "jquery";
import Particles from "react-particles-js";

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
      body: JSON.stringify({ emails: this.state.email }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then(window.$("#exampleModal").modal("show"));
  }
  render() {
    return (
      <div id="main">
        <div id="contact">
          <Particles
            params={{
              particles: {
                number: {
                  value: 90,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                },
                line_linked: {
                  enable: false,
                },
              },
            }}
            id="part"
          />
          <h3 id="head"><font color="cyan">Contact Me</font></h3>
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
              placeholder="Email "
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={this.mailonChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-control"
              rows="5"
              onChange={this.messageonChange.bind(this)}
            ></textarea>
          </div>
          <button
            onClick={this.handleSubmit.bind(this)}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
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
        <div id="stufboutme">
          <h3 id="head"><font color="cyan">Services I offer</font></h3>
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
                <div class="card-body">sd</div>
              </div>
            </div>
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
                    <i class="fas fa-desktop"></i> Desktop Apps
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">sd</div>
              </div>
            </div>
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
                    <i class="fab fa-html5"></i> FrontEnd Development
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">sd</div>
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
                    <i class="fas fa-layer-group"></i> Full Stack Developemt
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">sdsd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//onChange={this.messageonChange.bind(this)}
