import react, { Component } from "react";
import "./Projects.css";
import proj from "../projects_conf/projects";
import Particles from "react-particles-js";
export default class Projects extends Component {
  render() {
    return (
      <div>
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
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
        <h3 id="head" align="center">
          My{" "}
          <u>
            <font color="cyan">Projects</font>
          </u>
        </h3>
        {proj.proje.map((projects) => {
          return (
            <div id="main">
              <div className="maindiv">
                <img className="img-div" src={projects.img} />

                <div className="content-div">
                  <h3>
                    <b>
                      {projects.name}{" "}
                      <img alt="GitHub Repo stars" src={projects.stars}></img>
                    </b>
                  </h3>
                  <p>{projects.desc}</p>
                  <br></br>
                  <p>{projects.desc2}</p>
                  <p id="tech">{projects.tech}</p>
                  <a href={projects.src}>
                    <button className="btn btn-outline-primary btn-sm bttn">
                      Source Code
                    </button>
                  </a>
                  <a href={projects.demo}>
                    <button className="btn btn-outline-primary btn-sm bttn">
                      Documentation
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
