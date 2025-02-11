import React, { useState } from 'react';
import FormField from './FormField';

const ProjectsContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interestArea: '',
    message: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Form submitted:', formData);
        setSubmitSuccess(true);
    setFormData({ //reset form
      name: '',
      company: '',
      email: '',
      phone: '',
      interestArea: '',
      message: '',
    });
  };

  return (
    <div className="projects-contact-form">
       {submitSuccess ? (
        <div className="success-message">
          <p>Thank you for your inquiry! We will be in touch soon.</p>
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <FormField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
        <FormField label="Company" type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Your Company" />
        <FormField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
        <FormField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone (Optional)" />
        <div>
          <label htmlFor="interestArea">Interest Area:</label>
          <select id="interestArea" name="interestArea" value={formData.interestArea} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="investment">Investment Opportunities</option>
            <option value="technical">Technical Partnership</option>
            <option value="product">Product Inquiries</option>
            <option value="general">General Information</option>
          </select>
        </div>
        <FormField label="Message" type="textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" textarea />
        <button type="submit" className="button">Submit</button>
      </form>
      )}
    </div>
  );
};

export default ProjectsContact;
