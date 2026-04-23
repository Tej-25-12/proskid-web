import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Search, MapPin, Briefcase, Clock, Filter, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Careers.css';

const jobsData = [
  {
    id: 1,
    title: 'Senior Mechanical Engineer',
    location: 'Houston, TX',
    experience: '8-10 Years',
    qualification: 'B.E. / B.Tech Mechanical',
    type: 'Full-time',
    department: 'Engineering',
    isUrgent: true
  },
  {
    id: 2,
    title: 'Site Supervisor (Piping)',
    location: 'Abu Dhabi, UAE',
    experience: '5-7 Years',
    qualification: 'Diploma / B.E. Mechanical',
    type: 'Contract',
    department: 'Operations',
    isUrgent: false
  },
  {
    id: 3,
    title: 'QA/QC Inspector',
    location: 'Chennai, India',
    experience: '4-6 Years',
    qualification: 'ASNT Level II / B.E.',
    type: 'Full-time',
    department: 'Quality',
    isUrgent: true
  },
  {
    id: 4,
    title: 'Pump Technician',
    location: 'Doha, Qatar',
    experience: '3-5 Years',
    qualification: 'ITI / Diploma Mechanical',
    type: 'Full-time',
    department: 'Maintenance',
    isUrgent: false
  },
  {
    id: 5,
    title: 'Safety Officer',
    location: 'Riyadh, Saudi Arabia',
    experience: '5+ Years',
    qualification: 'NEBOSH / IGC',
    type: 'Contract',
    department: 'HSE',
    isUrgent: false
  }
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('All');

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === 'All' || job.department === filterDept;
    return matchesSearch && matchesDept;
  });

  const departments = ['All', 'Engineering', 'Operations', 'Quality', 'Maintenance', 'HSE'];

  return (
    <div className="careers-page">
      <section className="page-header">
        <div className="container">
          <h1>Careers</h1>
          <p>Build Your Future With PROSKID Engineering</p>
        </div>
      </section>

      <section className="section bg-tertiary">
        <div className="container">
          <div className="search-filter-bar">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by role or location..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-box">
              <Filter size={20} className="filter-icon" />
              <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)}>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept} Department</option>
                ))}
              </select>
            </div>
          </div>

          <div className="jobs-container">
            <div className="jobs-count">
              Showing {filteredJobs.length} job openings
            </div>
            
            <div className="jobs-grid-careers">
              {filteredJobs.map((job, index) => (
                <motion.div 
                  key={job.id}
                  className={`job-card-large ${job.isUrgent ? 'urgent' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="job-main-info">
                    {job.isUrgent && <span className="urgent-badge">Urgent Opening</span>}
                    <h3>{job.title}</h3>
                    <div className="job-tags">
                      <span><MapPin size={16} /> {job.location}</span>
                      <span><Briefcase size={16} /> {job.experience}</span>
                      <span><Clock size={16} /> {job.type}</span>
                    </div>
                  </div>
                  <div className="job-footer-info">
                    <p><strong>Qualification:</strong> {job.qualification}</p>
                    <Link to={`/careers/${job.id}`} className="btn-apply">
                      View Details <ChevronRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="empty-state">
                <p>No jobs found matching your criteria.</p>
                <button onClick={() => {setSearchTerm(''); setFilterDept('All');}} className="btn btn-primary">Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section hr-contact">
        <div className="container hr-grid">
          <div className="hr-text">
            <h2>Couldn't find the right role?</h2>
            <p>Send us your resume and we'll contact you when a suitable position opens up.</p>
          </div>
          <div className="hr-action">
            <Link to="/contact" className="btn btn-primary">Submit Resume</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
