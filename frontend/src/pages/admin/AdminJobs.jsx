import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Edit2, Trash2, Search, Filter } from 'lucide-react';

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/jobs');
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-jobs-page">
      <div className="admin-page-header">
        <div>
          <h2>Job Management</h2>
          <p>Create and manage industrial job openings.</p>
        </div>
        <button className="btn btn-primary"><Plus size={18} /> Add New Job</button>
      </div>

      <div className="admin-toolbar">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search jobs..." />
        </div>
        <div className="filter-box">
          <Filter size={18} />
          <select>
            <option>All Departments</option>
            <option>Engineering</option>
            <option>QA/QC</option>
          </select>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Location</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5">Loading...</td></tr>
            ) : (
              jobs.map((job) => (
                <tr key={job._id}>
                  <td><strong>{job.title}</strong></td>
                  <td>{job.location}</td>
                  <td>{job.type}</td>
                  <td><span className="badge badge-success">Active</span></td>
                  <td>
                    <div className="table-actions">
                      <button className="btn-icon"><Edit2 size={16} /></button>
                      <button className="btn-icon delete"><Trash2 size={16} /></button>
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

export default AdminJobs;
