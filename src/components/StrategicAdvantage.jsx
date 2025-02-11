import React from 'react';

const StrategicAdvantage = ({ icon, title, children }) => {
  return (
    <div className="strategic-advantage">
      <img src={icon} alt={title} className="advantage-icon" />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default StrategicAdvantage;
