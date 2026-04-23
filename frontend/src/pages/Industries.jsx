import React from 'react';
import SectionHeading from '../components/SectionHeading';
import './Industries.css';

const industries = [
  {
    title: 'Oil & Gas',
    image: 'https://images.unsplash.com/photo-1542338106-200725968f9b?auto=format&fit=crop&q=80&w=600',
    desc: 'Supporting upstream, midstream, and downstream operations with specialized mechanical services.'
  },
  {
    title: 'Chemical Plants',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    desc: 'Expertise in corrosive environments and specialized chemical processing equipment.'
  },
  {
    title: 'Power Plants',
    image: 'https://images.unsplash.com/photo-1574689049868-e94ed5301745?auto=format&fit=crop&q=80&w=600',
    desc: 'Turnkey maintenance and erection services for thermal, nuclear, and renewable energy plants.'
  },
  {
    title: 'Water Treatment',
    image: 'https://images.unsplash.com/photo-1542338106-200725968f9b?auto=format&fit=crop&q=80&w=600', // Placeholder
    desc: 'Pumping solutions and piping systems for large-scale desalination and treatment facilities.'
  },
  {
    title: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600',
    desc: 'Supporting high-precision manufacturing lines with maintenance and technical staffing.'
  },
  {
    title: 'Marine & Offshore',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    desc: 'Specialized fabrication and mechanical support for offshore rigs and marine vessels.'
  }
];

const Industries = () => {
  return (
    <div className="industries-page">
      <section className="page-header">
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>Excellence Across Global Industrial Sectors</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            subtitle="Global Reach" 
            title="Providing Solutions for Critical Sectors" 
            centered 
          />
          <div className="industries-grid-full">
            {industries.map((ind, index) => (
              <div key={index} className="industry-card-full">
                <div className="ind-image">
                  <img src={ind.image} alt={ind.title} />
                </div>
                <div className="ind-content">
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
