import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    desc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Thanks for contacting us!');
      setFormData({ name: '', email: '', phone: '', desc: '' });
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>We’d love to hear from you! ❤️</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="desc">Your Message</label>
            <textarea
              name="desc"
              id="desc"
              rows="2"
              value={formData.desc}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.btn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
