import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Award, CheckCircle } from 'lucide-react';
import './SisterCompany.css';

const SisterCompany = () => {
  return (
    <div className="sister-company-page">
      <section className="page-header sister-header">
        <div className="container">
          <div className="sister-header-content">
            <span className="badge">Sister Company</span>
            <h1>SANVITECH <span className="accent">Fabsolutions</span></h1>
            <p>Industrial Automation & Digital Excellence</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sister-intro-grid">
          <div className="sister-intro-text">
            <SectionHeading 
              subtitle="Innovation Beyond Limits" 
              title="The Technical Edge for Heavy Engineering" 
            />
            <p>
              Sanvitech Fabsolutions was established to bridge the gap between traditional mechanical 
              engineering and the digital industrial revolution. We specialize in providing 
              state-of-the-art automation, IoT integration, and digital twin solutions 
              that optimize performance and reduce downtime.
            </p>
            <div className="sister-stats">
              <div className="sister-stat">
                <h4>50+</h4>
                <p>Digital Projects</p>
              </div>
              <div className="sister-stat">
                <h4>10+</h4>
                <p>Proprietary Systems</p>
              </div>
            </div>
          </div>
          <div className="sister-intro-image">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1170" alt="Automation" />
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <SectionHeading 
            subtitle="Our Services" 
            title="Specialized Technical Solutions" 
            centered 
          />
          <div className="sister-services-grid">
            <div className="sister-service-card">
              <Cpu size={50} className="accent" />
              <h3>Smart Automation</h3>
              <p>Custom PLC programming and SCADA systems for industrial process control.</p>
            </div>
            <div className="sister-service-card">
              <Globe size={50} className="accent" />
              <h3>Industrial IoT</h3>
              <p>Connecting physical assets to the cloud for real-time monitoring and analytics.</p>
            </div>
            <div className="sister-service-card">
              <Database size={50} className="accent" />
              <h3>Digital Twin</h3>
              <p>Creating exact digital replicas of physical assets for simulation and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sister-gallery">
        <div className="container">
          <SectionHeading 
            subtitle="Project Showcase" 
            title="Innovation in Action" 
            centered 
          />
          <div className="sister-grid">
            <div className="grid-item large">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Project 1" />
            </div>
            <div className="grid-item">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" alt="Project 2" />
            </div>
            <div className="grid-item">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" alt="Project 3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-sister">
        <div className="container text-center">
          <h2>Looking for high-tech industrial solutions?</h2>
          <p>Contact Sanvitech Fabsolutions for a customized automation strategy.</p>
          <a href="/contact" className="btn btn-primary">Inquire Now</a>
        </div>
      </section>
    </div>
  );
};

export default SisterCompany;
