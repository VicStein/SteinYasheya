import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <ul>
        <li>
          <h2>Supply Chain & Logistics</h2>
          <p>Steinbock Minerals manages global shipping through its partnership with Yasheya Ltd., ensuring efficient and cost-effective delivery.</p>
          <Link to="/services/yasheya">Explore Our Logistics Innovations</Link>
        </li>
        <li>
          <h2>Processing & Refinement</h2>
          <p>We process minerals to client specifications, ensuring the highest quality standards.</p>
        </li>
        <li>
          <h2>Technical Support</h2>
          <p>Our team provides expert advice and specialized consultations to help you find the right mineral solutions.</p>
            <Link to="/contact">Consult Our Experts</Link>
        </li>
        <li>
          <h2>Customization</h2>
          <p>We offer tailored solutions for industry-specific demands, ensuring you get the exact minerals you need.</p>
        </li>
      </ul>
      <section id="yasheya-services">
        <h2>Yasheya Ltd. Logistics Services</h2>
        <p>As Steinbock Minerals' dedicated logistics partner, Yasheya Ltd. provides worldwide shipping and transportation services for industrial minerals.  Yasheya specializes in:</p>
        <ul>
          <li>Ocean Shipping</li>
          <li>Container Transportation</li>
          <li>Multimodal Logistics Solutions</li>
        </ul>
        <h3>Innovative Logistics Concepts</h3>
        <h4>Cargo Parcel Service (CPS)</h4>
        <p>CPS combines smaller parcels of heavy and light cargoes, offering higher frequency at reduced cost. This optimizes efficiency and reduces overall shipping expenses.</p>
        <h4>bulkconbulk</h4>
        <p>This concept involves loading minerals in bulk into containers for ocean shipping and then transhipping them in bulk onto barges at the destination port. This saves costs and reduces administrative work.</p>
        <Link to="/contact" className="button">Get a Logistics Quote</Link>
      </section>
    </div>
  );
};

export default Services;
