'use client';

import Link from 'next/link';
import ProjectCard from './ProjectCard';

export default function ProjectCardLink({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <ProjectCard 
        imageSrc={project.imageSrc}
        title={project.title}
      />
    </Link>
  );
}