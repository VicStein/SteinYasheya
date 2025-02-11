import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { name: 'Barite', link: 'barite', description: 'High-density weighting agent for drilling fluids.', image: 'barite.jpg' },
    { name: 'Bauxite', link: 'bauxite', description: 'Primary ore for aluminum production.', image: 'bauxite.jpg' },
    { name: 'Magnesia', link: 'magnesia', description: 'Versatile mineral for refractories and chemical processing.', image: 'magnesia.jpg' },
    { name: 'Anthracite', link: 'anthracite', description: 'High-grade coal for steelmaking and water filtration.', image: 'anthracite.jpg' },
    { name: 'Ilmenite', link: 'ilmenite', description: 'Source of titanium dioxide for pigments and metals.', image: 'ilmenite.jpg' },
    { name: 'Fluorspar', link: 'fluorspar', description: 'Essential for hydrofluoric acid and steelmaking.', image: 'fluorspar.jpg' },
    { name: 'Coal', link: 'coal', description: 'Energy source for power generation and industrial heating.', image: 'coal.jpg' },
    { name: 'Other Oilfield Minerals & Chemicals', link: 'oilfield-minerals', description: 'Bentonite, calcium carbonate, and more.', image: 'oilfield-minerals.jpg' },
  ];

  return (
    <div className="container">
      <h1>Our Products</h1>
      <p>Steinbock Minerals offers a wide range of high-quality industrial minerals sourced from around the globe.</p>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.link}>
            <img src={`/src/assets/images/${product.image}`} alt={product.name} />
            <h3><Link to={`/products/${product.link}`}>{product.name}</Link></h3>
            <p>{product.description}</p>
            <Link to="/request-quote" className="button">Request a Quote</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
