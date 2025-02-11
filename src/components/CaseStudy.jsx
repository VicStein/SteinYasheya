import React from 'react';

const CaseStudy = ({ title, children }) => {
  return (
    <div className="case-study">
      <h3>{title}</h3>
        {children}
    </div>
  );
};

export default CaseStudy;
