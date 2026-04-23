import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './SisterCompanyPreview.css';

const SisterCompanyPreview = () => {
  return (
    <section className="section sister-preview">
      <div className="container">
        <div className="sister-card">
          <ScrollReveal direction="left" className="sister-content">
            <span className="subtitle">Our Sister Company</span>
            <h2>SANVITECH <span className="accent">Fabsolutions</span></h2>
            <p>
              Expanding our reach with specialized industrial automation and 
              digital twins for heavy engineering projects. Sanvitech Fabsolutions 
              provides the technical edge for modern industrial challenges.
            </p>
            <div className="sister-features">
              <div className="feat">
                <span className="feat-dot"></span>
                <span>Smart Automation</span>
              </div>
              <div className="feat">
                <span className="feat-dot"></span>
                <span>Industrial IoT</span>
              </div>
              <div className="feat">
                <span className="feat-dot"></span>
                <span>Digital Asset Management</span>
              </div>
            </div>
            <Link to="/sister-company" className="btn btn-primary">
              Visit Company <ExternalLink size={18} />
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right" className="sister-image">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1170" alt="Sister Company" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SisterCompanyPreview;
