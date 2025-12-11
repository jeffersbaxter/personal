import { useState } from 'react';
import Image from 'next/image';
// import './ProjectCard.css';


export default function ProjectCard({ imageSrc, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project-card-wrapper">
      <div 
        className="project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div className={`project-card-image ${isHovered ? 'hovered' : ''}`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="image"
            priority
          />
        </div>
        
        {/* Dark Overlay */}
        <div className={`project-card-overlay ${isHovered ? 'hovered' : ''}`} />
        
        {/* Title */}
        <div className="project-card-content">
          <h2 className={`project-card-title ${isHovered ? 'hovered' : ''}`}>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}