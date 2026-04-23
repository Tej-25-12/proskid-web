import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Briefcase, Users, MessageSquare, 
  Settings, Image, FileText, LogOut, Heart, Building 
} from 'lucide-react';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Jobs', path: '/admin/jobs', icon: <Briefcase size={20} /> },
    { name: 'Applications', path: '/admin/applications', icon: <Users size={20} /> },
    { name: 'Inquiries', path: '/admin/inquiries', icon: <MessageSquare size={20} /> },
    { name: 'Services', path: '/admin/services', icon: <Settings size={20} /> },
    { name: 'Projects', path: '/admin/projects', icon: <Image size={20} /> },
    { name: 'Sister Co.', path: '/admin/sister-company', icon: <Building size={20} /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <Heart size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <FileText size={20} /> },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <span className="logo-text">PRO<span className="accent">SKID</span></span>
        <h3>Admin Panel</h3>
      </div>
      
      <nav className="admin-nav">
        {menuItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path} 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
        
        <button className="admin-nav-item logout" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
