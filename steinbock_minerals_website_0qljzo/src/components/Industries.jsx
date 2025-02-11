import React from 'react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    { name: 'Oil & Gas', link: 'oil-and-gas', description: 'Reliable mineral solutions for drilling and production.', image: 'oil-and-gas.jpg' },
    { name: 'Steel & Metals', link: 'steel-and-metals', description: 'Essential minerals for steelmaking and metal production.', image: 'steel-and-metals.jpg' },
    { name: 'Battery & Clean Energy', link: 'battery-and-clean-energy', description: 'Supporting the growth of renewable energy technologies.', image: 'battery-and-clean-energy.jpg' },
    { name: 'Chemical & Industrial Manufacturing', link: 'chemical-and-industrial-manufacturing', description: 'High-purity minerals for diverse manufacturing processes.', image: 'chemical-and-industrial-manufacturing.jpg' },
    { name: 'Construction & Infrastructure', link: 'construction-and-infrastructure', description: 'Materials for building the world of tomorrow.', image: 'construction-and-infrastructure.jpg' },
  ];

  return (
    <div className="container">
      <h1>Industries We Serve</h1>
      <p>Steinbock Minerals provides tailored mineral solutions and supply chain expertise to a wide range of industries, addressing their unique challenges and requirements.</p>
      <div className="industries-grid">
        {industries.map((industry) => (
          <div className="industry-card" key={industry.link}>
            <img src={`/src/assets/images/${industry.image}`} alt={industry.name} />
            <h3><Link to={`/industries/${industry.link}`}>{industry.name}</Link></h3>
            <p>{industry.description}</p>
            <Link to={`/industries/${industry.link}`} className="button">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
