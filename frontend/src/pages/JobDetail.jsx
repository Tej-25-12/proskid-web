import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, Calendar, ChevronLeft, Send, MessageCircle } from 'lucide-react';
import './JobDetail.css';

const JobDetail = () => {
  const { id } = useParams();

  // Mock job data
  const job = {
    title: 'Senior Mechanical Engineer',
    location: 'Houston, TX',
    experience: '8-10 Years',
    type: 'Full-time',
    postedAt: '2 days ago',
    department: 'Engineering',
    qualification: 'B.E. / B.Tech Mechanical Engineering',
    description: 'We are looking for a Senior Mechanical Engineer to lead our on-site execution team for pressure vessel fabrication and installation projects.',
    responsibilities: [
      'Lead a team of engineers and technicians on-site.',
      'Ensure compliance with ASME and ISO standards.',
      'Coordinate with clients and project managers for timely delivery.',
      'Oversee QA/QC processes and safety protocols.'
    ],
    requirements: [
      'Proven experience in pressure vessel and piping projects.',
      'Strong leadership and communication skills.',
      'Knowledge of industrial safety standards (OSHA/HSE).',
      'Willingness to travel to project sites.'
    ]
  };

  return (
    <div className="job-detail-page">
      <section className="page-header job-header-bg">
        <div className="container">
          <Link to="/careers" className="back-link-job"><ChevronLeft size={20} /> Back to Careers</Link>
          <h1>{job.title}</h1>
          <div className="job-tags-header">
            <span><MapPin size={18} /> {job.location}</span>
            <span><Briefcase size={18} /> {job.experience}</span>
            <span><Clock size={18} /> {job.type}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container job-detail-grid">
          <div className="job-main-content">
            <div className="job-info-section">
              <h3>Job Description</h3>
              <p>{job.description}</p>
            </div>

            <div className="job-info-section">
              <h3>Key Responsibilities</h3>
              <ul className="job-list-detail">
                {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="job-info-section">
              <h3>Requirements</h3>
              <ul className="job-list-detail">
                {job.requirements.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="job-apply-form">
              <h3>Apply for this position</h3>
              <form className="apply-form-inner">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Resume / CV (PDF)</label>
                  <input type="file" required />
                </div>
                <div className="form-group">
                  <label>Cover Letter (Optional)</label>
                  <textarea rows="4" placeholder="Tell us why you are a good fit..."></textarea>
                </div>
                <div className="apply-btns">
                  <button type="submit" className="btn btn-primary">Submit Application <Send size={18} /></button>
                  <button type="button" className="btn btn-wa">Apply via WhatsApp <MessageCircle size={18} /></button>
                </div>
              </form>
            </div>
          </div>

          <aside className="job-sidebar">
            <div className="job-summary-card">
              <h3>Job Summary</h3>
              <div className="summary-item">
                <span className="label">Department</span>
                <span className="value">{job.department}</span>
              </div>
              <div className="summary-item">
                <span className="label">Qualification</span>
                <span className="value">{job.qualification}</span>
              </div>
              <div className="summary-item">
                <span className="label">Posted At</span>
                <span className="value">{job.postedAt}</span>
              </div>
            </div>
            
            <div className="hr-help-card">
              <h4>Need help?</h4>
              <p>Contact our HR department for any queries regarding this position.</p>
              <p><strong>Email:</strong> careers@proskid.com</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
