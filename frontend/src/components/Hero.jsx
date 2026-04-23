import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-badge">Excellence in Engineering</span>
          <h1>Engineering Workforce & <span className="accent">Mechanical Excellence</span></h1>
          <p>
            Delivering high-precision mechanical services, industrial manpower deployment, 
            and turnkey engineering solutions for the global energy and infrastructure sectors.
          </p>
          <div className="hero-btns">
            <Link to="/services" className="btn btn-primary">
              Explore Services <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="hero-card">
            <div className="card-icon">
              <Play fill="currentColor" />
            </div>
            <div className="card-info">
              <span>Watch Our Workshop</span>
              <p>See our precision in action</p>
            </div>
          </div>
          <div className="hero-stat-floating">
            <span className="number">150+</span>
            <span className="label">Completed Projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
