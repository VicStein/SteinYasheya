import React from 'react';
import { Link } from 'react-router-dom';

const IndustrySolution = ({ title, icon, link, children }) => {
  return (
    <div className="industry-solution">
      <img src={icon} alt={title} />
      <h3><Link to={link}>{title}</Link></h3>
      <p>{children}</p>
      <Link to={link} className="button">Explore Solutions</Link>
    </div>
  );
};

export default IndustrySolution;
