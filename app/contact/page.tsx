'use client';
import React, { useState } from 'react';

// Interface to define the shape of formData
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  // TypeScript ko formData ka structure pata chal jayega
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Success message ka type define kiya
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Handle change function ka type define kiya
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit function ka type define kiya
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage('Submit Successfully');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } else {
      setSuccessMessage('Error sending message.');
    }
  };

  return (
    <div data-aos="flip-left" className="contact-container">
      {/* Top Section */}
      <div data-aos="flip-left" className="contact-header">
        <h2><b><i>Contact Me</i></b></h2>
      </div>

      {/* Center Section */}
      <form data-aos="flip-left" onSubmit={handleSubmit} className="contact-form">
        <div data-aos="flip-left" className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        />

        {/* Bottom Section */}
        <button className="submit-button" type="submit"><b>Submit</b></button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}
