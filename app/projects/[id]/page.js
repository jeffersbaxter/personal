import EngineeringProject from '@/components/EngineeringProject';
import { getAllProjects, getProjectById } from '@/lib/projects';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map(p => ({ id: p.id }));
}

export default async function ProjectByIdPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  return (
    <EngineeringProject 
      title={project.title} 
      description={project.description} 
      projectUrl={project.projectUrl} 
      skills={project.skills} 
      imageSrc={project.imageSrc} 
    />
  );
}