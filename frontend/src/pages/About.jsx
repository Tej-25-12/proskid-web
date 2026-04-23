import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Delivering Mechanical Excellence Since 2008</p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container intro-grid">
          <ScrollReveal direction="left" className="intro-text">
            <SectionHeading 
              subtitle="Our Story" 
              title="Legacy of Engineering Precision" 
            />
            <p>
              PROSKID Engineering started as a small mechanical workshop with a vision to redefine 
              industrial service standards. Over the years, we have grown into a multi-disciplinary 
              engineering firm trusted by global leaders in Oil & Gas, Power, and Manufacturing.
            </p>
            <p>
              Our commitment to safety, quality, and timely delivery has been the cornerstone of our success. 
              We don't just provide services; we build long-term partnerships that drive industrial growth.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="intro-image">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1170" alt="Workshop" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container mission-grid">
          <ScrollReveal direction="up" delay={0.2} className="mission-card">
            <div className="card-inner">
              <h3>Our Mission</h3>
              <p>To provide innovative mechanical engineering solutions and a highly skilled workforce that empowers our clients to achieve operational excellence safely and efficiently.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4} className="mission-card vision">
            <div className="card-inner">
              <h3>Our Vision</h3>
              <p>To be the global benchmark in industrial services and job deployment, known for our technical precision, safety culture, and commitment to sustainable engineering.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <ScrollReveal direction="up">
            <SectionHeading 
              subtitle="Core Values" 
              title="What We Stand For" 
              centered 
            />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3} staggerChildren={true} blur={true} scale={0.9} className="values-grid">
            <div className="value-item">
              <div className="value-num">01</div>
              <h4>Safety First</h4>
              <p>Zero-compromise approach to the health and safety of our workforce and clients.</p>
            </div>
            <div className="value-item">
              <div className="value-num">02</div>
              <h4>Quality Excellence</h4>
              <p>Rigorous QA/QC standards integrated into every stage of our service delivery.</p>
            </div>
            <div className="value-item">
              <div className="value-num">03</div>
              <h4>Innovation</h4>
              <p>Constantly adopting new technologies and methods to solve complex engineering challenges.</p>
            </div>
            <div className="value-item">
              <div className="value-num">04</div>
              <h4>Integrity</h4>
              <p>Building trust through transparency, ethics, and accountability in all our dealings.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
