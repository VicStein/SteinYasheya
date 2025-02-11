import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        inquiry: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.company || !formData.email || !formData.inquiry) {
          alert('Please fill in all required fields.');
          return;
        }
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            industry: '',
            inquiry: '',
        });
    };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Get in touch with Steinbock Minerals for inquiries, quotes, or partnership opportunities.</p>

      <form onSubmit={handleSubmit}>
        <FormField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name"/>
        <FormField label="Company" type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Enter your company name"/>
        <FormField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email"/>
        <FormField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange}  placeholder="Enter your phone number"/>
        <FormField label="Industry" type="text" name="industry" value={formData.industry} onChange={handleChange}  placeholder="Enter your industry"/>
        <FormField label="Inquiry" type="textarea" name="inquiry" value={formData.inquiry} onChange={handleChange} required placeholder="Enter your inquiry" textarea/>

        <button type="submit" className='button'>Submit</button>
      </form>

      <h2>Contact Details</h2>
      <p>Phone: +41 (0)41 710 61 51</p> {/* Replace with actual phone number */}
      <p>Email: info@steinbockminerals.com</p> {/* Replace with actual email address */}
      <p>Address: Steinbock Minerals Ltd., Baarerstrasse 21, 6300 Zug, Switzerland</p> {/* Replace with the correct address */}
      {/* Consider adding an embedded map here if relevant */}
        <h2>Partner Inquiries</h2>
        <p>Interested in partnering with Steinbock Minerals? Talk to us!</p>
        <Link to="/partner-inquiry" className="button">Partner Inquiry</Link>

    </div>
  );
};

export default Contact;
