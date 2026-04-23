import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''}`}>
      <span className="subtitle">{subtitle}</span>
      <h2>{title}</h2>
      <div className="heading-line"></div>
    </div>
  );
};

export default SectionHeading;
