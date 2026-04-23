import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import SisterCompanyPreview from '../components/SisterCompanyPreview';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
  const latestJobs = [
    { id: 1, title: 'Mechanical Engineer', location: 'Houston, TX', exp: '5+ Years', type: 'Full-time' },
    { id: 2, title: 'Welding Inspector', location: 'Abu Dhabi, UAE', exp: '3+ Years', type: 'Contract' },
    { id: 3, title: 'Piping Supervisor', location: 'Chennai, India', exp: '8+ Years', type: 'Full-time' },
  ];

  return (
    <div className="home-page">
      <Hero />
      
      <ScrollReveal direction="right" staggerChildren={true} delay={0.1}>
        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Technicians</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Safety Record</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ServicesPreview />

      <section className="section industries-preview">
        <div className="container">
          <ScrollReveal direction="up">
            <SectionHeading 
              subtitle="Who We Serve" 
              title="Excellence Across Diversified Industries" 
              centered 
            />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3} staggerChildren={true} className="industries-grid">
            <div className="industry-item">
              <img src="https://images.unsplash.com/photo-1542338106-200725968f9b?auto=format&fit=crop&q=80&w=400" alt="Oil & Gas" />
              <div className="industry-overlay">
                <h4>Oil & Gas</h4>
              </div>
            </div>
            <div className="industry-item">
              <img src="https://images.unsplash.com/photo-1574689049868-e94ed5301745?auto=format&fit=crop&q=80&w=400" alt="Power Plants" />
              <div className="industry-overlay">
                <h4>Power Plants</h4>
              </div>
            </div>
            <div className="industry-item">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" alt="Chemical" />
              <div className="industry-overlay">
                <h4>Chemical Plants</h4>
              </div>
            </div>
            <div className="industry-item">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" alt="Refineries" />
              <div className="industry-overlay">
                <h4>Refineries</h4>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SisterCompanyPreview />

      {/* Latest Jobs Section */}
      <section className="section jobs-section">
        <div className="container">
          <div className="jobs-header">
            <SectionHeading 
              subtitle="Careers" 
              title="Join Our Global Workforce" 
            />
            <a href="/careers" className="btn btn-secondary">View All Jobs</a>
          </div>

          <div className="jobs-list">
            {latestJobs.map((job) => (
              <motion.div 
                key={job.id} 
                className="job-card-simple"
                whileHover={{ x: 10 }}
              >
                <div className="job-info-basic">
                  <Briefcase size={20} className="accent" />
                  <div>
                    <h4>{job.title}</h4>
                    <div className="job-meta">
                      <span><MapPin size={14} /> {job.location}</span>
                      <span><Clock size={14} /> {job.type}</span>
                    </div>
                  </div>
                </div>
                <a href={`/careers/${job.id}`} className="apply-link">Apply Now</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to start your next engineering project?</h2>
          <p>Get in touch with our experts today for a consultation and specialized support.</p>
          <div className="cta-btns">
            <a href="/contact" className="btn btn-primary">Contact Us Now</a>
            <a href="/services" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
