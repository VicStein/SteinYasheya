import React from 'react';
import { Link } from 'react-router-dom';
import KeyDifferentiator from './KeyDifferentiator';
import CapabilityHighlight from './CapabilityHighlight';
import PartnerHighlight from './PartnerHighlight';
import CaseStudy from './CaseStudy';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="container hero-content">
          <h1>Global Industrial Mineral Solutions</h1>
          <p>Connecting leading industries with reliable mineral suppliers worldwide.</p>
          <div className="hero-buttons">
            <div>
              <h3>For Suppliers</h3>
              <Link to="/contact" className="button">Become a Partner</Link>
            </div>
            <div>
              <h3>For Clients</h3>
              <Link to="/request-quote" className="button">Request a Solution</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="key-differentiators">
        <div className="container differentiators-bar">
          <KeyDifferentiator text="35+ Years Experience" />
          <KeyDifferentiator text="Global Operations" />
          <KeyDifferentiator text="Complete Supply Chain" />
          <KeyDifferentiator text="Strategic Hubs" />
        </div>
      </section>

      <section id="supplier-section">
        <div className="container">
          <h2>Partner with Us: Mineral Suppliers</h2>
          <p>Expand your reach and connect with leading industrial clients through Steinbock Minerals' global network.</p>
          <ul>
            <li>Access to a diverse and established client base.</li>
            <li>Enhanced market visibility and brand recognition.</li>
            <li>Streamlined logistics and distribution solutions.</li>
            <li>Opportunities for long-term, strategic partnerships.</li>
          </ul>
          <Link to="/contact" className="button">Become a Supplier Partner</Link>
        </div>
      </section>

      <section id="client-section">
        <div className="container">
          <h2>Your Global Source: Industrial Minerals</h2>
          <p>Secure a reliable supply of high-quality industrial minerals, tailored to your specific needs, with Steinbock Minerals.</p>
          <ul>
            <li>Access to a diverse range of minerals from trusted sources.</li>
            <li>Consistent quality and adherence to industry standards.</li>
            <li>Customized solutions and technical expertise.</li>
            <li>Efficient logistics and on-time delivery.</li>
          </ul>
          <Link to="/request-quote" className="button">Request a Custom Mineral Solution</Link>
        </div>
      </section>

      <section id="capabilities-partners">
        <div className="container">
          <h2>Global Capabilities &amp; Strategic Partnerships</h2>
          <div className="capabilities-grid">
            <CapabilityHighlight title="Sourcing" icon="/src/assets/images/sourcing-icon.png">
              Global network, reliable supply.
            </CapabilityHighlight>
            <CapabilityHighlight title="Processing" icon="/src/assets/images/processing-icon.png">
              State-of-the-art facilities, custom specs.
            </CapabilityHighlight>
            <CapabilityHighlight title="Logistics" icon="/src/assets/images/logistics-icon.png">
              Efficient global shipping solutions.
            </CapabilityHighlight>
          </div>
            <div className="home-partners">
                <PartnerHighlight name="Yasheya Ltd." description="Global Logistics" link="/partners/yasheya" logo="/src/assets/images/yasheya-logo.png" />
            </div>
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
          <div className="cta-buttons">
            <Link to="/contact" className="button">Become a Supplier Partner</Link>
            <Link to="/request-quote" className="button">Request a Custom Solution</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
