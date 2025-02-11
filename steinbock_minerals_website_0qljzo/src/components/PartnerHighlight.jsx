import React from 'react';
    import { Link } from 'react-router-dom';
const PartnerHighlight = ({ name, description, link, logo }) => {
  return (
    <div className="partner-highlight">
      <Link to={link}>
        <img src={logo} alt={name} />
      </Link>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default PartnerHighlight;
