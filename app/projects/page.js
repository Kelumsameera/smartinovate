import ProjectService from "../services/ProjectService";
import ProjectCard from "../components/ProjectCard";

export default async function ProjectsPage() {
  const projectService = new ProjectService();
  const projects = await projectService.fetchProjects();

  return (
    <section>
      <h1>Our Projects</h1>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
