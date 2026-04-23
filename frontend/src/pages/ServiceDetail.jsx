import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import './ServiceDetail.css';

const servicesData = {
  'manpower': {
    title: 'Mechanical Manpower Supply',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    desc: 'We provide highly skilled and certified mechanical manpower for various industrial projects. Our personnel are trained in safety protocols and have extensive experience in high-pressure environments.',
    benefits: ['Certified Technicians', 'Rapid Deployment', 'Safety Trained Personnel', 'Cost-Effective Scaling'],
    process: ['Requirement Analysis', 'Candidate Screening', 'Trade Testing', 'On-site Deployment']
  },
  'pumps': {
    title: 'Pump Installation & Maintenance',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    desc: 'Our experts specialize in the installation, commissioning, and maintenance of all types of industrial pumps, including centrifugal, positive displacement, and vacuum pumps.',
    benefits: ['Minimized Downtime', 'Extended Equipment Life', 'Expert Troubleshooting', 'Genuine Spare Parts'],
    process: ['Site Inspection', 'Fault Diagnosis', 'Repair/Service Plan', 'Final Testing']
  },
  // Add other services as needed
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id] || servicesData['manpower'];

  return (
    <div className="service-detail-page">
      <section className="service-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${service.image})` }}>
        <div className="container">
          <Link to="/services" className="back-link"><ArrowLeft size={20} /> Back to Services</Link>
          <h1>{service.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          <div className="service-main-content">
            <SectionHeading subtitle="Service Overview" title={`About ${service.title}`} />
            <p className="service-desc">{service.desc}</p>
            
            <div className="service-features-detail">
              <h3>Key Benefits</h3>
              <div className="benefits-list">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="benefit-item">
                    <CheckCircle className="accent" size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-process-detail">
              <h3>Our Work Approach</h3>
              <div className="process-list-detail">
                {service.process.map((step, i) => (
                  <div key={i} className="process-step-detail">
                    <span className="step-count">{i + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="service-sidebar">
            <div className="sidebar-cta">
              <h3>Need this service?</h3>
              <p>Contact our team for a detailed consultation and quotation.</p>
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
            </div>
            <div className="sidebar-links">
              <h3>Other Services</h3>
              <Link to="/services/pumps">Pump Maintenance</Link>
              <Link to="/services/piping">Piping & Structural</Link>
              <Link to="/services/vessels">Pressure Vessels</Link>
              <Link to="/services/manpower">Manpower Supply</Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
