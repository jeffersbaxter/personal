import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function EngineeringProject({ 
  title, 
  description, 
  imageSrc,
  projectUrl,
  skills,
  imageAlt = 'Project image'
}) {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <article>
      <div className="overflow-hidden rounded-lg bg-white p-8 shadow-lg">
        {/* Project Title - Full Width */}
        <Link 
          href={projectUrl}
          className="mb-6 block transition-colors"
        >
          <h3 className='mgb-3'>
            {title}
          </h3>
          <p className='fs-italic mgb-3 text-10'>{projectUrl}</p>
        </Link>
        
        {/* Description (Left) and Image (Right) */}
        <div className="flex gap-8">
          {/* Description */}
          <div className="flex-1">
            <p className="text-13 pd-r-13 leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
          
          {/* Image Container - Fixed Size */}
          <div className="project-img-container shrink-0 overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className='mgt-13'>
            {/* <span>Skills:</span> */}
            <ul className='no-type text-13 flex'>
                <li>Skills: </li>
                {skills.map((skill, index) => (
                    <li key={`${skill}_${index}`} className='pd-0-8'>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
      </div>
      </article>
    </div>
  );
}

// Example usage in a page:
// import EngineeringProject from '@/components/EngineeringProject';
//
// export default function ProjectPage() {
//   return (
//     <EngineeringProject
//       title="Sustainable Bridge Design"
//       description="This innovative bridge project incorporates eco-friendly materials and cutting-edge engineering techniques to minimize environmental impact while maximizing structural integrity. The design features a cable-stayed system that reduces material usage by 30% compared to traditional designs."
//       imageSrc="/projects/bridge.png"
//       projectUrl="/projects/sustainable-bridge"
//       imageAlt="Sustainable bridge over river"
//     />
//   );
// }