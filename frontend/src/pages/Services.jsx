import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import { 
  Droplets, Container, GitBranch, ShieldCheck, Users, 
  Zap, Hammer, Settings, Truck, Microscope 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesList = [
  {
    id: 'manpower',
    icon: <Users size={40} />,
    title: 'Mechanical Manpower Supply',
    summary: 'Skilled technicians, engineers, and supervisors for large-scale industrial projects.'
  },
  {
    id: 'pumps',
    icon: <Droplets size={40} />,
    title: 'Pump Installation & Maintenance',
    summary: 'Comprehensive servicing and installation of various industrial pumping systems.'
  },
  {
    id: 'vessels',
    icon: <Container size={40} />,
    title: 'Pressure Vessel Support',
    summary: 'Specialized fabrication, inspection, and maintenance support for pressure vessels.'
  },
  {
    id: 'piping',
    icon: <GitBranch size={40} />,
    title: 'Piping & Structural Works',
    summary: 'High-precision piping fabrication, structural steel works, and welding services.'
  },
  {
    id: 'maintenance',
    icon: <Settings size={40} />,
    title: 'Plant Maintenance',
    summary: 'Preventive and corrective maintenance programs to ensure peak plant performance.'
  },
  {
    id: 'shutdown',
    icon: <Zap size={40} />,
    title: 'Shutdown & Turnaround',
    summary: 'Rapid response maintenance and upgrade services during plant shutdowns.'
  },
  {
    id: 'welding',
    icon: <Hammer size={40} />,
    title: 'Welding & Fabrication',
    summary: 'Custom structural and mechanical fabrication for various industrial applications.'
  },
  {
    id: 'commissioning',
    icon: <Settings size={40} />,
    title: 'Erection & Commissioning',
    summary: 'Expert installation and startup services for industrial machinery and systems.'
  },
  {
    id: 'qaqc',
    icon: <ShieldCheck size={40} />,
    title: 'QA/QC Inspection Support',
    summary: 'Third-party inspection and quality control support for engineering compliance.'
  },
  {
    id: 'staffing',
    icon: <Users size={40} />,
    title: 'Industrial Staffing Solutions',
    summary: 'Comprehensive recruitment and deployment of technical staff for the engineering sector.'
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Mechanical & Industrial Solutions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            subtitle="Core Competencies" 
            title="Professional Solutions for Complex Engineering" 
            centered 
          />
          <ScrollReveal 
            direction="up" 
            staggerChildren={true} 
            scale={0.9} 
            blur={true} 
            className="services-grid-full"
          >
            {servicesList.map((service, index) => (
              <div key={service.id} className="service-card-full">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link to={`/services/${service.id}`} className="service-btn">
                  View Details
                </Link>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-tertiary">
        <div className="container work-process">
          <SectionHeading 
            subtitle="How We Work" 
            title="Our Systematic Approach" 
            centered 
          />
          <ScrollReveal direction="up" staggerChildren={true} className="process-steps">
            <div className="step">
              <div className="step-num">01</div>
              <h4>Consultation</h4>
              <p>We analyze your requirements and project scope in detail.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h4>Planning</h4>
              <p>Strategic planning and resource allocation for maximum efficiency.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h4>Execution</h4>
              <p>Deployment of experts and execution with strict safety protocols.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h4>QA/QC</h4>
              <p>Rigorous quality checks and final commissioning of the project.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
