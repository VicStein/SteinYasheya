import React, { useState } from 'react';
import FormField from './FormField';

const PartnerInquiry = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    expertise: '',
    collaboration: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        if (!formData.companyName || !formData.expertise || !formData.collaboration) {
          alert('Please fill in all required fields.');
          return;
        }
    console.log('Partner Inquiry Submitted:', formData);
    setFormData({
      companyName: '',
      expertise: '',
      collaboration: '',
    });
  };

  return (
    <div className="container">
      <h2>Partner Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <FormField label="Company Name" type="text" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Enter your company name" />
        <FormField label="Areas of Expertise" type="text" name="expertise" value={formData.expertise} onChange={handleChange} required placeholder="Enter your areas of expertise" />
        <FormField label="Proposed Collaboration" type="textarea" name="collaboration" value={formData.collaboration} onChange={handleChange} required placeholder="Describe your proposed collaboration" textarea/>
        <button type="submit" className="button">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default PartnerInquiry;
