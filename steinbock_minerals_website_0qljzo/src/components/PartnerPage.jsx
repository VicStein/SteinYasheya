import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PartnerPage = () => {
    const { partnerName } = useParams();

    const partners = {
        yasheya: {
            name: 'Yasheya Ltd.',
            title: 'Yasheya Ltd.: Your Global Logistics Partner',
            description: 'Steinbock Minerals partners with Yasheya Ltd. to provide unparalleled logistics solutions for industrial minerals. Yasheya\'s expertise in bulk shipping, containerization, and innovative concepts like Cargo Parcel Service (CPS) ensure your materials arrive on time and within budget.',
            benefits: [
                'Reduced shipping costs through optimized cargo consolidation.',
                'Faster delivery times with strategic global routing.',
                'Real-time tracking and transparent communication.',
            ],
            services: [
              "Ocean Shipping",
              "Container Transportation",
              "Multimodal Logistics",
              "Cargo Parcel Service (CPS)",
              "bulkconbulk"
            ]
        },
        steinbockpoland: {
            name: 'Steinbock Poland',
            title: 'Steinbock Poland: Competence Center for Eastern Europe',
            description: 'Steinbock Poland serves as a vital hub for our operations in Eastern Europe, providing expertise in production, processing, trading, and logistics.',
            benefits: [
                'Deep understanding of the Eastern European market.',
                'Streamlined logistics and distribution within the region.',
                'Local expertise in regulatory compliance and market dynamics.',
            ],
        },
        komateq: {
            name: 'Komateq',
            title: 'Komateq: Advanced Refractory Solutions',
            description: 'In partnership with Komateq, Steinbock Minerals offers cutting-edge refractory products for the cement, glass, and steel industries.',
            benefits: [
                'High-performance refractory materials for demanding applications.',
                'Expert technical support and customized solutions.',
                'Improved efficiency and reduced downtime for industrial processes.',
            ],
        },
        cstar: {
            name: 'C-STAR Resources Ltd.',
            title: 'C-STAR Resources Ltd.: High-Grade Anthracite Sourcing',
            description: 'C-STAR Resources, a sister company of Steinbock Minerals, specializes in sourcing and processing high-grade anthracite to meet your specific requirements.',
            benefits: [
                'Reliable supply of high-quality anthracite.',
                'Tailored processing to meet specific customer needs.',
                'Expertise in anthracite applications and market trends.',
            ],
        },
    };

    const partner = partners[partnerName];

    if (!partner) {
        return <div>Partner not found.</div>;
    }

  return (
    <div className="container">
      <h1>{partner.title}</h1>
      <p>{partner.description}</p>
      <h2>Key Benefits</h2>
      <ul>
        {partner.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      {partner.services && (
        <>
          <h2>Services</h2>
          <ul>
            {partner.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </>
      )}
      <Link to="/contact" className="button">Inquire about {partner.name}'s Services</Link>
    </div>
  );
};

export default PartnerPage;
