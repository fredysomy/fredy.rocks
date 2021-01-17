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
      body: JSON.stringify({ emails: this.state.email }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then();
  }
  render() {
    return (
      <div id="main">
        <div id="contact">
          <h3 id="head">Contact Me</h3>
          <div className="form-group">
            <input
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
        </div>
        <div id="stufboutme">
          <h3 id="head">My Skills</h3>
          <ul>
            <li>Passionate Web Developer</li>
          </ul>
        </div>
      </div>
    );
  }
}

//onChange={this.messageonChange.bind(this)}
