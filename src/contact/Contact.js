import "./Contact.css";

const skills = [
  ["Languages", "Python, JavaScript, Java, Dart"],
  ["Data & Backend", "Trino, BigQuery, PostgreSQL, SQL Server, Redis, Celery, Singer/ELT"],
  ["Tools", "Git/GitHub, Docker, Kubernetes, Unix Shell"],
  ["Frameworks", "Django, Flask, Express.js, Vue.js, Nuxt.js, Spring Boot"],
];

export default function Contact() {
  return (
    <div id="main">
      <div id="stufboutme">
        <h3 id="head">
          <font color="cyan">Skills</font>
        </h3>
        {skills.map(([k, v]) => (
          <div className="skill-group" key={k}>
            <h6>{k}</h6>
            <div className="chips">
              {v.split(", ").map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div id="contact">
        <h3 id="head">
          <font color="cyan">Contact Me</font>
        </h3>
        <div>
          <hr />
          <a href="https://linkedin.com/in/fredysomy">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/fredysomy">
            <i id="we" class="fab fa-github-square fa-2x"></i>
          </a>
          <a href="https://x.com/FredySomy">
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
