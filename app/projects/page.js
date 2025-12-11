import { getAllProjects } from '@/lib/projects';
import ProjectCardLink from '@/components/ProjectCardLink';

export default function ProjectsPage() {
  const projects = getAllProjects();
  
  return (
    <div>
        <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCardLink key={project.id} project={project} />
      ))}
    </div>
  );
}