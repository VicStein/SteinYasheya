import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductSpecs from './ProductSpecs';
import { productSpecs } from '../data/productSpecs';

const ProductDetail = () => {
  const { productName } = useParams();

  const productDetails = {
    barite: {
      name: 'Barite',
      image: 'barite.jpg',
      properties: 'High density, inertness, chemical stability',
      industries: 'Oil & Gas, Chemical, Paint',
      applications: 'Drilling fluids, weighting agent, filler',
      advantages: 'Consistent quality, reliable supply, competitive pricing',
    },
    bauxite: {
      name: 'Bauxite',
      image: 'bauxite.jpg',
      properties: 'High alumina content, low iron content',
      industries: 'Aluminum, Cement',
      applications: 'Alumina production, cement manufacturing',
      advantages: 'High-grade ore, efficient processing, global sourcing',
    },
    magnesia: {
        name: 'Magnesia',
        image: 'magnesia.jpg',
        properties: 'High refractoriness, chemical resistance',
        industries: 'Steel, Cement, Glass',
        applications: 'Refractory materials, chemical processing',
        advantages: 'Multiple grades (caustic calcined, dead burned, fused), tailored solutions',
    },
    anthracite: {
        name: 'Anthracite',
        image: 'anthracite.jpg',
        properties: 'High carbon content, low sulfur content',
        industries: 'Steel, Water Filtration',
        applications: 'Steelmaking, water purification',
        advantages: 'High-grade coal, sourced from reliable suppliers',
    },
    ilmenite: {
        name: 'Ilmenite',
        image: 'ilmenite.jpg',
        properties: 'High titanium dioxide content',
        industries: 'Pigment, Titanium Metal',
        applications: 'Titanium dioxide production, welding electrodes',
        advantages: 'Consistent quality, global supply chain',
    },
    fluorspar: {
        name: 'Fluorspar',
        image: 'fluorspar.jpg',
        properties: 'High calcium fluoride content',
        industries: 'Chemical, Steel',
        applications: 'Hydrofluoric acid production, steelmaking flux',
        advantages: 'Various grades, reliable sourcing',
    },
    coal: {
        name: 'Coal',
        image: 'coal.jpg',
        properties: 'High energy content',
        industries: 'Energy, Industrial Heating',
        applications: 'Power generation, industrial processes',
        advantages: 'Competitive pricing, large-scale supply',
    },
    'oilfield-minerals': {
        name: 'Other Oilfield Minerals & Chemicals',
        image: 'oilfield-minerals.jpg',
        properties: 'Various properties depending on the mineral',
        industries: 'Oil & Gas',
        applications: 'Drilling fluids, well completion',
        advantages: 'Comprehensive range of products, tailored solutions',
    },
  };

  const product = productDetails[productName];

  if (!product) {
    return <div>Product not found.</div>;
  }

    const specs = productSpecs[productName] || {};

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={`/src/assets/images/${product.image}`} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }}/>
      <p><strong>Key Properties:</strong> {product.properties}</p>
      <p><strong>Primary Industries:</strong> {product.industries}</p>
      <p><strong>Potential Applications:</strong> {product.applications}</p>
      <p><strong>Competitive Advantages:</strong> {product.advantages}</p>

      <ProductSpecs specs={specs} />

      <Link to="/request-quote" className="button">Request a Quote</Link>
      <a href={`/downloads/${productName}-brochure.pdf`} download className="button">Download Brochure</a>
    </div>
  );
};

export default ProductDetail;
