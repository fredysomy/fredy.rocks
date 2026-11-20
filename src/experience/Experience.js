import "./Experience.css";

const jobs = [
  {
    company: "Peliqan",
    role: "Software Engineer",
    when: "May 2025 – Present",
    points: [
      "Built the access-control layer for a SQL query engine that runs queries across multiple databases, enforcing per-user permissions at schema, database, and account level, including through nested sub-queries.",
      "Hardened pipeline execution and the SQL query layer so every customer's pipelines and queries run fully isolated from other customers.",
      "Designed the scheduled and on-demand replication engine and added BigQuery, SQL Server, and Microsoft Fabric as targets, moving tables between customer databases and the data warehouse in both directions.",
      "Made the high-throughput BigQuery loading path production-ready, reaching ~235K rows/min (187 MB/min) on million-row loads.",
      "Built the reliability layer for the Celery/Redis job system behind all scheduled pipelines: duplicate-run prevention, cleanup of jobs killed by deploys or crashes, and stuck-run detection.",
    ],
  },
  {
    company: "Techgentsia Software Technologies",
    role: "Software Developer",
    when: "Feb 2024 – May 2025",
    points: [
      "Built a meeting-room management platform for the VCONSOL video-conferencing suite, letting members view and book rooms across a building.",
      "Migrated the platform's backend from Node.js to Spring Boot.",
      "Designed a scheduling algorithm that finds free slots around existing bookings and prevents double-bookings.",
      "Implemented role-based access control for room administration and bookings.",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience">
      <h2 className="sub">Experience</h2>
      {jobs.map((j) => (
        <div className="job" key={j.company}>
          <h4>
            {j.role} @ <font color="cyan">{j.company}</font>
          </h4>
          <small>{j.when}</small>
          <ul>
            {j.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
