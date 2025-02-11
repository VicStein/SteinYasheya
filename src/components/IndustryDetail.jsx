import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CaseStudyHighlight from './CaseStudyHighlight';

const IndustryDetail = () => {
  const { industryName } = useParams();

    const industryDetails = {
        'oil-and-gas': {
            name: 'Oil & Gas',
            description: 'Steinbock Minerals provides high-quality minerals essential for oil and gas drilling operations. Our barite, bentonite, and other oilfield chemicals ensure consistent fluid quality and help prevent drilling bursts.',
            painPoints: [
                "High-pressure environments requiring reliable weighting agents.",
                "Need for consistent fluid quality to prevent wellbore instability.",
                "Costly downtime due to drilling fluid failures.",
                "Logistical challenges in delivering materials to remote drilling sites."
            ],
            featuredMinerals: ['Barite', 'Bentonite', 'Other Oilfield Minerals & Chemicals'],
            partner: null,
            caseStudy: {
                title: "Reliable Barite Supply for Major Oil & Gas Project",
                description: "Steinbock Minerals ensured a consistent and timely supply of high-grade barite for a major offshore drilling project, preventing costly delays and ensuring operational efficiency.",
                results: "Zero downtime due to supply issues, 100% on-time delivery"
            }
        },
        'steel-and-metals': {
            name: 'Steel & Metals',
            description: 'We supply essential minerals for steelmaking (bauxite, magnesia, coal) and non-ferrous metals (zinc, copper). Our reliable supply chain ensures uninterrupted production lines for our clients.',
            painPoints: [
                "Need for high-purity raw materials to meet stringent quality standards.",
                "Consistent supply to maintain continuous production.",
                "Cost pressures requiring efficient sourcing and logistics.",
                "Demand for specialized refractory materials for high-temperature processes."
            ],
            featuredMinerals: ['Bauxite', 'Magnesia', 'Coal', 'Anthracite'],
            partner: { name: 'Komateq', description: 'Partner with Komateq for advanced refractory solutions', link: '/partners/komateq' },
            caseStudy: {
                title: "Streamlined Bauxite Supply for Aluminum Giant",
                description: "Steinbock Minerals optimized the bauxite supply chain for a leading aluminum producer, reducing delivery times by 15% and costs by 8%.",
                results: "15% faster delivery, 8% cost reduction"
            }
        },
        'battery-and-clean-energy': {
            name: 'Battery & Clean Energy',
            description: 'Steinbock Minerals is positioned to support the growing battery and clean energy markets. We are exploring potential expansions in battery minerals to meet the demands of this rapidly evolving sector.',
            painPoints: [
                "Growing demand for battery minerals (lithium, cobalt, nickel, etc.).",
                "Need for sustainable and ethically sourced materials.",
                "Stringent purity requirements for battery-grade minerals.",
                "Supply chain security and diversification."
            ],
            featuredMinerals: [], // Add relevant minerals if expanding into this area
            partner: null,
            caseStudy: null,
        },
        'chemical-and-industrial-manufacturing': {
            name: 'Chemical & Industrial Manufacturing',
            description: 'We offer a range of minerals, including fluorspar, barite, and calcium carbonate, for various chemical and industrial manufacturing processes. Our focus is on consistent purity and supply reliability.',
            painPoints: [
                "Need for consistent chemical composition and purity.",
                "Reliable supply to avoid production disruptions.",
                "Competitive pricing to manage production costs.",
                "Compliance with environmental regulations."
            ],
            featuredMinerals: ['Fluorspar', 'Barite', 'Calcium Carbonate'],
            partner: null,
            caseStudy: null,
        },
        'construction-and-infrastructure': {
            name: 'Construction & Infrastructure',
            description: 'Steinbock Minerals supplies minerals for cement, glass, and other construction materials. Our global supply chain ensures minimal downtime for large-scale projects.',
            painPoints: [
                "Demand for large volumes of consistent-quality materials.",
                "Timely delivery to meet project deadlines.",
                "Competitive pricing for large-scale projects.",
                "Need for specialized materials for specific applications (e.g., high-strength concrete)."
            ],
            featuredMinerals: ['Magnesia', 'Bauxite', 'Anthracite'],
            partner: { name: 'Komateq', description: 'Partner with Komateq for advanced refractory solutions', link: '/partners/komateq' },
            caseStudy: null
        },
    };

  const industry = industryDetails[industryName];

    if (!industry) {
        return <div>Industry not found.</div>;
    }

  return (
    <div className="container">
      <h1>{industry.name}</h1>
      <p>{industry.description}</p>

        <h2>Key Industry Challenges</h2>
        <ul>
            {industry.painPoints.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>

      {industry.partner && (
        <p><strong>{industry.partner.description}</strong> <Link to={industry.partner.link}>Learn More</Link></p>
      )}
      <h2>Featured Minerals</h2>
      <ul>
        {industry.featuredMinerals.map((mineral) => (
          <li key={mineral}><Link to={`/products/${mineral.toLowerCase().replace(/ /g, '-')}`}>{mineral}</Link></li>
        ))}
      </ul>
      {industry.caseStudy && (
          <CaseStudyHighlight
            title={industry.caseStudy.title}
            description={industry.caseStudy.description}
            industry={industry.name}
            results={industry.caseStudy.results}
          />
      )}
      <Link to="/contact" className="button">Contact Us for a Custom Industry Solution</Link>
      <Link to="/request-quote" className="button">Request a Consultation</Link>
    </div>
  );
};

export default IndustryDetail;
