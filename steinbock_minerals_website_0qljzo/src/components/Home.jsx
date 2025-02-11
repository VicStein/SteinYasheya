import React from 'react';
import { Link } from 'react-router-dom';
import KeyDifferentiator from './KeyDifferentiator';
import IndustrySolution from './IndustrySolution';
import CapabilityHighlight from './CapabilityHighlight';
import PartnerHighlight from './PartnerHighlight';
import CaseStudy from './CaseStudy';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="container hero-content">
          <h1>Global Industrial Mineral Solutions</h1>
          <p>Connecting buyers and sellers worldwide with integrated sourcing, processing, logistics, and quality control.</p>
          <Link to="/contact" className="button">Discuss Your Requirements</Link>
        </div>
      </section>

      <section id="key-differentiators">
        <div className="container differentiators-bar">
          <KeyDifferentiator text="Global Network: Connecting Buyers & Sellers" />
          <KeyDifferentiator text="End-to-End Quality Control" />
          <KeyDifferentiator text="Optimized Global Logistics" />
          <KeyDifferentiator text="35+ Years Experience" />
        </div>
      </section>

      <section id="how-we-add-value">
        <div className="container">
          <h2>How We Add Value</h2>
          <div className="value-proposition-content">
            <div className="value-for-sellers">
              <h3>For Suppliers</h3>
              <ul>
                <li>Expand your global market reach.</li>
                <li>Benefit from efficient, cost-effective logistics.</li>
                <li>Ensure reliable payment and secure transactions.</li>
                <li>Access a wider network of qualified buyers.</li>
              </ul>
            </div>
            <div className="value-for-buyers">
              <h3>For Buyers</h3>
              <ul>
                <li>Access a consistent supply of high-quality minerals.</li>
                <li>Benefit from optimized sourcing and competitive pricing.</li>
                <li>Receive tailored solutions to meet your specific needs.</li>
                <li>Rely on our expertise in global logistics and quality control.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="industry-solutions">
        <div className="container">
          <h2>Key Industry Solutions</h2>
          <div className="industry-solutions-grid">
            <IndustrySolution title="Oil & Gas" icon="/src/assets/images/oil-icon.png" link="/industries/oil-and-gas">
              Reliable minerals for drilling efficiency.
            </IndustrySolution>
            <IndustrySolution title="Steel & Metals" icon="/src/assets/images/steel-icon.png" link="/industries/steel-and-metals">
              Essential minerals for steel production.
            </IndustrySolution>
            <IndustrySolution title="Chemical Manufacturing" icon="/src/assets/images/chemical-icon.png" link="/industries/chemical-and-industrial-manufacturing">
              High-purity minerals for chemical processes.
            </IndustrySolution>
          </div>
           <Link to="/industries" className="button">View All Industries</Link>
        </div>
      </section>

      <section id="global-capabilities">
        <div className="container">
          <h2>Our Capabilities</h2>
          <div className="capabilities-grid">
            <CapabilityHighlight title="Sourcing" icon="/src/assets/images/sourcing-icon.png">
              Global network, reliable supply, expanding market reach for suppliers.
            </CapabilityHighlight>
            <CapabilityHighlight title="Processing" icon="/src/assets/images/processing-icon.png">
              State-of-the-art facilities, custom specs, rigorous quality control for all parties.
            </CapabilityHighlight>
            <CapabilityHighlight title="Logistics" icon="/src/assets/images/logistics-icon.png">
              Efficient global shipping, optimized for cost and speed.
            </CapabilityHighlight>
          </div>
        </div>
      </section>

      <section id="strategic-partners">
        <div className="container">
          <h2>Strategic Partners</h2>
          <div className="partners-grid">
            <PartnerHighlight name="Yasheya Ltd." description="Global Logistics" link="/partners/yasheya" logo="/src/assets/images/yasheya-logo.png" />
            {/* <PartnerHighlight name="Steinbock Poland" description="Eastern Europe Hub" link="/partners/steinbockpoland" logo="/src/assets/images/steinbockpoland-logo.png" />
            <PartnerHighlight name="KOMATEQ" description="Refractory Solutions" link="/partners/komateq" logo="/src/assets/images/komateq-logo.png" /> */}
          </div>
           <Link to="/partners" className="button">View All Partners</Link>
        </div>
      </section>

      <section id="business-cases">
        <div className="container">
          <h2>Business Case Highlights</h2>
          <div className="case-studies-grid">
            <CaseStudy title="Supply Chain Optimization">
                <p>Improved supply reliability and reduced costs for a major industrial client.</p>
            </CaseStudy>
            <CaseStudy title="Quality Assurance">
                <p>Delivered a specialized mineral with stringent purity specifications, meeting client needs.</p>
            </CaseStudy>
          </div>
        </div>
      </section>

      <section id="cta-section">
        <div className="container cta-content">
          <h2>Partner with Steinbock Minerals</h2>
          <Link to="/contact" className="button">Get a Custom Solution</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
