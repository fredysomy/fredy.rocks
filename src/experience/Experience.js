import "./Experience.css";

const jobs = [
  {
    company: "Peliqan",
    role: "Software Engineer",
    when: "May 2025 – Present",
    points: [
      ["Query access control", "Built the permission layer for a SQL query engine that runs across multiple databases, enforcing per-user access at schema, database and account level, including through nested sub-queries."],
      ["Tenant isolation", "Hardened pipeline execution and the SQL query layer so every customer's pipelines and queries run fully isolated from other customers."],
      ["Replication engine", "Designed scheduled and on-demand replication with BigQuery, SQL Server and Microsoft Fabric targets, moving tables between customer databases and the warehouse in both directions."],
      ["High-throughput loads", "Made the BigQuery loading path production-ready at ~235K rows/min (187 MB/min) on million-row loads."],
      ["Job reliability", "Built the reliability layer for the Celery/Redis job system behind every scheduled pipeline: duplicate-run prevention, cleanup after crashes and deploys, and stuck-run detection."],
    ],
    tech: ["Python", "Django", "Trino", "BigQuery", "PostgreSQL", "Celery", "Redis", "Kubernetes"],
  },
  {
    company: "Techgentsia Software Technologies",
    role: "Software Developer",
    when: "Feb 2024 – May 2025",
    points: [
      ["Room booking platform", "Built meeting-room management for the VCONSOL video-conferencing suite, letting members view and book rooms across a building."],
      ["Backend migration", "Migrated the platform's backend from Node.js to Spring Boot."],
      ["Scheduling", "Designed an algorithm that finds free slots around existing bookings and prevents double-bookings."],
      ["Access control", "Implemented role-based permissions for room administration and bookings."],
    ],
    tech: ["Java", "Spring Boot", "Node.js"],
  },
];

export default function Experience() {
  return (
    <div id="experience">
      <h3 id="head" align="center">
        My{" "}
        <u>
          <font color="cyan">Experience</font>
        </u>
      </h3>
      <div className="timeline">
        {jobs.map((j) => (
          <div className="job" key={j.company}>
            <span className="dot" />
            <div className="job-card">
              <div className="job-top">
                <div>
                  <h4>{j.role}</h4>
                  <h5>{j.company}</h5>
                </div>
                <span className="when">{j.when}</span>
              </div>
              <ul>
                {j.points.map(([title, text]) => (
                  <li key={title}>
                    <b>{title}.</b> {text}
                  </li>
                ))}
              </ul>
              <div className="job-tech">
                {j.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
