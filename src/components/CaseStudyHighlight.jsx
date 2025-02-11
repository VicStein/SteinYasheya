import React from 'react';

const CaseStudyHighlight = ({ title, description, industry, results }) => {
  return (
    <div className="case-study">
      <h3>{title}</h3>
      <p><strong>Industry:</strong> {industry}</p>
      <p>{description}</p>
      <p><strong>Results:</strong> {results}</p> {/* Keep results for impact */}
    </div>
  );
};

export default CaseStudyHighlight;
