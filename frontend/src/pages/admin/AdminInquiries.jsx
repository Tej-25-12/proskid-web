import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Mail, CheckCircle, Clock } from 'lucide-react';

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const { data } = await axios.get('http://localhost:5000/api/inquiries', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Business Inquiries</h2>
        <p>Manage contact form submissions and service requests.</p>
      </div>

      <div className="admin-toolbar">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search inquiries..." />
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Client / Sender</th>
              <th>Subject</th>
              <th>Message Preview</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="6">Loading...</td></tr>
            ) : (
              inquiries.map((iq) => (
                <tr key={iq._id}>
                  <td>
                    <div className="applicant-cell">
                      <strong>{iq.name}</strong>
                      <span>{iq.email}</span>
                    </div>
                  </td>
                  <td>{iq.subject}</td>
                  <td><p className="table-msg-trunc">{iq.message}</p></td>
                  <td>{new Date(iq.createdAt).toLocaleDateString()}</td>
                  <td>
                    <span className="badge badge-new">New</span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="btn-icon" title="Reply"><Mail size={16} /></button>
                      <button className="btn-icon success" title="Mark Resolved"><CheckCircle size={16} /></button>
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

export default AdminInquiries;
