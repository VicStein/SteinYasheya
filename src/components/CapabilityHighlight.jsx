import React from 'react';

const CapabilityHighlight = ({ title, icon, children }) => {
  return (
    <div className="capability-highlight">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default CapabilityHighlight;
