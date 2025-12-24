import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About TechRoots</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Who We Are</h2>
        <p className={styles.text}>
          <strong>TechRoots</strong> is a modern platform dedicated to empowering developers and learners with practical coding knowledge. 
          Our mission is to help you grow your programming skills through hands-on projects, tutorials, and real-world challenges.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>What We Offer</h2>
        <p className={styles.text}>
          At TechRoots, we provide a wide range of resources for developers at all levels:
        </p>
        <ul className={styles.list}>
          <li>Comprehensive JavaScript Guides</li>
          <li>React & Next.js Real Projects</li>
          <li>Frontend & Backend Development Tutorials</li>
          <li>Portfolio & Resume Building Tips</li>
          <li>Interactive Live Coding Sessions</li>
          <li>Code Challenges & Quizzes</li>
          <li>Interview Preparation Material</li>
          <li>Community Support & Q&A</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Connect With Us</h2>
        <p className={styles.text}>
          Have questions or want to collaborate? Reach out to us via email or follow TechRoots on social media for the latest updates. 
          We love connecting with fellow developers and coding enthusiasts.
        </p>
      </section>
    </div>
  );
};

export default About;






