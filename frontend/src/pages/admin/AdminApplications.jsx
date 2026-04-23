import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Eye, CheckCircle, XCircle, Download, FileText } from 'lucide-react';

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const { data } = await axios.get('http://localhost:5000/api/applications', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setApplications(data);
    } catch (error) {
      console.error('Error fetching applications', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(`http://localhost:5000/api/applications/${id}/status`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchApplications();
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Job Applications</h2>
        <p>Review and manage candidates for industrial roles.</p>
      </div>

      <div className="admin-toolbar">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search applicants..." />
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Position</th>
              <th>Experience</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="6">Loading...</td></tr>
            ) : (
              applications.map((app) => (
                <tr key={app._id}>
                  <td>
                    <div className="applicant-cell">
                      <strong>{app.name}</strong>
                      <span>{app.email}</span>
                    </div>
                  </td>
                  <td>{app.jobTitle || 'N/A'}</td>
                  <td>{app.experience}</td>
                  <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                  <td>
                    <span className={`badge badge-${app.status?.toLowerCase() || 'pending'}`}>
                      {app.status || 'Pending'}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="btn-icon" title="View Details"><Eye size={16} /></button>
                      <button 
                        className="btn-icon success" 
                        title="Shortlist"
                        onClick={() => updateStatus(app._id, 'Shortlisted')}
                      >
                        <CheckCircle size={16} />
                      </button>
                      <button 
                        className="btn-icon delete" 
                        title="Reject"
                        onClick={() => updateStatus(app._id, 'Rejected')}
                      >
                        <XCircle size={16} />
                      </button>
                      {app.resume && (
                        <a href={`http://localhost:5000/${app.resume}`} className="btn-icon" target="_blank" rel="noreferrer" title="Download Resume">
                          <Download size={16} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminApplications;
