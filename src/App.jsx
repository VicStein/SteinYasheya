import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Industries from './components/Industries';
import Services from './components/Services';
import CSR from './components/CSR';
import News from './components/News';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import IndustryDetail from './components/IndustryDetail';
import PartnerPage from './components/PartnerPage';
import RequestQuote from './components/RequestQuote';
import PartnerInquiry from './components/PartnerInquiry';
import GeneralInquiry from './components/GeneralInquiry';
import NewsDetail from './components/NewsDetail';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div id="branding">
            <h1><Link to="/">Steinbock Minerals</Link></h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/csr">CSR</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productName" element={<ProductDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:industryName" element={<IndustryDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners/:partnerName" element={<PartnerPage />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/partner-inquiry" element={<PartnerInquiry />} />
        <Route path="/general-inquiry" element={<GeneralInquiry />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>

      <footer>
        <p>Steinbock Minerals, Copyright &copy; {new Date().getFullYear()}</p>
        <Link to="/partner-inquiry">Partner with Us</Link>
      </footer>
    </div>
  );
}

export default App;
