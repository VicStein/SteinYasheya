import React, { useState } from 'react';
import FormField from './FormField';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    grade: '',
    deliveryLocation: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side validation (check for required fields)
    if (!formData.product || !formData.quantity || !formData.deliveryLocation) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Quote Request Submitted:', formData);
    setFormData({
      product: '',
      quantity: '',
      grade: '',
      deliveryLocation: '',
      requirements: '',
    });
  };

  return (
    <div className="container">
      <h2>Request a Quote</h2>
      <form onSubmit={handleSubmit}>
        <FormField label="Product" type="text" name="product" value={formData.product} onChange={handleChange} required placeholder="Enter product name" />
        <FormField label="Quantity" type="text" name="quantity" value={formData.quantity} onChange={handleChange} required placeholder="Enter quantity" />
        <FormField label="Grade" type="text" name="grade" value={formData.grade} onChange={handleChange} placeholder="Enter grade (if applicable)" />
        <FormField label="Delivery Location" type="text" name="deliveryLocation" value={formData.deliveryLocation} onChange={handleChange} required placeholder="Enter delivery location" />
        <FormField label="Specific Requirements" type="textarea" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Enter any specific requirements" textarea />
        <button type="submit" className="button">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestQuote;
