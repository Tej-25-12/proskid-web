import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Container, GitBranch, ShieldCheck, Users, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import './ServicesPreview.css';

const services = [
  {
    icon: <Users size={40} />,
    title: 'Manpower Supply',
    desc: 'Expert industrial workforce deployment for large-scale engineering projects.'
  },
  {
    icon: <Droplets size={40} />,
    title: 'Pump Maintenance',
    desc: 'Comprehensive installation and servicing of industrial pumping systems.'
  },
  {
    icon: <Container size={40} />,
    title: 'Pressure Vessels',
    desc: 'Specialized support for pressure vessel fabrication and maintenance.'
  },
  {
    icon: <GitBranch size={40} />,
    title: 'Piping & Structural',
    desc: 'High-precision piping fabrication and structural welding services.'
  },
  {
    icon: <ShieldCheck size={40} />,
    title: 'QA/QC Inspection',
    desc: 'Rigorous quality assurance and control for engineering compliance.'
  },
  {
    icon: <Zap size={40} />,
    title: 'Plant Shutdown',
    desc: 'Efficient maintenance services during plant turnaround and shutdowns.'
  }
];

const ServicesPreview = () => {
  return (
    <section className="section services-preview">
      <div className="container">
        <SectionHeading 
          subtitle="Our Expertise" 
          title="World-Class Industrial Services" 
          centered 
        />
        
        <ScrollReveal 
          direction="up" 
          staggerChildren={true} 
          scale={0.9} 
          blur={true} 
          className="services-grid"
        >
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to="/services" className="learn-more">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesPreview;
