import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Award, ShieldCheck, FileText, Download } from 'lucide-react';
import './Certifications.css';

const certs = [
  { id: 1, title: 'ISO 9001:2015', organization: 'Quality Management System', desc: 'Certified for our commitment to quality across all engineering processes.' },
  { id: 2, title: 'ISO 45001:2018', organization: 'OH&S Management', desc: 'Recognized for our excellence in Occupational Health and Safety standards.' },
  { id: 3, title: 'ASME U-Stamp', organization: 'Boiler & Pressure Vessel', desc: 'Authorized to manufacture and repair pressure vessels under ASME standards.' },
  { id: 4, title: 'ISO 14001:2015', organization: 'Environmental Management', desc: 'Certified for our sustainable and eco-friendly industrial practices.' },
];

const Certifications = () => {
  return (
    <div className="certifications-page">
      <section className="page-header">
        <div className="container">
          <h1>Certifications & Quality</h1>
          <p>Our Commitment to Safety and Standards</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            subtitle="Standards of Excellence" 
            title="Certified Global Quality Benchmarks" 
            centered 
          />
          <div className="certs-grid">
            {certs.map(cert => (
              <div key={cert.id} className="cert-card">
                <div className="cert-icon"><Award size={40} /></div>
                <div className="cert-body">
                  <h3>{cert.title}</h3>
                  <span className="org">{cert.organization}</span>
                  <p>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container qa-process-grid">
          <div className="qa-text">
            <SectionHeading 
              subtitle="QA/QC Policy" 
              title="Rigorous Inspection at Every Level" 
            />
            <p>
              Quality is not just a department at PROSKID; it is a mindset. Our QA/QC team ensures 
              that every weld, every pipe, and every technician meets the highest international 
              standards before deployment or commissioning.
            </p>
            <ul className="qa-list">
              <li><ShieldCheck className="accent" /> NDT (Non-Destructive Testing)</li>
              <li><ShieldCheck className="accent" /> Material Traceability Reports</li>
              <li><ShieldCheck className="accent" /> Third-party Inspection Coordination</li>
              <li><ShieldCheck className="accent" /> Final Performance Commissioning</li>
            </ul>
          </div>
          <div className="qa-action">
            <div className="brochure-card">
              <FileText size={50} />
              <h4>Company Profile</h4>
              <p>Download our complete company profile and certifications list.</p>
              <button className="btn btn-primary"><Download size={18} /> Download PDF</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
