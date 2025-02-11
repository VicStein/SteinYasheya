import React from 'react';

const ProjectCard = ({ title, subtitle, image, altText, children }) => {
  return (
    <div className="project-card">
      <img src={image} alt={altText} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <div className="project-card-content">
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
