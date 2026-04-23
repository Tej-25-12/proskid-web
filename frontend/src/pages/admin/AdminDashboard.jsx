import React from 'react';
import { LayoutDashboard, Users, MessageSquare, Briefcase } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Active Jobs', value: '12', icon: <Briefcase size={24} />, color: '#3498db' },
    { label: 'New Applications', value: '45', icon: <Users size={24} />, color: '#e67e22' },
    { label: 'Total Inquiries', value: '89', icon: <MessageSquare size={24} />, color: '#2ecc71' },
    { label: 'Unread Messages', value: '5', icon: <MessageSquare size={24} />, color: '#e74c3c' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="admin-stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="admin-stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-recent-grid">
        <div className="admin-table-container">
          <h3>Recent Applications</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Position</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Mechanical Engineer</td>
                <td>Oct 20, 2023</td>
                <td><span className="badge badge-pending">Pending</span></td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        </div>
        
        <div className="admin-table-container">
          <h3>Recent Inquiries</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Global Oil Corp</td>
                <td>Quotation Request</td>
                <td><span className="badge badge-new">New</span></td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
