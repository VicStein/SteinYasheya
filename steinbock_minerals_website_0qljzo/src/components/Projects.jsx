import React from 'react';
import ProjectCard from './ProjectCard';
import StrategicAdvantage from './StrategicAdvantage';
import ProjectsContact from './ProjectsContact';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1>Strategic Projects Across Two Continents</h1>
          <p>Advancing Global Barite Supply Through Strategic Processing Hubs</p>
        </div>
      </section>

      <section className="projects-overview">
        <div className="container">
          <div className="projects-grid">
            <ProjectCard
              title="NKOB Project - Morocco"
              subtitle="Advanced Multi-Grade Processing Hub"
              image="/src/assets/images/nkob-project.jpg" // Replace with actual image
              altText="NKOB Project in Morocco"
            >
              <ul>
                <li>Strategically located in Morocco's mineral-rich Atlas region</li>
                <li>Advanced processing facility producing specialty and API-grade barite</li>
                <li>Multi-source raw material strategy ensuring reliable supply</li>
                <li>Serving European markets with reduced shipping times</li>
                <li>State-of-the-art optical sorting and flotation technology</li>
                <li>Focus on high-value specialty products for medical imaging and electronics</li>
              </ul>
            </ProjectCard>
            <ProjectCard
              title="GUYANA Project - South America"
              subtitle="Strategic Processing &amp; Distribution Hub"
              image="/src/assets/images/guyana-project.jpg" // Replace with actual image
              altText="Guyana Project in South America"
            >
              <ul>
                <li>Positioned in rapidly growing South American market</li>
                <li>Dedicated API-grade processing facility</li>
                <li>Efficient port-based logistics infrastructure</li>
                <li>Serving expanding oil and gas sector</li>
                <li>Reduced transportation costs for regional customers</li>
                <li>Just-in-time delivery capabilities</li>
              </ul>
            </ProjectCard>
          </div>
        </div>
      </section>

      <section className="strategic-advantages">
        <div className="container">
          <div className="advantages-grid">
            <StrategicAdvantage
              icon="/src/assets/images/globe-icon.png" // Replace with actual icon
              title="Strategic Market Access"
            >
              Dual-continent presence providing efficient access to European and American markets. Reduced shipping times and costs through strategic location selection. Ability to serve diverse industry needs from specialty applications to energy sector requirements.
            </StrategicAdvantage>
            <StrategicAdvantage
              icon="/src/assets/images/gear-icon.png" // Replace with actual icon
              title="Advanced Processing"
            >
              State-of-the-art facilities incorporating the latest processing technologies. Comprehensive quality control systems ensuring consistent product specifications. Multi-grade production capabilities meeting diverse industry requirements.
            </StrategicAdvantage>
            <StrategicAdvantage
              icon="/src/assets/images/leaf-icon.png" // Replace with actual icon
              title="Future-Focused Growth"
            >
              Commitment to environmental stewardship and community development. Progressive infrastructure development supporting long-term growth. Investment in sustainable practices and technologies.
            </StrategicAdvantage>
          </div>
        </div>
      </section>

      <section className="professional-standards">
        <div className="container">
          <div className="standards-grid">
            <div>
              <h2>Quality Assurance</h2>
              <p>Our facilities maintain rigorous quality control standards, ensuring consistent product specifications across all grades. Advanced testing laboratories and continuous monitoring systems guarantee reliability.</p>
            </div>
            <div>
              <h2>Environmental Responsibility</h2>
              <p>Operations designed with environmental sustainability in mind, incorporating efficient resource usage and progressive land management practices. Strong focus on community engagement and local development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-contact">
        <div className="container">
          <h2>Partner With Us</h2>
          <p>Join us in advancing the global barite industry through strategic partnerships and innovative solutions.</p>
          <p>Contact our team to discuss collaboration opportunities.</p>
          <ProjectsContact />
        </div>
      </section>
    </div>
  );
};

export default Projects;
