export default function ProjectCard({ project }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
}
